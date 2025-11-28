// Script externo para a página de memórias
// Este código foi movido de memorias.html para um arquivo dedicado

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('memoriasList');

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function loadMemorias() {
    try {
      // Tenta buscar o endpoint em várias portas comuns (3001, 3000) para tolerância
      const candidateUrls = [
        'http://localhost:3001/postagens',
        'http://localhost:3000/postagens',
        `${location.protocol}//${location.hostname}:3001/postagens`,
        `${location.protocol}//${location.hostname}:3000/postagens`
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
          lastError = new Error('Status ' + (resp ? resp.status : 'no-response') + ' from ' + url);
        } catch (e) {
          lastError = e;
        }
      }

      if (!resp) throw lastError || new Error('Nenhuma resposta do servidor');
      if (!resp.ok) throw new Error('Erro ao buscar postagens: ' + resp.status);
      const data = await resp.json();
      const posts = data.postagens || [];

      list.innerHTML = '';

      if (posts.length === 0) {
        list.innerHTML = '<p>Nenhuma memória encontrada.</p>';
        return;
      }

      posts.forEach(post => {
        const record = document.createElement('div');
        record.className = 'recordacao';

        const autor = escapeHtml(post.autor || 'Autor desconhecido');
        const descricao = escapeHtml(post.descricao || '');
        // imagem: assume que o campo contém uma URL ou caminho utilizável
        const imagemSrcRaw = post.imagem || '';
        // Normalizar src da imagem:
        // - se já for URL absoluta (http/https) ou começar com '/', usa direto
        // - se for apenas um nome de ficheiro, tenta a pasta /assets/img/banco_fotos2/
        let imagemSrc = imagemSrcRaw;
        try {
          if (imagemSrcRaw && !/^(https?:)?\/\//i.test(imagemSrcRaw) && !imagemSrcRaw.startsWith('/')) {
            imagemSrc = '/assets/img/banco_fotos2/' + imagemSrcRaw;
          }
          // garantir que começa com '/' ou 'http'
          if (imagemSrc && !imagemSrc.startsWith('/') && !/^https?:/i.test(imagemSrc)) {
            imagemSrc = '/' + imagemSrc;
          }
        } catch (e) {
          console.warn('Erro ao normalizar imagem:', imagemSrcRaw, e);
          imagemSrc = imagemSrcRaw;
        }
        console.debug('Imagem resolvida para postagem', post.id, imagemSrcRaw, '->', imagemSrc);

        record.innerHTML = `
          <div class="recordacao_titulo">
            <div class="autor"><h3>${autor}</h3></div>
          </div>
          <div class="imagem_recordacao">
            <img src="${escapeHtml(imagemSrc)}" alt="imagem da recordação" onerror="this.onerror=null;this.src='/assets/img/myschooldiary.png'">
          </div>
          <div class="descricao"><p>${descricao}</p></div>
        `;

        list.appendChild(record);
      });

    } catch (err) {
      console.error(err);
      const msg = err && err.message ? err.message : String(err);
      const stack = err && err.stack ? err.stack : '';
      list.innerHTML = `
        <div class="erro_carregamento">
          <p>Erro ao carregar memórias: ${escapeHtml(msg)}</p>
          <details style="white-space:pre-wrap; margin-top:8px;"><summary>Detalhes (stack)</summary>${escapeHtml(stack)}</details>
          <p>Tente reiniciar o back-end e recarregar a página (F5).</p>
        </div>
      `;
    }
  }

  loadMemorias();
});
