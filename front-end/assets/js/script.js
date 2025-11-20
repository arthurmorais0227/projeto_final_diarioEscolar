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
      const response = await fetch("http://localhost:3000/postagens?limite=10", {
        signal: AbortSignal.timeout(5000),
      });

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

// Lista de imagens da pasta banco_fotos
let imagens = [
  "/assets/img/banco_fotos/WIN_20251017_14_13_11_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20251003_15_56_39_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20251003_15_56_13_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20251003_13_59_14_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20251003_13_30_20_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20250926_11_23_12_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20250901_13_32_33_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20250811_16_10_48_Pro (1).jpg",
  "/assets/img/banco_fotos/WIN_20250801_16_03_40_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20250530_09_51_00_Pro.jpg",
  "/assets/img/banco_fotos/WIN_20250512_16_13_05_Pro.jpg",
  "/assets/img/banco_fotos/Image_20251107_090709_331.jpeg",
  "/assets/img/banco_fotos/1000138148.jpeg",
  "/assets/img/banco_fotos/Captura de tela 2025-08-15 132028.png",
  "/assets/img/banco_fotos/1000123118.jpeg",
  "/assets/img/banco_fotos/1000123114.jpeg"
];



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
