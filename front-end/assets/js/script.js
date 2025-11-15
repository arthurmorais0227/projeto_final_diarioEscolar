const sunshine = document.getElementById("sunshine");
const tooltip = document.getElementById("tooltip");

sunshine.addEventListener("mouseenter", () => {
  tooltip.style.opacity = "1";
});

sunshine.addEventListener("mouseleave", () => {
  tooltip.style.opacity = "0";
});

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

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("publicacoes")) {
    carregarPostagens();
  }
});

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
