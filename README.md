# 📒 MySchoolDiary

Plataforma digital interativa para registrar memórias, postagens e momentos da turma 1TDS1 ao longo do ano.
Os alunos podem visualizar as publicações no front-end, enquanto o backend oferece CRUD completo com postagens, comentários e fotos.

# 📸 Preview

<img src="/front-end/assets/img/preview.png" width="850" />

# 🛠️ Tecnologias Utilizadas

## 🔙 Backend

Node.js — Express — PostgreSQL — Prisma ORM

- **Node.js 22.x** – Ambiente JavaScript

- **Express 5.1.0** – Framework web

- **PostgreSQL 14+** – Banco relacional

- **Prisma ORM 6.x** – Modelagem, migrações e CRUD

- **Postman** – Testes das rotas

## 🎨 Frontend

HTML5 — CSS3 — JavaScript (ES6+)

- **HTML5** – Estrutura semântica

- **CSS3** – Grid, Flexbox, responsividade

- **JavaScript** – Consumo da API via GET, GETbyID

- **Figma** – Prototipação (lista e detalhes das memórias)

## 🧰 Ferramentas

- **Git & GitHub** – Versionamento

- **VS Code** – Desenvolvimento

- **BrModeloWeb** – Modelagem do banco

- **Notion / Trello** – Organização e requisitos

# 📚 Storytelling / Problema

A turma 1TDS1 queria guardar lembranças do ano — fotos, histórias, postagens e momentos marcantes.
Para isso, nasceu o **MySchoolDiary**, um diário digital interativo onde cada memória da turma ganha espaço para ser vista, curtida e relembrada.

No **front-end**: alunos visualizam memórias, fotos e detalhes.

No **back-end**: CRUD completo de postagens, comentários, alunos e validações.

Tudo organizado, bonito e fácil de navegar.

# ✔️ Escopo do Projeto

## Front-end

- Listagem de postagens (GET)

- Página de detalhes (GETbyID)

- Layout responsivo e amigável

- Exibição de fotos, textos e autor

- Filtros integrados com o backend (autor / data)

## Back-end

**CRUD completo via API:**

- Postagens

- Comentários

- Alunos

- Validações:

- Campos obrigatórios

- Erros tratados no Express

- Middlewares de autenticação (se aplicável)

## Banco de Dados (PostgreSQL)

Tabela:

- **postagens**

Regras:

- Mínimo **100 postagens cadastradas**

- Filtros por **autor**, **nome**, **id** e **descrição**

# ⭐ Funcionalidades

- Cadastro, edição e exclusão de postagens

- Upload e exibição de fotos

- Comentários nas memórias

- Filtro por autor

- Filtro por descrição

- Interface intuitiva para a turma

- Visualização de detalhes da memória

- Integração completa com API REST

# 🤝 Colaboradores

- Arthur Morais
- Beatriz Miotto
- Bianca Luisa
- Lívia Oliveira
- Gustavo Victor
- Daniel Casalli
