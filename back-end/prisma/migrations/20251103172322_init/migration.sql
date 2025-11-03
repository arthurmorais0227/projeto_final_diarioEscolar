-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "autor" TEXT NOT NULL,
    "descricao" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagem" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_autor_key" ON "User"("autor");
