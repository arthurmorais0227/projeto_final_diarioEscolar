
**Back-end — Documentação e Lógica (Completo)**

- **Ponto de entrada:** `server.js` — inicializa o Express, middlewares e registra rotas.
- **ORM:** Prisma (`prisma/schema.prisma`) com `@prisma/client`.
- **Formato do projeto:** ES Modules (usar `import` / `export`).

**Arquitetura (camadas)**
- **Routes:** `src/Routes/*.js` — definem endpoints e mapeiam para controllers.
- **Controllers:** `src/Controllers/*.js` — recebem `req`/`res`, validam/normalizam dados, chamam models e tratam respostas/erros.
- **Models:** `src/Models/*.js` — camada que fala com o banco via Prisma. Deve expor funções como `createPost`, `getPostById`, `updatePost`, `deletePost`.
- **Prisma/DB:** responsáveis por migrations, esquema e seed.

Fluxo geral de uma requisição:
- Cliente → Rota (Routes) → Controller → Model (Prisma) → Banco → Model → Controller → Resposta.

Como organizar alterações:
- Mudar endpoints: `src/Routes`.
- Nova regra de negócio: `src/Controllers`.
- Nova query/entidade: `src/Models` + `prisma/schema.prisma` + migration.

Rotas e Endpoints principais (exemplos)
- `POST /postagens` — Criar postagem.
- `GET /postagens` — Listar postagens.
- `GET /postagens/:id` — Recuperar postagem por id.
- `PUT /postagens/:id` — Atualizar postagem.
- `DELETE /postagens/:id` — Deletar postagem.

- `POST /comentarios` — Criar comentário (associado a postagem).
- `GET /comentarios` — Listar comentários.
- `GET /comentarios/:id` — Recuperar comentário.
- `PUT /comentarios/:id` — Atualizar comentário.
- `DELETE /comentarios/:id` — Deletar comentário.

Exemplos de payloads (JSON)
- Criar `postagem` (POST /postagens):

```json
{
  "titulo": "Aula de Matemática",
  "conteudo": "Resumo da aula sobre álgebra",
  "autor": "Professor João",
  "data": "2025-12-07"
}
```

- Atualizar `postagem` (PUT /postagens/:id):

```json
{
  "titulo": "Aula de Matemática - Atualizada",
  "conteudo": "Novo resumo com exemplos",
  "autor": "Professor João"
}
```

- Criar `comentario` (POST /comentarios):

```json
{
  "postagemId": 1,
  "autor": "Aluno Maria",
  "mensagem": "Ótima explicação!"
}
```

Resposta típica (sucesso)

```json
{
  "status": "success",
  "data": { /* objeto criado/recuperado */ }
}
```

Exemplo minimal de Controller (pseudocódigo JS)

```javascript
// src/Controllers/postagemController.js
import * as model from '../Models/postagemModel.js';

export async function createPost(req, res) {
  try {
    const payload = req.body;
    // validações básicas
    if (!payload.titulo) return res.status(400).json({ error: 'Título é obrigatório' });
    const newPost = await model.createPost(payload);
    return res.status(201).json({ status: 'success', data: newPost });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 'error', message: 'Erro interno' });
  }
}
```

Exemplo minimal de Model usando Prisma

```javascript
// src/Models/postagemModel.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function createPost(data) {
  return prisma.postagem.create({ data });
}

export function getAllPosts() {
  return prisma.postagem.findMany();
}

export function getPostById(id) {
  return prisma.postagem.findUnique({ where: { id: Number(id) } });
}

export function updatePost(id, data) {
  return prisma.postagem.update({ where: { id: Number(id) }, data });
}

export function deletePost(id) {
  return prisma.postagem.delete({ where: { id: Number(id) } });
}
```

Prisma e banco de dados
- `prisma/schema.prisma` — defina modelos (`model Postagem`, `model Comentario`, etc.).
- Gerar migration: comum flow — `npx prisma migrate dev --name descricao`.
- Popular dados de teste: `npm run seed` (executa `prisma/seed.js`).
- Inspecionar dados: `npm run studio` (Prisma Studio).

Variáveis de ambiente (`.env`)
- `DATABASE_URL` — string de conexão com o banco (Postgres/SQLite/MySQL).
- `PORT` — porta do servidor (ex.: `3001`).

Scripts úteis (em `package.json`)
- `npm run dev` — executa `nodemon server.js` para desenvolvimento.
- `npm run studio` — abre Prisma Studio.
- `npm run seed` — roda o `prisma/seed.js`.

Executando localmente (PowerShell)

```powershell
cd c:\caminho\para\back-end
npm install
npm run dev
```

Testes rápidos via curl / PowerShell (exemplos)

```powershell
# Criar postagem
curl -Method POST -Uri http://localhost:3001/postagens -ContentType 'application/json' -Body '{"titulo":"Teste","conteudo":"...","autor":"x"}'

# Listar postagens
curl http://localhost:3001/postagens
```

Tratamento de erros e status recomendados
- 200 — OK (GET/PUT quando retorna dados).
- 201 — Created (POST bem-sucedido).
- 204 — No Content (DELETE bem-sucedido sem corpo).
- 400 — Bad Request (validação falhou).
- 404 — Not Found (recurso não encontrado).
- 500 — Internal Server Error (erro inesperado).

Boas práticas e recomendações
- Centralize validações (ex.: usar `Joi` ou `zod`) para consistência.
- Padronize respostas (usar envelope `{ status, data, error }`).
- Use transações Prisma (`prisma.$transaction`) quando várias operações dependem umas das outras.
- Logue erros e use monitoramento (Sentry, Loggly) em produção.

Como adicionar um novo endpoint (passos rápidos)
1. Adicionar rota em `src/Routes/novoRecursoRoutes.js` e registrar em `server.js`.
2. Implementar controller em `src/Controllers/novoRecursoController.js`.
3. Implementar funções de acesso a dados em `src/Models/novoRecursoModel.js` (Prisma).
4. Atualizar `prisma/schema.prisma` se precisar de nova tabela e rodar migration.
5. Escrever testes para o endpoint.

Observações finais
- O projeto já possui rotas básicas para `postagens` e `comentarios`. Use este documento como referência para estender e padronizar novas funcionalidades.
- Se quiser, eu posso:
  - Gerar um `README.md` com este conteúdo na raiz do `back-end`.
  - Adicionar exemplos de payloads mais detalhados para cada endpoint.
  - Incluir instruções de deploy (Heroku, Railway, Vercel - backend). 

---
Arquivo gerado automaticamente para documentação do backend.

