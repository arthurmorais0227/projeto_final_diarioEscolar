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

// ----------------------
// Renderização dinâmica dos alunos
// ----------------------
async function fetchAndRenderAlunos() {
  const container = document.querySelector('.alunos_geral');
  if (!container) return;

  // Limpa as divs estáticas (serão recriadas a partir do banco)
  container.innerHTML = '';

  try {
    // Tenta primeiro o endpoint relativo (mesma origem). Se a página estiver servida
    // de um host diferente (ex: http://localhost:8080), isso falhará — então tentamos
    // um fallback para o backend local (porta 3001 padrão do servidor).
    let resp = null;
    const tryRelative = () => fetch('/alunos');
    const tryAbsolute = () => fetch('http://localhost:3001/alunos');

    // Se estivermos num arquivo local (file://) ou origem diferente, pule o relativo.
    if (window.location.protocol === 'file:') {
      resp = await tryAbsolute();
    } else {
      try {
        resp = await tryRelative();
        // Se o servidor estático respondeu 404/500, resp.ok será false;
        // nesse caso tentamos o backend absoluto como fallback.
        if (!resp.ok) {
          resp = await tryAbsolute();
        }
      } catch (e) {
        // falha de rede com o relativo — tenta absoluto
        resp = await tryAbsolute();
      }
    }

    if (!resp) throw new Error('Sem resposta do servidor');
    if (!resp.ok) throw new Error(`Resposta não OK (${resp.status})`);
    const json = await resp.json();
    const alunos = json.alunos || [];

    alunos.forEach((a) => {
      const alunoDiv = document.createElement('div');
      alunoDiv.className = 'aluno';

      const nomeDiv = document.createElement('div');
      nomeDiv.className = 'nome_aluno';

      const img = document.createElement('img');
      img.src = a.aluno_foto && a.aluno_foto.length ? a.aluno_foto : './../assets/img/alunos/semfoto.png';
      img.alt = '';

      const p = document.createElement('p');
      p.textContent = a.nome || 'Aluno';

      nomeDiv.appendChild(img);
      nomeDiv.appendChild(p);

      const interacoes = document.createElement('div');
      interacoes.className = 'interacoes';

      const int1 = document.createElement('div');
      int1.className = 'int1';
      const spanEmail = document.createElement('span');
      spanEmail.className = 'tooltip';
      spanEmail.textContent = a.email || '';
      const emailIcon = document.createElement('img');
      emailIcon.src = './../assets/img/email.png';
      emailIcon.alt = '';
      int1.appendChild(spanEmail);
      int1.appendChild(emailIcon);

      const int2 = document.createElement('div');
      int2.className = 'int2';
      const spanTel = document.createElement('span');
      spanTel.className = 'tooltip';
      spanTel.textContent = a.telefone || '';
      const telIcon = document.createElement('img');
      telIcon.src = './../assets/img/telefone.png';
      telIcon.alt = '';
      int2.appendChild(spanTel);
      int2.appendChild(telIcon);

      interacoes.appendChild(int1);
      interacoes.appendChild(int2);

      alunoDiv.appendChild(nomeDiv);
      alunoDiv.appendChild(interacoes);

      container.appendChild(alunoDiv);
    });

    // Depois de inserir, reaplica os listeners de cópia
    attachCopyHandlers();
  } catch (error) {
    console.error('Erro ao buscar alunos:', error);
    // Se falhar, não remove a aparência - opcional: mostrar mensagem
    const errMsg = document.createElement('p');
    errMsg.textContent = 'Não foi possível carregar a lista de alunos.';
    container.appendChild(errMsg);
  }
}

// Chama a função (tenta obter alunos do backend)
fetchAndRenderAlunos();

// ----------------------------------------------------------------------
// --- CÓDIGO DE CÓPIA E EXIBIÇÃO DO POPUP PERTO DO ÍCONE ---
// ----------------------------------------------------------------------

