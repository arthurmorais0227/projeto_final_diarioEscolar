-- CreateTable
CREATE TABLE "Alunos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "numeroAluno" INTEGER,
    "email" TEXT,
    "senha" TEXT,

    CONSTRAINT "Alunos_pkey" PRIMARY KEY ("id")
);
