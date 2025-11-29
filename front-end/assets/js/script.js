console.log("Script carregado com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
  // FEED (caso exista no HTML)

  const dadosExemplo = {
    postagens: Array.from({ length: 10 }, (_, i) => {
      const autores = ["Sunshine", "Daniel", "Felipe Dev", "Arthur", "Maria"];
      const autor = autores[i % autores.length];
      return {
        id: i + 1,
        autor: autor,
        descricao: `Postagem ${
          i + 1
        } do ${autor} - Uma reflexão interessante sobre desenvolvimento e tecnologia na turma 1TDS1`,
      };
    }),
  };

  function renderizarPostagens(postagens, origem = "banco") {
    const publicacoesContainer = document.getElementById("publicacoes");
    if (!publicacoesContainer) return;

    publicacoesContainer.innerHTML = "";

    if (postagens && postagens.length > 0) {
      postagens.forEach((postagem) => {
        const feedDiv = document.createElement("div");
        feedDiv.className = "feed";

        feedDiv.innerHTML = `
            <h3>${postagem.autor || "Autor desconhecido"}</h3>
            <p>${postagem.descricao || "Sem descrição"}</p>
          `;

        publicacoesContainer.appendChild(feedDiv);
      });

      console.log(
        `✅ ${postagens.length} postagens carregadas da ${
          origem === "banco" ? "API" : "memória (exemplo)"
        }`
      );
    } else {
      publicacoesContainer.innerHTML =
        "<p>Nenhuma postagem disponível no momento.</p>";
    }
  }

  async function carregarPostagens() {
    try {
      const response = await fetch(
        "http://localhost:3000/postagens?limite=10",
        {
          signal: AbortSignal.timeout(5000),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      renderizarPostagens(data.postagens, "banco");
    } catch (error) {
      renderizarPostagens(dadosExemplo.postagens, "exemplo");
    }
  }

  if (document.getElementById("publicacoes")) {
    carregarPostagens();
  }

  // ANIMAÇÕES

  const elementosAnimar = document.querySelectorAll(".animar");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("mostrar");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elementosAnimar.forEach((el) => observador.observe(el));

  
  // Note que tudo isso está dentro do bloco document.addEventListener("DOMContentLoaded", ...)
  // que é onde ele deve ficar.

  function criarAviso(elemento, mensagem) {
    const aviso = document.createElement("div");
    aviso.classList.add("copiado-popup");
    aviso.textContent = mensagem;

    elemento.style.position = "relative";
    elemento.appendChild(aviso);

    setTimeout(() => {
      aviso.style.opacity = "1";
      aviso.style.transform = "translateY(-25px)";
    }, 10);

    setTimeout(() => {
      aviso.style.opacity = "0";
      aviso.style.transform = "translateY(-10px)";
      setTimeout(() => aviso.remove(), 250);
    }, 500);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const heart = document.getElementById("heart");
    const interacoes = document.getElementById("interacoes");

    // versões coloridas
    const opcoesColoridas = {
      hands_clapping: "./../assets/img/icons/hands-clapping_color.png",
      laughing: "./../assets/img/icons/laughin_color.png",
      like: "./../assets/img/icons/like_color.png",
      heart_option: "./../assets/img/icons/heart_color.png",
    };

    // abrir menu de reações
    heart.addEventListener("click", () => {
      interacoes.style.display = "flex";

      // animação de aparecimento
      requestAnimationFrame(() => {
        interacoes.style.opacity = "1";
        interacoes.style.transform = "translateY(0)";
      });

      // esconder o coração
      heart.style.opacity = "0";
      setTimeout(() => (heart.style.display = "none"), 200);
    });

    // quando clicar em uma reação
    document.querySelectorAll("#interacoes img").forEach((img) => {
      img.addEventListener("click", () => {
        const id = img.id;

        // 1 — troca a imagem do coração pela versão colorida
        heart.src = opcoesColoridas[id];
        heart.src = opcoesColoridas[id];

        // 2 — esconde o menu
        interacoes.style.opacity = "0";
        interacoes.style.transform = "translateY(8px)";
        setTimeout(() => (interacoes.style.display = "none"), 200);

        // 3 — mostra o coração de volta
        heart.style.display = "block";
        requestAnimationFrame(() => (heart.style.opacity = "1"));
      });
    });
  });

  // Se estamos na página de memórias, o arquivo `script_memorias.js` já gerencia o popup e envio.
  // Para evitar handlers duplicados (dois autores aparecendo), só anexa estes listeners
  // caso NÃO estejamos na página de memórias.
  if (!document.getElementById("memoriasList")) {
    const botaoCriar = document.querySelector(".criar_memoria button");
    const popup = document.getElementById("popupCriar");
    const fechar = document.getElementById("fecharPopup");

    const inputImagem = document.getElementById("inputImagem");
    const previewImagem = document.getElementById("previewImagem");

    const descricao = document.getElementById("descricao");
    const contador = document.getElementById("contadorDesc");

    const btnSalvar = document.getElementById("salvarMemoria");

    // 🔹 Função para resetar o popup
    function resetarPopup() {
      if (inputImagem) inputImagem.value = "";
      if (previewImagem) {
        previewImagem.src = "";
        previewImagem.style.display = "none";
      }

      if (descricao) descricao.value = "";
      if (contador) contador.textContent = "0/100";
    }

    // 🔹 Abrir popup
    if (botaoCriar && popup) {
      botaoCriar.addEventListener("click", () => {
        popup.style.display = "flex";
      });
    }

    // 🔹 Fechar popup
    function fecharPopup() {
      if (popup) popup.style.display = "none";
      resetarPopup();
    }

    if (fechar) fechar.addEventListener("click", fecharPopup);
    if (popup)
      popup.addEventListener("click", (e) => {
        if (e.target === popup) fecharPopup();
      });

    // 🔹 Preview da imagem
    if (inputImagem && previewImagem) {
      inputImagem.addEventListener("change", () => {
        const arquivo = inputImagem.files[0];

        if (!arquivo) {
          previewImagem.style.display = "none";
          return;
        }

        const url = URL.createObjectURL(arquivo);
        previewImagem.src = url;
        previewImagem.style.display = "block";
      });
    }

    // 🔹 Contador de caracteres
    if (descricao && contador) {
      descricao.addEventListener("input", () => {
        contador.textContent = `${descricao.value.length}/100`;
      });
    }

    // 🔹 Botão salvar: envia ao backend (comportamento antigo)
    if (btnSalvar) {
      btnSalvar.addEventListener("click", async () => {
        const arquivo = inputImagem ? inputImagem.files[0] : null;
        const texto = descricao ? descricao.value : "";

        if (!arquivo || texto.length === 0) {
          alert("Preencha a imagem e a descrição!");
          return;
        }

        const formData = new FormData();
        formData.append("imagem", arquivo);
        formData.append("descricao", texto);
        formData.append("autor", "Arthur Morais"); // pode ser dinâmico

        const resposta = await fetch("/api/postar", {
          method: "POST",
          body: formData,
        });

        const resultado = await resposta.json();
        console.log(resultado);

        alert("Memória criada com sucesso!");
        fecharPopup();
      });
    }
  }

});
