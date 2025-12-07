# My School Diary — Front-end: Memórias

Este documento descreve o comportamento do front-end relacionado ao módulo de "Memórias": filtros, exibição, criação de memórias, câmera e comentários. Está escrito em Português e referencia arquivos dentro deste repositório.

**Arquivos relevantes**:

- `pages/memorias.html` : página que contém o mural, popups e elementos HTML.
- `assets/js/script_memorias.js` : lógica de carregamento, filtros, criação, câmera, lazy-loading e comentários.
- `assets/styles/memorias.css` : estilos específicos da página de memórias (se presentes).
- `assets/img/banco_fotos2/` : pasta usada como prefixo para imagens quando o backend retorna somente o nome do arquivo.

----

**Visão geral**

O front mostra um mural de memórias carregadas via fetch a partir de um backend. A interface permite:

- Pesquisar e filtrar memórias (texto e mês).
- Visualizar lista com lazy-loading de imagens.
- Abrir popup de detalhes de uma memória e ver/add comentários.
- Criar nova memória usando upload de imagem ou captura pela câmera.

----

**Filtros (front)**

- Elementos HTML:
  - Campo de busca: `#filtroMemorias` (input `type=search`).
  - Filtro por mês: `#filtroMes` (select com valores `""`, `"01"`..`"12"`).

- Comportamento:
  - A busca por texto filtra por `id`, `autor` e `descricao`. A busca aceita termos parciais e tentará casar `id` também (contém ou igualdade).
  - O campo de busca usa `debounce` com 250ms para evitar requisições/resrenders excessivos.
  - O filtro por mês compara o valor selecionado (`"01"`..`"12"`) com o mês extraído dos campos possíveis retornados pelo backend: `data_criacao`, `data` ou `created_at` (espera formatos `YYYY-MM-DD` ou ISO). Se o mês for igual, a memória é mostrada.

Observação: a filtragem é feita no cliente (após carregar as postagens) usando o array `postsCache` em `script_memorias.js`.

----

**Exibição de memórias**

- Container: `#memoriasList` — os itens são injetados via JS.
- Estrutura de cada item (resumida): autor, id, data (se disponível), imagem (lazy) e descrição.
- Lazy-loading:
  - As imagens usam `IntersectionObserver` (fallback para carregamento direto se não suportado).
  - A tag `img` é criada com `data-src` e um `placeholder` em `src` até que entre na viewport.

- Resolução de imagens e fallbacks:
  - Se o backend enviar uma string que começa com `data:image` ela é usada diretamente (data URL).
  - Se a string não começar com `/` nem com `http(s)://`, o front adiciona o prefixo `/assets/img/banco_fotos2/` (ex.: backend retorna `foto1.jpg` → `/assets/img/banco_fotos2/foto1.jpg`).
  - Se houver erro no carregamento da imagem, o `onerror` define uma imagem padrão `/assets/img/myschooldiary.png`.

- Formato de data:
  - O front tenta extrair data em `YYYY-MM-DD` (ou ISO) dos campos `data_criacao`, `data` ou `created_at` e formata para `DD/MM/YYYY` ao exibir.

----

**Criar Memória (popup)**

- Elementos:
  - Botão que abre o popup: `#abrirPopup`.
  - Popup: `#popupCriar` com campos:
    - Autor: `#inputAutor` (texto).
    - Imagem: `#inputImagem` (file) — aceita imagens.
    - Câmera: botão `#abrirCameraBtn` e `#capturarFotoBtn` para captura via `getUserMedia()`.
    - Preview da imagem: `#previewImagem`.
    - Descrição: `#descricao` (máx 100 caracteres) e contador `#contadorDesc`.
    - Salvar: `#salvarMemoria`.

