-- CreateTable
CREATE TABLE "Postagem" (
    "id" SERIAL NOT NULL,
    "autor" TEXT,
    "descricao" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagem" TEXT,

    CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id")
);