/**
 * Cria e exibe um pop-up de aviso ao lado do elemento de ícone.
 * @param {HTMLElement} parentElement - O contêiner (.int1 ou .int2) pai do ícone.
 * @param {string} message - A mensagem a ser exibida (Ex: "E-mail copiado!").
 */
function showPopupNextToIcon(parentElement, message) {
  // 1. Cria o elemento do pop-up
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.classList.add('copy-popup');

  // 2. Adiciona ao contêiner pai para posicionamento relativo ao ícone
  parentElement.appendChild(popup);

  // 3. Força o reflow para garantir a transição
  void popup.offsetWidth; 

  // 4. Exibe o pop-up
  popup.classList.add('mostrar');

  // 5. Remove o pop-up após 1.5 segundos
  setTimeout(() => {
    popup.classList.remove('mostrar');
    // Remove o elemento do DOM após a animação de desaparecimento
    setTimeout(() => {
      popup.remove();
    }, 300); 
  }, 400); 
}

/**
 * Copia o texto e mostra o aviso.
 * @param {string} textToCopy - O texto a ser copiado.
 * @param {HTMLElement} parentElement - O contêiner (.int1 ou .int2) pai do ícone.
 * @param {string} message - A mensagem a ser exibida no aviso.
 */
function copyAndShowNotice(textToCopy, parentElement, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showPopupNextToIcon(parentElement, message);
    }).catch(err => {
      console.error('Erro ao copiar o texto: ', err);
      alert(`Não foi possível copiar automaticamente. Conteúdo: ${textToCopy}`);
    });
  } else {
    // Fallback
    alert(`Seu navegador não suporta cópia automática. Copie manualmente: ${textToCopy}`);
  }
}

// ----------------------------------------------------
// --- Adiciona evento de clique para E-MAIL (.int1) ---
// ----------------------------------------------------

function attachCopyHandlers() {
  document.querySelectorAll(".int1").forEach((container) => {
    const icon = container.querySelector("img");
    const tooltip = container.querySelector(".tooltip"); // Contém o e-mail

    if (icon && tooltip && !icon.dataset.copyAttached) {
      icon.style.cursor = "pointer";
      icon.dataset.copyAttached = '1';
      icon.addEventListener("click", (event) => {
        event.stopPropagation();
        const email = tooltip.textContent.trim();
        copyAndShowNotice(email, container, "E-mail copiado!");
      });
    }
  });

  document.querySelectorAll(".int2").forEach((container) => {
    const icon = container.querySelector("img");
    const tooltip = container.querySelector(".tooltip"); // Contém o telefone

    if (icon && tooltip && !icon.dataset.copyAttached) {
      icon.style.cursor = "pointer";
      icon.dataset.copyAttached = '1';
      icon.addEventListener("click", (event) => {
        event.stopPropagation();
        const phone = tooltip.textContent.trim();
        copyAndShowNotice(phone, container, "Telefone copiado!");
      });
    }
  });
}


// -----------------------------------------------------
// --- Adiciona evento de clique para TELEFONE (.int2) ---
// -----------------------------------------------------

document.querySelectorAll(".int2").forEach((container) => {
  const icon = container.querySelector("img");
  const tooltip = container.querySelector(".tooltip"); // Contém o telefone
  
  if (icon && tooltip) {
    icon.style.cursor = "pointer";
    
    icon.addEventListener("click", (event) => {
      event.stopPropagation();
      const phone = tooltip.textContent.trim(); 
      // Passamos o 'container' como referência para o pop-up
      copyAndShowNotice(phone, container, "Telefone copiado!");
    });
  }
});

// --- Animação de elementos ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    } else {
      entry.target.classList.remove('mostrar');
    }
  });
});

document.querySelectorAll('.animar').forEach((el) => observer.observe(el));

// Caso existam elementos estáticos já na página (antes do fetch), também aplica handlers
attachCopyHandlers();