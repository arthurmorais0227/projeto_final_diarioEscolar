// Arquivo: prisma/seed.js
import { PrismaClient } from "@prisma/client"; // Corrigido para import

const prisma = new PrismaClient();

// Dados e Lógica do SEGUNDO SEED (Comentários) - Integrados aqui
// ----------------------------------------------------------------
const comentariosBase = [
  "Muito bom!", "Achei massa 😂", "Ficou incrível!",
  "Gostei demais!", "Sensacional!", "KKKKKK top",
  "Mandou bem demais!", "Amei essa!", "Que demais!",
  "Altas memórias!", "Kkkkk adorei", "Foto muito boa!"
];

const autoresTurma = [
  "Arthur Morais",
  "Murilo Milan Brustolin",
  "Gabriela Emi Yamamoto",
  "Gustavo Victor Ferreira",
  "Victor Ferreira",
  "Bianca Luisa Teodoro Silva",
  "Beatriz Miotto de Oliveira",
  "Livia Oliveira Cruz",
  "Daniel Casalli",
  "João Stopiglia",
  "Pedro Otávio Braga",
  "Gustavo Lisboa",
  "Rafael Santos Mendes",
  "João Piva",
  "Cauã Tupinambá",
  "Yasmin Crisóstomo",
  "Maria Eduarda",
  "Sunshine Sun"
];

function gerarComentario(descricao) {
  const base = comentariosBase[Math.floor(Math.random() * comentariosBase.length)];

  if (descricao.toLowerCase().includes("foto")) return base + " 📸";
  if (descricao.toLowerCase().includes("github")) return "Estilo programador 😎";
  if (descricao.toLowerCase().includes("amigos")) return "Amizade é tudo!";
  if (descricao.toLowerCase().includes("trabalho")) return "Brabo demais 💼";
  if (descricao.toLowerCase().includes("praia")) return "Queria estar aí 🌅";

  return base;
}

async function criarComentarios(prisma) {
  console.log("⏳ Criando comentários...");

  const totalPosts = await prisma.postagem.count();

  for (let id = 1; id <= totalPosts; id++) {
    const postagem = await prisma.postagem.findUnique({ where: { id } });

    if (postagem) {
      await prisma.comentario.createMany({
        data: [
          {
            autor: autoresTurma[Math.floor(Math.random() * autoresTurma.length)],
            comentario: gerarComentario(postagem.descricao),
            id_postagem: id,
          },
          {
            autor: autoresTurma[Math.floor(Math.random() * autoresTurma.length)],
            comentario: gerarComentario(postagem.descricao),
            id_postagem: id,
          },
        ],
      });
    }
  }

  console.log(`💬 ${totalPosts * 2} comentários criados!`);
}
// ----------------------------------------------------------------

