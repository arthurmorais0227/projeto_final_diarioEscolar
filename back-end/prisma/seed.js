// Arquivo: prisma/seed.js
import { PrismaClient } from "@prisma/client"; // Corrigido para import

const prisma = new PrismaClient();

// Dados e Lógica do SEGUNDO SEED (Comentários) - Integrados aqui
// ----------------------------------------------------------------
const comentariosBase = [
  "Muito bom!",
  "Achei massa 😂",
  "Ficou incrível!",
  "Gostei demais!",
  "Sensacional!",
  "KKKKKK top",
  "Mandou bem demais!",
  "Amei essa!",
  "Que demais!",
  "Altas memórias!",
  "Kkkkk adorei",
  "Foto muito boa!",
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
  "Sunshine Sun",
];

function gerarComentario(descricao) {
  const base =
    comentariosBase[Math.floor(Math.random() * comentariosBase.length)];

  if (descricao.toLowerCase().includes("foto")) return base + " 📸";
  if (descricao.toLowerCase().includes("github"))
    return "Estilo programador 😎";
  if (descricao.toLowerCase().includes("amigos")) return "Amizade é tudo!";
  if (descricao.toLowerCase().includes("trabalho"))
    return "Brabo demais 💼";
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
            autor:
              autoresTurma[
                Math.floor(Math.random() * autoresTurma.length)
              ],
            comentario: gerarComentario(postagem.descricao),
            id_postagem: id,
          },
          {
            autor:
              autoresTurma[
                Math.floor(Math.random() * autoresTurma.length)
              ],
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
      data: '2025-03-15T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "Eu, Arthur e Edu somos do Rock!.",
      imagem: "https://imgur.com/kvaAXUS.jpeg",
      data: '2025-01-20T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Será que to com muita espinha??.",
      imagem: "https://imgur.com/HbusjjJ.jpeg",
      data: '2025-04-05T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Fica frio aí mano.",
      imagem: "https://imgur.com/227tG0a.jpeg",
      data: '2025-07-10T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "Eu, miotto e arthur fazendo trabalho aff.",
      imagem: "https://imgur.com/0OWfbEi.jpeg",
      data: '2025-05-22T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Eu e o Arthur recriando o poster de Memories of Murder.",
      imagem: "https://imgur.com/JXnruxq.jpeg",
      data: '2025-11-01T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Eu e gustavo c cara de trouxa",
      imagem: "https://imgur.com/lUPlO05.jpeg",
      data: '2025-02-14T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira",
      descricao: "aiiiiaiiiiaiii cachorro html.",
      imagem: "https://imgur.com/FYTA9VD.jpeg",
      data: '2025-10-30T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "A bang perfeitinha do gu.",
      imagem: "https://imgur.com/f5uo8ng.jpeg",
      data: '2025-08-08T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Brustolin",
      descricao: "calças novas",
      imagem: "https://imgur.com/Vuw97c9.jpeg",
      data: '2025-12-25T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira",
      descricao: "Estudando programação no laboratório de informática.",
      imagem: "https://imgur.com/dg5mVzj.jpeg",
      data: '2025-03-28T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Tirando foto no banheiro rsrsrs",
      imagem: "https://imgur.com/BPaIs2A.jpeg",
      data: '2025-01-01T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Eu e meus pastéis",
      imagem: "https://imgur.com/3JO9noM.jpeg",
      data: '2025-04-12T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao:
        "Participando da feira de ciências da escola com meus pasteis.",
      imagem: "https://imgur.com/oet5B39.jpeg",
      data: '2025-07-25T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "eu e a bia fazendo paaaaz",
      imagem: "https://imgur.com/MEBtgcr.jpeg",
      data: '2025-05-03T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly",
      descricao: "Tirando foto no banheiro bem iconicas.",
      imagem: "https://imgur.com/9vRkrit.jpeg",
      data: '2025-11-15T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "bianca luisa",
      descricao: "Eu e a tsumoto.",
      imagem: "https://imgur.com/bUXMq8E.jpeg",
      data: '2025-02-09T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "livia Oliveira",
      descricao: "Sesi muuuuundo",
      imagem: "https://imgur.com/ybt13lX.jpeg",
      data: '2025-10-01T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "eu de perto rs.",
      imagem: "https://imgur.com/eAkc4Xe.jpeg",
      data: '2025-08-18T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "eu e a miotto na aulinha top do thiago.",
      imagem: "https://imgur.com/oR7ENyp.jpeg",
      data: '2025-12-05T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "daniel Casalli",
      descricao: "you are my sunshine my only sunshine.",
      imagem: "https://imgur.com/IROAAxX.jpeg",
      data: '2025-03-03T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "eu e a porto no jóia.",
      imagem: "https://imgur.com/oBD3GHL.jpeg",
      data: '2025-01-09T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emilio Henrique",
      descricao: "emilio.",
      imagem: "https://imgur.com/nJotLX3.jpeg",
      data: '2025-04-29T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira",
      descricao: "Felipe dev atento.",
      imagem: "https://imgur.com/AIwnjZu.jpeg",
      data: '2025-07-19T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "trabalhando fazendo pasteis igual um condenado",
      imagem: "https://imgur.com/JXnCMuD.jpeg",
      data: '2025-05-14T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "eu e os sitecrafters codando",
      imagem: "https://imgur.com/0OWfbEi.jpeg",
      data: '2025-11-20T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fernando Santos Evêncio da Silva",
      descricao: "codando c meus dois amores rs",
      imagem: "https://imgur.com/Rd69wUT.jpeg",
      data: '2025-02-23T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "comendo",
      imagem: "https://imgur.com/qIktUI2.jpeg",
      data: '2025-10-10T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "instalação SO",
      imagem: "https://imgur.com/CJB9VoY.jpeg",
      data: '2025-08-29T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fábio Henrique Rabello Trevizolli",
      descricao: "recriando o poster de Clube dos 5",
      imagem: "https://imgur.com/cbQ2iUW.jpeg",
      data: '2025-12-14T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Teixeira Lisboa",
      descricao: "só codar codar codar e codar.",
      imagem: "https://imgur.com/KFZfr7S.jpeg",
      data: '2025-03-07T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "eu, gu e sunshine",
      imagem: "https://imgur.com/cRljj76.jpeg",
      data: '2025-01-25T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "eu e o gu fazendo palhaçada",
      imagem: "https://imgur.com/uxwYOo4.jpeg",
      data: '2025-04-18T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "não aguento mais só codar html",
      imagem: "https://imgur.com/ljIAqhr.jpeg",
      data: '2025-07-02T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "Meu talento é ser P.O",
      imagem: "https://imgur.com/MwsxVfl.jpeg",
      data: '2025-05-09T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "Fica frio aí arthur",
      imagem: "https://imgur.com/24jKRBX.jpeg",
      data: '2025-11-29T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "o mistério dos pastéis",
      imagem: "https://imgur.com/6ymct3E.jpeg",
      data: '2025-02-05T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "diálogo com o pedro ",
      imagem: "https://imgur.com/7dCvnBV.jpeg",
      data: '2025-10-20T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Joao Stopiglia",
      descricao: "henrico só com o pokémon",
      imagem: "https://imgur.com/Iz3Jr5G.jpeg",
      data: '2025-08-01T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "instalando manjaro no SENAI",
      imagem: "https://imgur.com/SuElxjI.jpeg",
      data: '2025-12-01T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "rock",
      imagem: "https://imgur.com/VzXFLmf.jpeg",
      data: '2025-03-30T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "eu e o jão ",
      imagem: "https://imgur.com/2Y2hiA5.jpeg",
      data: '2025-01-11T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "Eu e a duuuuuda",
      imagem: "https://imgur.com/oFy2nVC.jpeg",
      data: '2025-04-25T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "garrafa, joao e eu",
      imagem: "https://imgur.com/lGuaCsA.jpeg",
      data: '2025-07-07T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "fazendo biquinho na biblio",
      imagem: "https://imgur.com/tmEEZ5R.jpeg",
      data: '2025-05-18T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo teixeira Lisboa",
      descricao: "Fazendo trabalho de pokemon",
      imagem: "https://imgur.com/CPClVY8.jpeg",
      data: '2025-11-05T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Estou andando",
      imagem: "https://imgur.com/xyTsQkq.jpeg",
      data: '2025-02-19T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "Com elas!!",
      imagem: "https://imgur.com/vi34gKW.jpeg",
      data: '2025-10-09T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Com a minha metadinha eu me sinto tão segurinha",
      imagem: "https://imgur.com/mN0kDq6.jpeg",
      data: '2025-08-25T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais dos Santos",
      descricao: "fazendo meu filme fav c o guuu",
      imagem: "https://imgur.com/JXnruxq.jpeg",
      data: '2025-12-29T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Eu e a assombração",
      imagem: "https://imgur.com/aJOEVjw.jpeg",
      data: '2025-03-11T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Mexendo no cardapio da minha pastelaria",
      imagem: "https://imgur.com/mVVK4fo.jpeg",
      data: '2025-01-05T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "?",
      imagem: "https://imgur.com/V4mZvQI.jpeg",
      data: '2025-04-01T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Tatuagem inguaissss",
      imagem: "https://imgur.com/pW7K0UM.jpeg",
      data: '2025-07-29T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Olhar de fallen angel",
      imagem: "https://imgur.com/2f92e14.jpeg",
      data: '2025-05-27T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "livia tirou foto nossa",
      imagem: "https://imgur.com/ZLuHMRp.jpeg",
      data: '2025-11-10T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "vendo as notas eita",
      imagem: "https://imgur.com/ofdsedO.jpeg",
      data: '2025-02-01T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "olho de peixe c o piva e a yasmin",
      imagem: "https://imgur.com/7o5DzwX.jpeg",
      data: '2025-10-04T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Fazendo pose com as girls no auditório",
      imagem: "https://imgur.com/O7L7va1.jpeg",
      data: '2025-08-11T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "fazendo beijo c a bibis",
      imagem: "https://imgur.com/lbkJpSt.jpeg",
      data: '2025-12-08T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto",
      descricao: "Formatando pc no laboratório",
      imagem: "https://imgur.com/1F0OkxK.jpeg",
      data: '2025-03-20T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "mesa dos goats.",
      imagem: "https://imgur.com/wmaJDkx.jpeg",
      data: '2025-01-22T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "recriando o poster de Stranger Things com o edu",
      imagem: "https://imgur.com/jG2P7bh.jpeg",
      data: '2025-04-09T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Joao Pedro Piva Nogueira",
      descricao: "farmando aura",
      imagem: "https://imgur.com/2mZyDGP.jpeg",
      data: '2025-07-15T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "Fazendo massagem no fernando",
      imagem: "https://imgur.com/dvZuetd.jpeg",
      data: '2025-05-01T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia oliveira Cruz",
      descricao: "piva sendo piva.",
      imagem: "https://imgur.com/9IjIDNl.jpeg",
      data: '2025-11-25T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "buuuuuu",
      imagem: "https://imgur.com/fG5P1wV.jpeg",
      data: '2025-02-11T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "recriando o poster de ET",
      imagem: "https://imgur.com/SEEySTd.jpeg",
      data: '2025-10-24T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "recriando cena do clube dos 5 com os dois patetas",
      imagem: "https://imgur.com/8tyOlpI.jpeg",
      data: '2025-08-04T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Victor Gomes de Souza",
      descricao: "Foto com a tropa",
      imagem: "https://imgur.com/tmDfDQo.jpeg",
      data: '2025-12-19T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "joia, login e muito codigo",
      imagem: "https://imgur.com/BsHgyST.jpeg",
      data: '2025-03-09T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Cachorro aiiaiaiaiaiai",
      imagem: "https://imgur.com/FYTA9VD.jpeg",
      data: '2025-01-29T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "sala 1tds1",
      imagem: "https://imgur.com/XpCHDCL.jpeg",
      data: '2025-04-04T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "beijinho com o tupi",
      imagem: "https://imgur.com/OyjPFIm.jpeg",
      data: '2025-07-22T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "mesa dos goats by tupi",
      imagem: "https://imgur.com/DrMYmHv.jpeg",
      data: '2025-05-17T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "preciso urgentemente de uma calça nova",
      imagem: "https://imgur.com/Vuw97c9.jpeg",
      data: '2025-11-27T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Sunshine Sun",
      descricao: "eu e meus bests.",
      imagem: "https://imgur.com/IROAAxX.jpeg",
      data: '2025-02-17T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisóstomo",
      descricao: "eu e meu momor codando e o luiz de vela.",
      imagem: "https://imgur.com/Rd69wUT.jpeg",
      data: '2025-10-06T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Amo esse filme",
      imagem: "https://imgur.com/cbQ2iUW.jpeg",
      data: '2025-08-22T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Cena top c meus amigos tops",
      imagem: "https://imgur.com/8tyOlpI.jpeg",
      data: '2025-12-10T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "amamos o gusteivo mané",
      imagem: "https://imgur.com/6DXPa6C.jpeg",
      data: '2025-03-25T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "apresentação medo",
      imagem: "https://imgur.com/VzXFLmf.jpeg",
      data: '2025-01-18T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "Comendo Halls",
      imagem: "https://imgur.com/6zlnN9k.jpeg",
      data: '2025-04-06T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "👍",
      imagem: "https://imgur.com/3ho8WPj.jpeg",
      data: '2025-07-09T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "loouuuuusa",
      imagem: "https://imgur.com/ceTCdYF.jpeg",
      data: '2025-05-13T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "Eu e o lzn",
      imagem: "https://imgur.com/2Y2hiA5.jpeg",
      data: '2025-11-03T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Entrei no rasp",
      imagem: "https://imgur.com/fw2vc8W.jpeg",
      data: '2025-02-07T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "rebeca nanando",
      imagem: "https://imgur.com/bgthJq7.jpeg",
      data: '2025-10-14T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Jão Stopiglia",
      descricao: "eu e as duas",
      imagem: "https://imgur.com/x1Vd2xL.jpeg",
      data: '2025-08-06T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "prof mamprim",
      imagem: "https://imgur.com/XC5sdnz.jpeg",
      data: '2025-12-03T00:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "foto da sala",
      imagem: "https://imgur.com/LD7twnj.jpeg",
      data: '2025-03-17T10:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Lívia Oliveira Cruz",
      descricao: "Felipe Dev personagem",
      imagem: "https://imgur.com/XEyniLT.jpeg",
      data: '2025-01-07T14:30:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "girls e a sunshine",
      imagem: "https://imgur.com/3Ikcky3.jpeg",
      data: '2025-04-22T08:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "eu e o thales",
      imagem: "https://imgur.com/f1a9oa5.jpeg",
      data: '2025-07-27T19:45:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Gustavo codando",
      imagem: "https://imgur.com/jIyWUWs.jpeg",
      data: '2025-05-25T11:11:11Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "eu e o pivo só nas risadas",
      imagem: "https://imgur.com/z9oe1zc.jpeg",
      data: '2025-11-08T22:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "estou indignado",
      imagem: "https://imgur.com/Fd3nTBG.jpeg",
      data: '2025-02-27T09:15:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga",
      descricao: "Eu e o joãozinho",
      imagem: "https://imgur.com/lGuaCsA.jpeg",
      data: '2025-10-18T16:00:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "olhar atento",
      imagem: "https://imgur.com/hkvhYSf.jpeg",
      data: '2025-08-27T13:20:00Z',
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "positivo e eu",
      imagem: "https://imgur.com/76NSeB6.jpeg",
      data: '2025-12-23T00:00:00Z',
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