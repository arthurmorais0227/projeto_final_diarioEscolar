-- CreateTable
CREATE TABLE "Postagem" (
    "id" SERIAL NOT NULL,
    "autor" TEXT,
    "descricao" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagem" TEXT,

    CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" SERIAL NOT NULL,
    "autor" TEXT,
    "comentario" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_postagem" INTEGER NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "aluno_foto" TEXT,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