async function main() {
  // 1. Limpeza e Reset da Sequência
  await prisma.postagem.deleteMany({});
  await prisma.comentario.deleteMany({});

  // Para PostgreSQL
  await prisma.$executeRaw`ALTER SEQUENCE "Postagem_id_seq" RESTART WITH 1;`;
  await prisma.$executeRaw`ALTER SEQUENCE "Comentario_id_seq" RESTART WITH 1;`;

  console.log("🔥 Dados existentes limpos e sequências resetadas.");

  // 2. Criação das Postagens
  console.log("⏳ Criando postagens...");

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Fazendo pose para a foto do github.",
      imagem: "https://imgur.com/xmt2zAj.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "Eu, Arthur e Edu somos do Rock!.",
      imagem: "https://imgur.com/kvaAXUS.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Será que to com muita espinha??.",
      imagem: "https://imgur.com/HbusjjJ.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Fica frio aí mano.",
      imagem: "https://imgur.com/227tG0a.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "Eu, miotto e arthur fazendo trabalho aff.",
      imagem: "https://imgur.com/0OWfbEi.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Eu e o Arthur recriando o poster de Memories of Murder.",
      imagem: "https://imgur.com/JXnruxq.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Eu e gustavo c cara de trouxa",
      imagem: "https://imgur.com/lUPlO05.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira",
      descricao: "aiiiiaiiiiaiii cachorro html.",
      imagem: "https://imgur.com/FYTA9VD.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "A bang perfeitinha do gu.",
      imagem: "https://imgur.com/f5uo8ng.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Brustolin",
      descricao: "calças novas",
      imagem: "https://imgur.com/Vuw97c9.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira",
      descricao: "Estudando programação no laboratório de informática.",
      imagem: "https://imgur.com/dg5mVzj.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Tirando foto no banheiro rsrsrs",
      imagem: "https://imgur.com/BPaIs2A.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Eu e meus pastéis",
      imagem: "https://imgur.com/3JO9noM.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao:
        "Participando da feira de ciências da escola com meus pasteis.",
      imagem: "https://imgur.com/oet5B39.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "eu e a bia fazendo paaaaz",
      imagem: "https://imgur.com/MEBtgcr.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly",
      descricao: "Tirando foto no banheiro bem iconicas.",
      imagem: "https://imgur.com/9vRkrit.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "bianca luisa",
      descricao: "Eu e a tsumoto.",
      imagem: "https://imgur.com/bUXMq8E.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "livia Oliveira",
      descricao: "Sesi muuuuundo",
      imagem: "https://imgur.com/ybt13lX.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "eu de perto rs.",
      imagem: "https://imgur.com/eAkc4Xe.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "eu e a miotto na aulinha top do thiago.",
      imagem: "https://imgur.com/oR7ENyp.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "daniel Casalli",
      descricao: "you are my sunshine my only sunshine.",
      imagem: "https://imgur.com/IROAAxX.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "eu e a porto no jóia.",
      imagem: "https://imgur.com/oBD3GHL.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emilio Henrique",
      descricao: "emilio.",
      imagem: "https://imgur.com/nJotLX3.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira",
      descricao: "Felipe dev atento.",
      imagem: "https://imgur.com/AIwnjZu.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "trabalhando fazendo pasteis igual um condenado",
      imagem: "https://imgur.com/JXnCMuD.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "eu e os sitecrafters codando",
      imagem: "https://imgur.com/0OWfbEi.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fernando Santos Evêncio da Silva",
      descricao: "codando c meus dois amores rs",
      imagem: "https://imgur.com/Rd69wUT.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "comendo",
      imagem: "https://imgur.com/qIktUI2.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "instalação SO",
      imagem: "https://imgur.com/CJB9VoY.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fábio Henrique Rabello Trevizolli",
      descricao: "recriando o poster de Clube dos 5",
      imagem: "https://imgur.com/cbQ2iUW.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Teixeira Lisboa",
      descricao: "só codar codar codar e codar.",
      imagem: "https://imgur.com/KFZfr7S.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "eu, gu e sunshine",
      imagem: "https://imgur.com/cRljj76.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "eu e o gu fazendo palhaçada",
      imagem: "https://imgur.com/uxwYOo4.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "não aguento mais só codar html",
      imagem: "https://imgur.com/ljIAqhr.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "Meu talento é ser P.O",
      imagem: "https://imgur.com/MwsxVfl.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "Fica frio aí arthur",
      imagem: "https://imgur.com/24jKRBX.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "o mistério dos pastéis",
      imagem: "https://imgur.com/6ymct3E.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "diálogo com o pedro ",
      imagem: "https://imgur.com/7dCvnBV.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Joao Stopiglia",
      descricao: "henrico só com o pokémon",
      imagem: "https://imgur.com/Iz3Jr5G.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "instalando manjaro no SENAI",
      imagem: "https://imgur.com/SuElxjI.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "rock",
      imagem: "https://imgur.com/VzXFLmf.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "eu e o jão ",
      imagem: "https://imgur.com/2Y2hiA5.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "Eu e a duuuuuda",
      imagem: "https://imgur.com/oFy2nVC.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "garrafa, joao e eu",
      imagem: "https://imgur.com/lGuaCsA.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "fazendo biquinho na biblio",
      imagem: "https://imgur.com/tmEEZ5R.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo teixeira Lisboa",
      descricao: "Fazendo trabalho de pokemon",
      imagem: "https://imgur.com/CPClVY8.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Estou andando",
      imagem: "https://imgur.com/xyTsQkq.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "Com elas!!",
      imagem: "https://imgur.com/vi34gKW.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Com a minha metadinha eu me sinto tão segurinha",
      imagem: "https://imgur.com/mN0kDq6.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais dos Santos",
      descricao: "fazendo meu filme fav c o guuu",
      imagem: "https://imgur.com/JXnruxq.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Eu e a assombração",
      imagem: "https://imgur.com/aJOEVjw.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Mexendo no cardapio da minha pastelaria",
      imagem: "https://imgur.com/mVVK4fo.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "?",
      imagem: "https://imgur.com/V4mZvQI.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Tatuagem inguaissss",
      imagem: "https://imgur.com/pW7K0UM.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Olhar de fallen angel",
      imagem: "https://imgur.com/2f92e14.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "livia tirou foto nossa",
      imagem: "https://imgur.com/ZLuHMRp.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "vendo as notas eita",
      imagem: "https://imgur.com/ofdsedO.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "olho de peixe c o piva e a yasmin",
      imagem: "https://imgur.com/7o5DzwX.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Fazendo pose com as girls no auditório",
      imagem: "https://imgur.com/O7L7va1.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "fazendo beijo c a bibis",
      imagem: "https://imgur.com/lbkJpSt.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto",
      descricao: "Formatando pc no laboratório",
      imagem: "https://imgur.com/1F0OkxK.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "mesa dos goats.",
      imagem: "https://imgur.com/wmaJDkx.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "recriando o poster de Stranger Things com o edu",
      imagem: "https://imgur.com/jG2P7bh.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Joao Pedro Piva Nogueira",
      descricao: "farmando aura",
      imagem: "https://imgur.com/2mZyDGP.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "Fazendo massagem no fernando",
      imagem: "https://imgur.com/dvZuetd.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia oliveira Cruz",
      descricao: "piva sendo piva.",
      imagem: "https://imgur.com/9IjIDNl.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "buuuuuu",
      imagem: "https://imgur.com/fG5P1wV.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "recriando o poster de ET",
      imagem: "https://imgur.com/SEEySTd.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "recriando cena do clube dos 5 com os dois patetas",
      imagem: "https://imgur.com/8tyOlpI.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Victor Gomes de Souza",
      descricao: "Foto com a tropa",
      imagem: "https://imgur.com/tmDfDQo.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "joia, login e muito codigo",
      imagem: "https://imgur.com/BsHgyST.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Cachorro aiiaiaiaiaiai",
      imagem: "https://imgur.com/FYTA9VD.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "sala 1tds1",
      imagem: "https://imgur.com/XpCHDCL.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "beijinho com o tupi",
      imagem: "https://imgur.com/OyjPFIm.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "mesa dos goats by tupi",
      imagem: "https://imgur.com/DrMYmHv.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "preciso urgentemente de uma calça nova",
      imagem: "https://imgur.com/Vuw97c9.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Sunshine Sun",
      descricao: "eu e meus bests.",
      imagem: "https://imgur.com/IROAAxX.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisóstomo",
      descricao: "eu e meu momor codando e o luiz de vela.",
      imagem: "https://imgur.com/Rd69wUT.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Amo esse filme",
      imagem: "https://imgur.com/cbQ2iUW.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Cena top c meus amigos tops",
      imagem: "https://imgur.com/8tyOlpI.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "amamos o gusteivo mané",
      imagem: "https://imgur.com/6DXPa6C.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "apresentação medo",
      imagem: "https://imgur.com/VzXFLmf.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "Comendo Halls",
      imagem: "https://imgur.com/6zlnN9k.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "👍",
      imagem: "https://imgur.com/3ho8WPj.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "loouuuuusa",
      imagem: "https://imgur.com/ceTCdYF.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "Eu e o lzn",
      imagem: "https://imgur.com/2Y2hiA5.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Entrei no rasp",
      imagem: "https://imgur.com/fw2vc8W.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "rebeca nanando",
      imagem: "https://imgur.com/bgthJq7.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Jão Stopiglia",
      descricao: "eu e as duas",
      imagem: "https://imgur.com/x1Vd2xL.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "prof mamprim",
      imagem: "https://imgur.com/XC5sdnz.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "foto da sala",
      imagem: "https://imgur.com/LD7twnj.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Lívia Oliveira Cruz",
      descricao: "Felipe Dev personagem",
      imagem: "https://imgur.com/XEyniLT.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "girls e a sunshine",
      imagem: "https://imgur.com/3Ikcky3.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "eu e o thales",
      imagem: "https://imgur.com/f1a9oa5.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Gustavo codando",
      imagem: "https://imgur.com/jIyWUWs.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "eu e o pivo só nas risadas",
      imagem: "https://imgur.com/z9oe1zc.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "estou indignado",
      imagem: "https://imgur.com/Fd3nTBG.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga",
      descricao: "Eu e o joãozinho",
      imagem: "https://imgur.com/lGuaCsA.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "olhar atento",
      imagem: "https://imgur.com/hkvhYSf.jpeg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "positivo e eu",
      imagem: "https://imgur.com/76NSeB6.jpeg",
    },
  });
  
  console.log("✅ Postagens inseridas com sucesso!");
  
  // 3. Criação dos Comentários (Segundo Seed)
  await criarComentarios(prisma);
}

console.log("🌸| Iniciando o Seed...");

main()
  .catch((e) => {
    console.error("❌ ERRO durante o seeding:", e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("✨ Seeding concluído!");
  });
