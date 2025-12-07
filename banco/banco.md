📚 MySchoolDiary_db — Banco de Dados do Projeto MySchoolDiary

Este repositório contém o backup completo do banco de dados MySchoolDiary_db, utilizado no projeto MySchoolDiary.
O banco foi gerado via PostgreSQL (pg_dump) e contém as tabelas principais do sistema: Aluno, Postagem (caso exista no seu projeto) e Comentario.

🗄️ Estrutura do Banco de Dados
📌 Informações gerais

SGBD: PostgreSQL

Codificação: UTF-8

Locale: Portuguese_Brazil.1252

Versão usada no dump: PostgreSQL 17.6

📁 Tabelas

A seguir estão as tabelas incluídas no backup.

👨‍🎓 Tabela Aluno

Armazena os dados dos alunos cadastrados no sistema.

Campo	Tipo	Descrição
id	Int	Identificador único do aluno
nome	String	Nome completo do aluno
email	String	E-mail institucional
telefone	String	Telefone do aluno
aluno_foto	String	Caminho da imagem do aluno

➡ Total de registros: 31 alunos
➡ As fotos são armazenadas como caminhos para /assets/img/alunos/...

💬 Tabela Comentario

Armazena os comentários feitos nas postagens.

Campo	Tipo	Descrição
id	Int	Identificador único do comentário
autor	String	Nome de quem comentou
comentario	String	Conteúdo do comentário
data	Timestamp	Data/hora do comentário
id_postagem	Int	ID da postagem relacionada

➡ Total de registros: 120+ comentários
➡ Relacionamento: cada comentário pertence a uma postagem (id_postagem)

🛢️ Backup incluído

O arquivo SQL contém:

✔ Criação do banco de dados
✔ Configurações iniciais do PostgreSQL
✔ Dados completos das tabelas Aluno e Comentario
✔ Inserções com COPY (método mais rápido do PostgreSQL)

🔄 Como restaurar o banco
1. Criar o banco e restaurar
psql -U postgres -f MySchoolDiary_db.sql


Ou, caso queira restaurar dentro de um banco já existente:

psql -U postgres -d MySchoolDiary_db -f MySchoolDiary_db.sql

2. Usando pgAdmin

Clique em Restore

Selecione o arquivo .sql

Execute a restauração

🧪 Como usar no projeto

O banco foi pensado para integrar um backend em Node.js utilizando Prisma.

Exemplo de schema.prisma para compatibilidade:

model Aluno {
  id         Int    @id @default(autoincrement())
  nome       String?
  email      String?
  telefone   String?
  aluno_foto String?
}

model Comentario {
  id          Int      @id @default(autoincrement())
  autor       String?
  comentario   String?
  data        DateTime @default(now())
  id_postagem Int
}

📦 Arquivo incluído
📁 /database
│── MySchoolDiary_db.sql   ← backup completo do banco