- Payload enviado ao salvar:
  - Um objeto JSON `{ autor, descricao, imagem }` onde `imagem` pode ser uma data URL (`data:image/...`) ou string vazia.
  - O front tenta enviar para uma lista de URLs candidatas (para tolerância de portas durante desenvolvimento):
    - `http://localhost:3001/postagens`
    - `http://localhost:3000/postagens`
    - `${location.protocol}//${location.hostname}:3001/postagens`
    - `${location.protocol}//${location.hostname}:3000/postagens`

Observação: ajuste o backend para aceitar o JSON acima e persistir a imagem (se for data URL pode ser decodificada no servidor ou gravada em storage). Se o backend devolver apenas o nome de arquivo, o front tentará resolver para `/assets/img/banco_fotos2/<nome>`.

----

**Câmera**

- O fluxo: `#abrirCameraBtn` pede permissão com `navigator.mediaDevices.getUserMedia({video:true})`. O `video` é exibido em `#camera`. Ao clicar `#capturarFotoBtn` o frame atual é desenhado num `canvas` e convertido com `canvas.toDataURL()` para `imagemDataUrl`, que é usada como `#previewImagem` e incluída no payload de envio.

----

**Comentários**

- Popup de detalhes: `#popupDetalhes` com campos:
  - Imagem detalhada: `#detalheImagem`
  - Autor: `#detalheAutorValue`
  - Descrição: `#detalheDescricaoValue`
  - ID: `#detalheIdValue`
  - Lista de comentários: `#comentariosList` (ul)
  - Novo comentário: `#novoComentario` (textarea)
  - Botão enviar: `#adicionarComentario`

- Comportamento:
  - Ao abrir detalhes, o front tenta primeiro buscar a memória por id no backend (endpoints candidatos como em `fetchPostById`). Se não encontrar usa o objeto em cache.
  - Comentários são carregados com `fetchComentariosPorPostagem(id_postagem)` tentando endpoints candidatos:
    - `http://localhost:3001/comentarios/postagem/<id>` etc.
  - Para adicionar comentário, o front pede um nome (prompt) e envia `{ autor, comentario, id_postagem }` para `POST /comentarios` (mesmas urls candidatas). Após sucesso recarrega a lista de comentários.

Observação: backend deve expor `GET /comentarios/postagem/:id` retornando `{ comentarios: [...] }` ou similar, e `POST /comentarios` aceitando o payload descrito.

----

**Erros comuns & Troubleshooting**

- Se as memórias não carregam, verifique se o backend está rodando nas portas 3000 ou 3001, ou adapte as URLs em `script_memorias.js`.
- Mensagem de erro aparece no `#memoriasList` com detalhes (se houver). Conferir console do navegador para pilha de erro.
- Problemas de CORS: garanta que o backend permita requisições do origin onde a página é servida (localhost ou caminho de arquivos). Em desenvolvimento, rodar um servidor local (não `file://`) evita problemas com `fetch` e permissões de câmera.

----

**Executando/testando localmente**

1) Servir a pasta `front-end` com um servidor estático (ex.: Python ou http-server). Exemplo em PowerShell:

```powershell
# Usando Python (se instalado)
cd "c:\Users\arthu\OneDrive\Documentos\my_school_diary - 07122025\projeto_final_diarioEscolar\front-end"
python -m http.server 8000 ;
# ou usando http-server (npm)
npx http-server . -p 8000 ;
```

2) Abra `http://localhost:8000/pages/memorias.html` no navegador.

3) Inicie o backend (ou ajuste as URLs em `assets/js/script_memorias.js`) para que os endpoints `/postagens` e `/comentarios` respondam ao formato esperado.

----

**Notas de desenvolvimento / melhorias sugeridas**

- Extrair as URLs de backend para um único arquivo de configuração (`config.js`) para facilitar mudanças.
- Implementar mensagens de sucesso/erro mais amigáveis no UI (em vez de `alert`).
- Persistir imagens em storage e retornar URLs absolutas do backend (melhora a robustez, evita data URLs grandes no JSON).
- Adicionar paginação no carregamento de memórias se a lista crescer muito.