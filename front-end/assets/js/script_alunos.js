// GRID DE IMAGENS 🏞️

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
  "https://imgur.com/xmt2zAj.jpeg",
  "https://imgur.com/kvaAXUS.jpeg",
  "https://imgur.com/HbusjjJ.jpeg",
  "https://imgur.com/227tG0a.jpeg",
  "https://imgur.com/0OWfbEi.jpeg",
  "https://imgur.com/JXnruxq.jpeg",
  "https://imgur.com/lUPlO05.jpeg",
  "https://imgur.com/FYTA9VD.jpeg",
  "https://imgur.com/f5uo8ng.jpeg",
  "https://imgur.com/Vuw97c9.jpeg",
  "https://imgur.com/dg5mVzj.jpeg",
  "https://imgur.com/BPaIs2A.jpeg",
  "https://imgur.com/3JO9noM.jpeg",
  "https://imgur.com/oet5B39.jpeg",
  "https://imgur.com/MEBtgcr.jpeg",
  "https://imgur.com/9vRkrit.jpeg",
  "https://imgur.com/bUXMq8E.jpeg",
  "https://imgur.com/ybt13lX.jpeg",
  "https://imgur.com/eAkc4Xe.jpeg",
  "https://imgur.com/oR7ENyp.jpeg",
  "https://imgur.com/IROAAxX.jpeg",
  "https://imgur.com/oBD3GHL.jpeg",
  "https://imgur.com/nJotLX3.jpeg",
  "https://imgur.com/AIwnjZu.jpeg",
  "https://imgur.com/JXnCMuD.jpeg",
  "https://imgur.com/Rd69wUT.jpeg",
  "https://imgur.com/qIktUI2.jpeg",
  "https://imgur.com/CJB9VoY.jpeg",
  "https://imgur.com/cbQ2iUW.jpeg",
  "https://imgur.com/KFZfr7S.jpeg",
  "https://imgur.com/cRljj76.jpeg",
  "https://imgur.com/uxwYOo4.jpeg",
  "https://imgur.com/ljIAqhr.jpeg",
  "https://imgur.com/MwsxVfl.jpeg",
  "https://imgur.com/24jKRBX.jpeg",
  "https://imgur.com/6ymct3E.jpeg",
  "https://imgur.com/7dCvnBV.jpeg",
  "https://imgur.com/Iz3Jr5G.jpeg",
  "https://imgur.com/SuElxjI.jpeg",
  "https://imgur.com/VzXFLmf.jpeg",
  "https://imgur.com/2Y2hiA5.jpeg",
  "https://imgur.com/oFy2nVC.jpeg",
  "https://imgur.com/lGuaCsA.jpeg",
  "https://imgur.com/tmEEZ5R.jpeg",
  "https://imgur.com/CPClVY8.jpeg",
  "https://imgur.com/xyTsQkq.jpeg",
  "https://imgur.com/vi34gKW.jpeg",
  "https://imgur.com/mN0kDq6.jpeg",
  "https://imgur.com/aJOEVjw.jpeg",
  "https://imgur.com/mVVK4fo.jpeg",
  "https://imgur.com/V4mZvQI.jpeg",
  "https://imgur.com/pW7K0UM.jpeg",
  "https://imgur.com/2f92e14.jpeg",
  "https://imgur.com/ZLuHMRp.jpeg",
  "https://imgur.com/ofdsedO.jpeg",
  "https://imgur.com/7o5DzwX.jpeg",
  "https://imgur.com/O7L7va1.jpeg",
  "https://imgur.com/lbkJpSt.jpeg",
  "https://imgur.com/1F0OkxK.jpeg",
  "https://imgur.com/wmaJDkx.jpeg",
  "https://imgur.com/2mZyDGP.jpeg",
  "https://imgur.com/dvZuetd.jpeg",
  "https://imgur.com/9IjIDNl.jpeg",
  "https://imgur.com/SEEySTd.jpeg",
  "https://imgur.com/fG5P1wV.jpeg",
  "https://imgur.com/tmDfDQo.jpeg",
  "https://imgur.com/BsHgyST.jpeg",
  "https://imgur.com/8tyOlpI.jpeg",
  "https://imgur.com/6DXPa6C.jpeg",
  "https://imgur.com/6zlnN9k.jpeg",
  "https://imgur.com/3ho8WPj.jpeg",
  "https://imgur.com/ceTCdYF.jpeg",
  "https://imgur.com/f1a9oa5.jpeg",
  "https://imgur.com/jIyWUWs.jpeg",
  "https://imgur.com/z9oe1zc.jpeg",
  "https://imgur.com/Fd3nTBG.jpeg",
  "https://imgur.com/hkvhYSf.jpeg",
  "https://imgur.com/76NSeB6.jpeg",
];

// O .filter() foi removido daqui!

let grid = document.getElementById("grid");
if (grid) {
  // Verificação essencial para não dar erro se o elemento não existir
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
