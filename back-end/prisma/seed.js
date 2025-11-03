import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Excluir todas as postagens existentes
  await prisma.postagem.deleteMany({});

  // 2. Resetar a sequência de auto incremento para começar do ID = 1
  await prisma.$executeRaw`ALTER SEQUENCE "Postagem_id_seq" RESTART WITH 1;`;  // Para PostgreSQL

  // 3. Inserir dados novamente a partir do ID 1
  await prisma.postagem.create({
    data: {
      autor: "João Silva",  // Autor único
      descricao: "Primeira postagem do blog.",
      imagem: "link_da_imagem_1.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Oliveira",  // Autor único
      descricao: "Postagem de exemplo para a segunda entrada.",
      imagem: "link_da_imagem_2.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Carlos Souza",  // Autor único
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
