/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "Postagem" (
    "id" SERIAL NOT NULL,
    "autor" TEXT NOT NULL,
    "descricao" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagem" TEXT,

    CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Postagem_autor_key" ON "Postagem"("autor");
