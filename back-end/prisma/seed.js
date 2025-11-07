import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.postagem.deleteMany({});

  await prisma.$executeRaw`ALTER SEQUENCE "Postagem_id_seq" RESTART WITH 1;`;  // Para PostgreSQL

  await prisma.postagem.create({
    data: {
      autor: "João Silva",
      descricao: "Primeira postagem do blog.",
      imagem: "link_da_imagem_1.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Oliveira",
      descricao: "Postagem de exemplo para a segunda entrada.",
      imagem: "link_da_imagem_2.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Carlos Souza",
      descricao: "Mais um conteúdo legal!",
      imagem: "link_da_imagem_3.jpg",
    },
  });

  console.log("Seeds inseridas com sucesso!");
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
