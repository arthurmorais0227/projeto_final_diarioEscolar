**Leitura do Banco de Dados**

Este arquivo descreve a lógica do banco de dados encontrada no `backup.sql` do projeto. O dump é de um banco PostgreSQL (base `MySchoolDiary_db`) e contém dados e instruções para recriar o banco.

**Visão Geral**
- **Tipo de banco**: PostgreSQL (dump gerado por `pg_dump`, contém comandos `CREATE DATABASE` e `COPY`).
- **Codificação / Locale**: `UTF8`, locale `Portuguese_Brazil.1252` (conforme cabeçalho do dump).

**Tabelas principais (identificadas no dump)**
- **`Postagem`**: colunas observadas: `id`, `autor`, `descricao`, `data`, `imagem`.
  - `id`: identificador da postagem (inteiro).
  - `autor`: nome do autor (string).
  - `descricao`: texto da postagem.
  - `data`: carimbo de data/hora (`timestamp` nos dados `COPY`).
  - `imagem`: URL ou caminho da imagem.
- **`Comentario`**: colunas observadas: `id`, `autor`, `comentario`, `data`, `id_postagem`.
  - `id`: identificador do comentário (inteiro).
  - `autor`: nome de quem comentou.
  - `comentario`: texto do comentário.
  - `data`: timestamp do comentário.
  - `id_postagem`: referência à postagem comentada (chave estrangeira esperada para `Postagem.id`).

**Relacionamentos e regras (resumo lógico)**
- Cada `Comentario` está ligado a exatamente uma `Postagem` através de `Comentario.id_postagem -> Postagem.id`.
- Espera-se que os campos `id` sejam chaves primárias em suas respectivas tabelas.
- Comportamentos típicos esperados (não explicitamente verificados no trecho lido, mas comuns ao modelo):
  - `ON DELETE CASCADE` ou `RESTRICT` para `id_postagem` — verifique a definição de tabela no dump se precisar do comportamento exato.

**Como restaurar o backup (instruções rápidas)**
- Método direto (o arquivo `backup.sql` já contém `CREATE DATABASE`):

```
psql -U postgres -f backup.sql
```

 - Se preferir criar manualmente a base e depois importar:

```
psql -U postgres -c "CREATE DATABASE \"MySchoolDiary_db\";"
psql -U postgres -d MySchoolDiary_db -f backup.sql
```

- Em Windows PowerShell, ajuste o usuário (`-U`) e autenticação conforme sua configuração (pode usar `-h` para host e `-p` para porta).

**Como inspecionar o esquema após restaurar**
- Conecte-se com `psql -U postgres -d MySchoolDiary_db` e use os metacomandos:
  - `\dt` : lista de tabelas.
  - `\d+ Postagem` : mostra colunas, tipos, índices e constraints da tabela `Postagem`.
  - `\d+ Comentario` : mostra detalhes de `Comentario` e a FK para `Postagem`.

**Observações e próximos passos recomendados**
- O arquivo `backup.sql` contém os dados (via `COPY`) — use os comandos acima para restaurar em um servidor PostgreSQL compatível.
- Se quiser documentação precisa e automática do esquema (colunas, tipos, PK, FK, índices), posso:
  - extrair e incluir aqui as declarações `CREATE TABLE` completas do `backup.sql`, ou
  - gerar um diagrama ER simplificado em texto ou imagem.
- Se o banco em produção usar outro SGBD, informe qual para que eu gere instruções de migração específicas.

**Arquivo relacionado**
- `backup.sql` : dump SQL incluído neste diretório — contém as instruções necessárias para recriar o banco e os dados.

 
