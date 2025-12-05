// Script externo para a página de memórias
// Este código foi movido de memorias.html para um arquivo dedicado

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("memoriasList");
  const abrirPopupBtn = document.getElementById("abrirPopup");
  const popup = document.getElementById("popupCriar");
  const fecharPopupBtn = document.getElementById("fecharPopup");
  const inputImagem = document.getElementById("inputImagem");
  const previewImagem = document.getElementById("previewImagem");
  const descricaoEl = document.getElementById("descricao");
  const contadorDesc = document.getElementById("contadorDesc");
  const salvarBtn = document.getElementById("salvarMemoria");
  const inputAutor = document.getElementById("inputAutor");

  // estado temporário da imagem (data URL) para envio
  let imagemDataUrl = null;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  async function loadMemorias() {
    try {
      // Tenta buscar o endpoint em várias portas comuns (3001, 3000) para tolerância
      const candidateUrls = [
        "http://localhost:3001/postagens",
        "http://localhost:3000/postagens",
        `${location.protocol}//${location.hostname}:3001/postagens`,
        `${location.protocol}//${location.hostname}:3000/postagens`,
      ];

      let resp = null;
      let lastError = null;
      for (const url of candidateUrls) {
        try {
          resp = await fetch(url);
          if (resp && resp.ok) {
            break;
          }
          // se não ok, guardar erro e tentar próximo
          lastError = new Error(
            "Status " + (resp ? resp.status : "no-response") + " from " + url
          );
        } catch (e) {
          lastError = e;
        }
      }

      if (!resp) throw lastError || new Error("Nenhuma resposta do servidor");
      if (!resp.ok) throw new Error("Erro ao buscar postagens: " + resp.status);
      const data = await resp.json();
      const posts = data.postagens || [];

      // guardar cache local para busca/filtragem
      postsCache = posts.slice();
      renderPosts(postsCache);
    } catch (err) {
      console.error(err);
      const msg = err && err.message ? err.message : String(err);
      const stack = err && err.stack ? err.stack : "";
      list.innerHTML = `
        <div class="erro_carregamento">
          <p>Erro ao carregar memórias: ${escapeHtml(msg)}</p>
          <details style="white-space:pre-wrap; margin-top:8px;"><summary>Detalhes (stack)</summary>${escapeHtml(
            stack
          )}</details>
          <p>Tente reiniciar o back-end e recarregar a página (F5).</p>
        </div>
      `;
    }
  }

  loadMemorias();

  // cache das postagens carregadas
  let postsCache = [];

  // renderiza um conjunto de postagens (usado para busca/filtragem)
  function renderPosts(posts) {
    list.innerHTML = "";
    if (!posts || posts.length === 0) {
      list.innerHTML = "<p>Nenhuma memória encontrada.</p>";
      return;
    }

    posts.forEach((post) => {
      const record = document.createElement("div");
      record.className = "recordacao";

      const autor = escapeHtml(post.autor || "Autor desconhecido");
      const descricao = escapeHtml(post.descricao || "");
      const imagemSrcRaw = post.imagem || "";
      let imagemSrc = imagemSrcRaw;

      // Se for base64, NÃO ALTERAR
      if (!imagemSrcRaw.startsWith("data:image")) {
        // se for caminho de arquivo simples, então sim, aplicar lógica
        try {
          if (
            imagemSrcRaw &&
            !/^(https?:)?\/\//i.test(imagemSrcRaw) &&
            !imagemSrcRaw.startsWith("/")
          ) {
            imagemSrc = "/assets/img/banco_fotos2/" + imagemSrcRaw;
          }
        } catch {}
      }

      const placeholder =
        "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      record.innerHTML = `
        <div class="recordacao_titulo">
          <div class="autor">
          <h3>${autor}</h3>
          <small>ID: ${post.id}</small>
          </div>
        </div>
        <div class="imagem_recordacao">
          <img class="lazy-img" data-src="${escapeHtml(
            imagemSrc
          )}" src="${placeholder}" alt="imagem da recordação" loading="lazy" onerror="this.onerror=null;this.src='/assets/img/myschooldiary.png'">
        </div>
        <div class="descricao"><p>${descricao}</p></div>
      `;

      list.appendChild(record);

      // tornar clicável: abre popup de detalhes (tentamos buscar por id no servidor, senão usamos o objeto local)
      record.style.cursor = "pointer";
      record.addEventListener("click", async () => {
        try {
          await openDetalhes(post.id, post);
        } catch (e) {
          console.error("Erro abrindo detalhes:", e);
        }
      });
    });

    // after DOM updated, (re)attach lazy loader
    setupLazyLoading();
  }

  // helper para resolver src de imagem (mesma lógica usada ao renderizar)
  function resolveImageSrc(imagemSrcRaw) {
    if (!imagemSrcRaw) return "/assets/img/myschooldiary.png";
    if (String(imagemSrcRaw).startsWith("data:image")) return imagemSrcRaw;
    try {
      if (
        imagemSrcRaw &&
        !/^(https?:)?\/\//i.test(imagemSrcRaw) &&
        !imagemSrcRaw.startsWith("/")
      ) {
        return "/assets/img/banco_fotos2/" + imagemSrcRaw;
      }
    } catch {}
    return imagemSrcRaw;
  }

  // tenta buscar post por id no backend; retorna objeto ou null
  async function fetchPostById(id) {
    if (!id && id !== 0) return null;
    const candidateUrls = [
      "http://localhost:3001/postagens",
      "http://localhost:3000/postagens",
      `${location.protocol}//${location.hostname}:3001/postagens`,
      `${location.protocol}//${location.hostname}:3000/postagens`,
    ];

    let lastError = null;
    for (const base of candidateUrls) {
      const url = `${base}/${encodeURIComponent(id)}`;
      try {
        const resp = await fetch(url);
        if (resp && resp.ok) {
          const data = await resp.json();
          // assumir que o endpoint retorna o objeto diretamente ou { post: ... }
          return data.postagem || data.post || data || null;
        }
      } catch (e) {
        lastError = e;
      }
    }
    return null;
  }

  // busca comentários de uma postagem pelo id da postagem
  async function fetchComentariosPorPostagem(id_postagem) {
    if (!id_postagem && id_postagem !== 0) return [];
    const candidateUrls = [
      "http://localhost:3001/comentarios/postagem",
      "http://localhost:3000/comentarios/postagem",
      `${location.protocol}//${location.hostname}:3001/comentarios/postagem`,
      `${location.protocol}//${location.hostname}:3000/comentarios/postagem`,
    ];

    let lastError = null;
    for (const base of candidateUrls) {
      const url = `${base}/${encodeURIComponent(id_postagem)}`;
      try {
        const resp = await fetch(url);
        if (resp && resp.ok) {
          const data = await resp.json();
          return data.comentarios || data.comentario || [];
        }
      } catch (e) {
        lastError = e;
      }
    }
    return [];
  }

  // renderiza lista de comentários no UL
  function renderComentarios(comentarios, containerUL) {
    if (!containerUL) return;
    containerUL.innerHTML = "";
    
    if (!comentarios || comentarios.length === 0) {
      containerUL.innerHTML = "<li style=\"text-align: center; color: #999;\">Nenhum comentário ainda</li>";
      return;
    }

    comentarios.forEach((com) => {
      const li = document.createElement("li");
      const autor = escapeHtml(com.autor || "Anônimo");
      const texto = escapeHtml(com.comentario || "");
      li.innerHTML = `<strong>${autor}:</strong> ${texto}`;
      containerUL.appendChild(li);
    });
  }

  // adiciona um novo comentário e atualiza a lista
  async function adicionarNovoComentario(id_postagem, containerUL, textareaEl) {
    if (!textareaEl || !textareaEl.value.trim()) {
      alert("Por favor, escreva um comentário.");
      return;
    }

    const autorComentario = prompt("Seu nome (opcional):") || "Anônimo";
    const textoComentario = textareaEl.value.trim();

    const payload = {
      autor: autorComentario,
      comentario: textoComentario,
      id_postagem: id_postagem
    };

    const candidateUrls = [
      "http://localhost:3001/comentarios",
      "http://localhost:3000/comentarios",
      `${location.protocol}//${location.hostname}:3001/comentarios`,
      `${location.protocol}//${location.hostname}:3000/comentarios`,
    ];

    let resp = null;
    let lastError = null;
    for (const url of candidateUrls) {
      try {
        resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (resp && resp.ok) break;
        lastError = new Error(
          "Status " + (resp ? resp.status : "no-response") + " from " + url
        );
      } catch (err) {
        lastError = err;
      }
    }

    if (!resp || !resp.ok) {
      console.error("Erro ao enviar comentário:", lastError);
      alert("Erro ao enviar comentário. Tente novamente.");
      return;
    }

    // sucesso — limpar e recarregar comentários
    textareaEl.value = "";
    const comentarios = await fetchComentariosPorPostagem(id_postagem);
    renderComentarios(comentarios, containerUL);
  }

  // abre o popup de detalhes preenchendo os campos
  async function openDetalhes(id, fallbackPost) {
    let post = null;
    try {
      post = await fetchPostById(id);
    } catch (e) {
      console.warn("Erro ao buscar por id, usando fallback:", e);
    }
    post = post || fallbackPost || null;
    if (!post) {
      alert("Detalhes não disponíveis para esta memória.");
      return;
    }

    const popupDetalhes = document.getElementById("popupDetalhes");
    const fecharDetalhes = document.getElementById("fecharDetalhes");
    const detalheImagem = document.getElementById("detalheImagem");
    const detalheAutorValue = document.getElementById("detalheAutorValue");
    const detalheDescricaoValue = document.getElementById(
      "detalheDescricaoValue"
    );
    const detalheIdValue = document.getElementById("detalheIdValue");
    const comentariosList = document.getElementById("comentariosList");
    const novoComentario = document.getElementById("novoComentario");
    const adicionarComentario = document.getElementById("adicionarComentario");

    // preencher dados da postagem
    if (detalheAutorValue)
      detalheAutorValue.textContent = post.autor || "Autor desconhecido";
    if (detalheDescricaoValue)
      detalheDescricaoValue.textContent = post.descricao || "";
    if (detalheIdValue)
      detalheIdValue.textContent = post.id != null ? String(post.id) : "-";
    if (detalheImagem) detalheImagem.src = resolveImageSrc(post.imagem || "");

    // buscar comentários da postagem
    if (comentariosList) {
      comentariosList.innerHTML = "<li style=\"text-align: center; color: #999;\">Carregando comentários...</li>";
      try {
        const comentarios = await fetchComentariosPorPostagem(post.id);
        renderComentarios(comentarios, comentariosList);
      } catch (e) {
        console.error("Erro ao buscar comentários:", e);
        comentariosList.innerHTML = "<li style=\"text-align: center; color: #999;\">Erro ao carregar comentários</li>";
      }
    }

    // limpar e preparar field de novo comentário
    if (novoComentario) novoComentario.value = "";

    // remover listeners antigos
    if (adicionarComentario) {
      const novoBtn = adicionarComentario.cloneNode(true);
      adicionarComentario.parentNode.replaceChild(novoBtn, adicionarComentario);
      novoBtn.addEventListener("click", async () => {
        await adicionarNovoComentario(post.id, comentariosList, novoComentario);
      });
    }

    // mostrar popup
    if (popupDetalhes) popupDetalhes.style.display = "flex";

    // fechar handlers
    if (fecharDetalhes) {
      fecharDetalhes.onclick = () => {
        if (popupDetalhes) popupDetalhes.style.display = "none";
      };
    }
    if (popupDetalhes) {
      popupDetalhes.onclick = (e) => {
        if (e.target === popupDetalhes) popupDetalhes.style.display = "none";
      };
    }
  }

  // IntersectionObserver lazy loader (re-usable)
  let _io = null;
  function setupLazyLoading() {
    const lazyImages = document.querySelectorAll("img.lazy-img[data-src]");
    if (_io) {
      // disconnect previous observer to avoid leaks
      try {
        _io.disconnect();
      } catch (e) {}
      _io = null;
    }

    if ("IntersectionObserver" in window) {
      _io = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = img.dataset.src;
              if (src) {
                img.src = src;
                img.removeAttribute("data-src");
                img.addEventListener("load", () => img.classList.add("loaded"));
              }
              observer.unobserve(img);
            }
          });
        },
        {
          root: null,
          rootMargin: "200px",
          threshold: 0.01,
        }
      );

      lazyImages.forEach((img) => _io.observe(img));
    } else {
      lazyImages.forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.addEventListener("load", () => img.classList.add("loaded"));
      });
    }
  }

  // search/filter: campo existente em memorias.html
  const filtroInput = document.getElementById("filtroMemorias");
  function debounce(fn, wait = 250) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  function applyFilter(q) {
    if (!q) {
      renderPosts(postsCache);
      return;
    }
    const term = String(q).trim().toLowerCase();
    const filtered = postsCache.filter((p) => {
      if (!p) return false;
      // match id exactly or numeric contains
      if (p.id && String(p.id) === term) return true;
      if (String(p.id).includes(term)) return true;
      if (p.autor && String(p.autor).toLowerCase().includes(term)) return true;
      if (p.descricao && String(p.descricao).toLowerCase().includes(term))
        return true;
      return false;
    });
    renderPosts(filtered);
  }

  if (filtroInput) {
    filtroInput.addEventListener(
      "input",
      debounce((e) => applyFilter(e.target.value), 250)
    );
  }

  // --- Popup / criar memória handlers ---
  function abrirPopup() {
    if (popup) popup.style.display = "flex";
  }

  function fecharPopup() {
    if (popup) popup.style.display = "none";
    // limpar campos
    if (inputImagem) {
      inputImagem.value = "";
      imagemDataUrl = null;
    }
    if (previewImagem) {
      previewImagem.style.display = "none";
      previewImagem.src = "";
    }
    if (descricaoEl) descricaoEl.value = "";
    if (inputAutor) inputAutor.value = "";
    if (contadorDesc) contadorDesc.textContent = "0/100";
  }

  if (abrirPopupBtn) abrirPopupBtn.addEventListener("click", abrirPopup);
  if (fecharPopupBtn) fecharPopupBtn.addEventListener("click", fecharPopup);

  // fechar ao clicar fora do conteúdo
  if (popup)
    popup.addEventListener("click", (e) => {
      if (e.target === popup) fecharPopup();
    });

  // contador de caracteres
  if (descricaoEl && contadorDesc) {
    descricaoEl.addEventListener("input", () => {
      contadorDesc.textContent = `${descricaoEl.value.length}/100`;
    });
  }

  // preview da imagem e conversão para data URL
  if (inputImagem && previewImagem) {
    inputImagem.addEventListener("change", () => {
      const file = inputImagem.files && inputImagem.files[0];
      if (!file) {
        imagemDataUrl = null;
        previewImagem.style.display = "none";
        previewImagem.src = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        imagemDataUrl = reader.result; // data:image/...
        previewImagem.src = imagemDataUrl;
        previewImagem.style.display = "block";
      };
      reader.readAsDataURL(file);
    });
  }

  //camera
  const abrirCameraBtn = document.getElementById("abrirCameraBtn");
  const capturarFotoBtn = document.getElementById("capturarFotoBtn");
  const camera = document.getElementById("camera");
  let stream; // armazenar a câmera ativa

  // abrir a câmera quando solicitado
  if (abrirCameraBtn) {
    abrirCameraBtn.addEventListener("click", async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (camera) {
          camera.srcObject = stream;
          camera.style.display = "block";
        }
        if (capturarFotoBtn) capturarFotoBtn.style.display = "block";
      } catch (err) {
        alert("Não foi possível acessar a câmera");
        console.error(err);
      }
    });
  }

  // capturar foto: desenhar no canvas, obter dataURL e armazenar em imagemDataUrl
  if (capturarFotoBtn) {
    capturarFotoBtn.addEventListener("click", () => {
      const canvas = document.createElement("canvas");

      canvas.width = (camera && camera.videoWidth) || 640;
      canvas.height = (camera && camera.videoHeight) || 480;

      const ctx = canvas.getContext("2d");
      if (camera) ctx.drawImage(camera, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL("image/png");

      // guarda o dataURL para envio no salvar
      imagemDataUrl = dataURL;

      // mostra no preview (mesmo comportamento do input file)
      if (previewImagem) {
        previewImagem.src = dataURL;
        previewImagem.style.display = "block";
      }

      // fecha a câmera
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        stream = null;
      }
      if (camera) camera.style.display = "none";
      if (capturarFotoBtn) capturarFotoBtn.style.display = "none";
    });
  }

  // Envia a nova memória para o backend
  if (salvarBtn) {
    salvarBtn.addEventListener("click", async () => {
      const autor =
        inputAutor && inputAutor.value ? inputAutor.value.trim() : "Anônimo";
      const descricao = descricaoEl ? descricaoEl.value.trim() : "";

      // validar
      if (!descricao && !imagemDataUrl) {
        alert(
          "Por favor, adicione uma imagem ou uma descrição antes de salvar."
        );
        return;
      }

      // corpo a ser enviado: imagem como data URL (se fornecida)
      const payload = { autor, descricao, imagem: imagemDataUrl || "" };

      // tentar enviar para as mesmas urls candidatas usadas no carregamento
      const candidateUrls = [
        "http://localhost:3001/postagens",
        "http://localhost:3000/postagens",
        `${location.protocol}//${location.hostname}:3001/postagens`,
        `${location.protocol}//${location.hostname}:3000/postagens`,
      ];

      let resp = null;
      let lastError = null;
      for (const url of candidateUrls) {
        try {
          resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (resp && resp.ok) break;
          lastError = new Error(
            "Status " + (resp ? resp.status : "no-response") + " from " + url
          );
        } catch (err) {
          lastError = err;
        }
      }

      if (!resp || !resp.ok) {
        console.error("Erro ao enviar nova memória:", lastError, resp);
        // tentar obter mais detalhes do response (se houver)
        let detalhe = "";
        try {
          if (resp && resp.text)
            detalhe =
              "\nResposta servidor: " + (await resp.text()).slice(0, 500);
        } catch (e) {
          // ignora
        }
        alert(
          "Erro ao enviar memória. Verifique o servidor e tente novamente.\n\nDetalhe: " +
            (lastError && lastError.message
              ? lastError.message
              : String(lastError)) +
            detalhe
        );
        return;
      }

      // sucesso — atualizar a lista (simples: recarregar memórias)
      await loadMemorias();
      fecharPopup();
    });
  }
});
