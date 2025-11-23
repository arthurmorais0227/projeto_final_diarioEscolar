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

  // GRID DE IMAGENS

  function weightedRand(spec) {
    let sum = 0;
    let r = Math.random();
    for (let i in spec) {
      sum += spec[i];
      if (r <= sum) return i;
    }
  }

  // Lista de imagens da pasta banco_fotos2
  let imagens = [
    "../assets/img/banco_fotos2/1000123118.jpeg",
    "../assets/img/banco_fotos2/1000138148.jpeg",
    "../assets/img/banco_fotos2/bola senai.jpg",
    "../assets/img/banco_fotos2/Captura de tela 2025-08-15 132028.png",
    "../assets/img/banco_fotos2/felipe dev.jpg",
    "../assets/img/banco_fotos2/Image_20251107_090709_007.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_074.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_103.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_137.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_169.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_212.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_230.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_290.jpeg",
    "../assets/img/banco_fotos2/Image_20251107_090709_331.jpeg",
    "../assets/img/banco_fotos2/IMG-20251107-WA0032.jpeg",
    "../assets/img/banco_fotos2/lívia e bianca - pulseiras.jpg",
    "../assets/img/banco_fotos2/lívia e bianca.JPG",
    "../assets/img/banco_fotos2/lívia e daniel.jpg",
    "../assets/img/banco_fotos2/meninas no dia feliz (1).JPG",
    "../assets/img/banco_fotos2/meninas no dia feliz.JPG",
    "../assets/img/banco_fotos2/nos + felipe dev.WEBP",
    "../assets/img/banco_fotos2/site do felipe dev.jpg",
    "../assets/img/banco_fotos2/tupi e piva.jpg",
    "../assets/img/banco_fotos2/tupi.jpg",
    "../assets/img/banco_fotos2/turma 1tds1.jpg",
    "../assets/img/banco_fotos2/WIN_20250523_09_43_58_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20250530_09_51_00_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20250801_16_03_40_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20250811_16_10_48_Pro (1).jpg",
    "../assets/img/banco_fotos2/WIN_20250901_13_32_27_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20250901_13_32_33_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20250926_11_23_12_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251003_13_30_20_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251003_13_59_14_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251003_15_56_13_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251003_15_56_39_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251003_20_20_20_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251009_13_59_14_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251013_14_09_06_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251017_08_05_08_Pro.jpg",
    "../assets/img/banco_fotos2/WIN_20251017_14_13_11_Pro.jpg",
  ];

  // **AQUI entra o passo 3**
  imagens = imagens.filter((src) => {
    const img = new Image();
    img.src = src;
    return img.complete || img.width > 0;
  });

  let grid = document.getElementById("grid");
  let n = 0;

  while (n < 40) {
    let span = weightedRand({ 1: 0.7, 2: 0.2, 3: 0.1 });
    let color = weightedRand({ 1: 0.2, 2: 0.2, 3: 0.2, 4: 0.2, 5: 0.2 });

    // Escolhe imagem aleatória da sua pasta
    let url = imagens[Math.floor(Math.random() * imagens.length)];

    let div = document.createElement("div");
    div.className = `card span-${span} c-${color}`;
    div.style.backgroundImage = `url('${url}')`;

    grid.appendChild(div);
    n++;
  }
});

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

// --- Copiar EMAIL ---
document.querySelectorAll(".int1 img").forEach((icon) => {
  icon.style.cursor = "pointer";

  icon.addEventListener("click", () => {
    const email = icon.previousElementSibling.textContent.trim();
    navigator.clipboard.writeText(email);

    criarAviso(icon.parentElement, "Email copiado!");
  });
});

// --- Copiar TELEFONE ---
document.querySelectorAll(".int2 img").forEach((icon) => {
  icon.style.cursor = "pointer";

  icon.addEventListener("click", () => {
    const telefone = icon.previousElementSibling.textContent.trim();
    navigator.clipboard.writeText(telefone);

    criarAviso(icon.parentElement, "Telefone copiado!");
  });
});

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

