import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.postagem.deleteMany({});

  await prisma.$executeRaw`ALTER SEQUENCE "Postagem_id_seq" RESTART WITH 1;`;  // Para PostgreSQL

  await prisma.postagem.create({
    data: {
      autor: "Arhur Morais",
      descricao: "Fazendo pose para a foto do github.",
      imagem: "https://imgur.com/xmt2zAj",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "Eu, Arthur e Edu somos do Rock!.",
      imagem: "https://imgur.com/kvaAXUS",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Será que to com muita espinha??.",
      imagem: "https://imgur.com/HbusjjJ",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Fica frio aí mano.",
      imagem: "https://imgur.com/227tG0a",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "Eu, miotto e arthur fazendo trabalho aff.",
      imagem: "https://imgur.com/0OWfbEi",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Eu e o Arthur recriando o poster de Memories of Murder.",
      imagem: "https://imgur.com/JXnruxq",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Eu e gustavo c cara de trouxa",
      imagem: "https://imgur.com/lUPlO05",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira",
      descricao: "aiiiiaiiiiaiii cachorro html.",
      imagem: "https://imgur.com/FYTA9VD",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "A bang perfeitinha do gu.",
      imagem: "https://imgur.com/f5uo8ng",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Brustolin",
      descricao: "calças novas",
      imagem: "https://imgur.com/Vuw97c9",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira",
      descricao: "Estudando programação no laboratório de informática.",
      imagem: "https://imgur.com/dg5mVzj",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Tirando foto no banheiro rsrsrs",
      imagem: "https://imgur.com/BPaIs2A",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Eu e meus pastéis",
      imagem: "https://imgur.com/3JO9noM",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Participando da feira de ciências da escola com meus pasteis.",
      imagem: "https://imgur.com/oet5B39",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "eu e a bia fazendo paaaaz",
      imagem: "https://imgur.com/MEBtgcr",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly",
      descricao: "Tirando foto no banheiro bem iconicas.",
      imagem: "https://imgur.com/9vRkrit",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "bianca luisa",
      descricao: "Eu e a tsumoto.",
      imagem: "https://imgur.com/bUXMq8E",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "livia Oliveira",
      descricao: "Sesi muuuuundo",
      imagem: "https://imgur.com/ybt13lX",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "eu de perto rs.",
      imagem: "https://imgur.com/eAkc4Xe",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "eu e a miotto na aulinha top do thiago.",
      imagem: "https://imgur.com/oR7ENyp",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "daniel Casalli",
      descricao: "you are my sunshine my only sunshine.",
      imagem: "https://imgur.com/IROAAxX",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "eu e a porto no jóia.",
      imagem: "https://imgur.com/oBD3GHL",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emilio Henrique",
      descricao: "emilio.",
      imagem: "https://imgur.com/nJotLX3",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira",
      descricao: "Felipe dev atento.",
      imagem: "https://imgur.com/AIwnjZu",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "trabalhando fazendo pasteis igual um condenado",
      imagem: "https://imgur.com/JXnCMuD",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "eu e os sitecrafters codando",
      imagem: "https://imgur.com/0OWfbEi",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fernando Santos Evêncio da Silva",
      descricao: "codando c meus dois amores rs",
      imagem: "https://imgur.com/Rd69wUT",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "comendo",
      imagem: "https://imgur.com/qIktUI2",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "instalação SO",
      imagem: "https://imgur.com/CJB9VoY",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fábio Henrique Rabello Trevizolli",
      descricao: "recriando o poster de Clube dos 5",
      imagem: "https://imgur.com/cbQ2iUW",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Teixeira Lisboa",
      descricao: "só codar codar codar e codar.",
      imagem: "https://imgur.com/KFZfr7S",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "eu, gu e sunshine",
      imagem: "https://imgur.com/cRljj76",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "eu e o gu fazendo palhaçada",
      imagem: "https://imgur.com/uxwYOo4",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "não aguento mais só codar html",
      imagem: "https://imgur.com/ljIAqhr",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "Meu talento é ser P.O",
      imagem: "https://imgur.com/MwsxVfl",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "Fica frio aí arthur",
      imagem: "https://imgur.com/24jKRBX",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor",
      descricao: "o mistério dos pastéis",
      imagem: "https://imgur.com/6ymct3E",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "diálogo com o pedro ",
      imagem: "https://imgur.com/7dCvnBV",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Joao Stopiglia",
      descricao: "henrico só com o pokémon",
      imagem: "https://imgur.com/Iz3Jr5G",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "instalando manjaro no SENAI",
      imagem: "https://imgur.com/SuElxjI",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "rock",
      imagem: "https://imgur.com/VzXFLmf",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "eu e o jão ",
      imagem: "https://imgur.com/2Y2hiA5",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "Eu e a duuuuuda",
      imagem: "https://imgur.com/oFy2nVC",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "garrafa, joao e eu",
      imagem: "https://imgur.com/lGuaCsA",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "fazendo biquinho na biblio",
      imagem: "https://imgur.com/tmEEZ5R",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo teixeira Lisboa",
      descricao: "Fazendo trabalho de pokemon",
      imagem: "https://imgur.com/CPClVY8",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Estou andando",
      imagem: "https://imgur.com/xyTsQkq",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "Com elas!!",
      imagem: "https://imgur.com/vi34gKW",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Com a minha metadinha eu me sinto tão segurinha",
      imagem: "https://imgur.com/mN0kDq6",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais dos Santos",
      descricao: "fazendo meu filme fav c o guuu",
      imagem: "https://imgur.com/JXnruxq",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Eu e a assombração",
      imagem: "https://imgur.com/aJOEVjw",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Mexendo no cardapio da minha pastelaria",
      imagem: "https://imgur.com/mVVK4fo",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "?",
      imagem: "https://imgur.com/V4mZvQI",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Tatuagem inguaissss",
      imagem: "https://imgur.com/pW7K0UM",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Olhar de fallen angel",
      imagem: "https://imgur.com/2f92e14",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "livia tirou foto nossa",
      imagem: "https://imgur.com/ZLuHMRp",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "vendo as notas eita",
      imagem: "https://imgur.com/ofdsedO",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "olho de peixe c o piva e a yasmin",
      imagem: "https://imgur.com/7o5DzwX",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Fazendo pose com as girls no auditório",
      imagem: "https://imgur.com/O7L7va1",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "fazendo beijo c a bibis",
      imagem: "https://imgur.com/lbkJpSt",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto",
      descricao: "Formatando pc no laboratório",
      imagem: "https://imgur.com/1F0OkxK",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "mesa dos goats.",
      imagem: "https://imgur.com/wmaJDkx",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "recriando o poster de Stranger Things com o edu",
      imagem: "https://imgur.com/a/Vz7v1BW#pegYGN6",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Joao Pedro Piva Nogueira",
      descricao: "farmando aura",
      imagem: "https://imgur.com/2mZyDGP",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "Fazendo massagem no fernando",
      imagem: "https://imgur.com/dvZuetd",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia oliveira Cruz",
      descricao: "piva sendo piva.",
      imagem: "https://imgur.com/9IjIDNl",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "recriando cena do clube dos 5 com os dois patetas",
      imagem: "https://imgur.com/a/Vz7v1BW#PX0Yacs",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "recriando o poster de ET",
      imagem: "https://imgur.com/SEEySTd",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "buuuuuu",
      imagem: "https://imgur.com/fG5P1wV",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Victor Gomes de Souza",
      descricao: "Foto com a tropa",
      imagem: "https://imgur.com/tmDfDQo",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "joia, login e muito codigo",
      imagem: "https://imgur.com/BsHgyST",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Cachorro aiiaiaiaiaiai",
      imagem: "https://imgur.com/FYTA9VD",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "sala 1tds1",
      imagem: "https://imgur.com/XpCHDCL",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "beijinho com o tupi",
      imagem: "https://imgur.com/OyjPFIm",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "mesa dos goats by tupi",
      imagem: "https://imgur.com/DrMYmHv",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "preciso urgentemente de uma calça nova",
      imagem: "https://imgur.com/Vuw97c9",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Sunshine Sun",
      descricao: "eu e meus bests.",
      imagem: "https://imgur.com/IROAAxX",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisóstomo",
      descricao: "eu e meu momor codando e o luiz de vela.",
      imagem: "https://imgur.com/Rd69wUT",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Amo esse filme",
      imagem: "https://imgur.com/cbQ2iUW",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Cena top c meus amigos tops",
      imagem: "https://imgur.com/8tyOlpI",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "amamos o gusteivo mané",
      imagem: "https://imgur.com/6DXPa6C",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "apresentação medo",
      imagem: "https://imgur.com/VzXFLmf",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "Comendo Halls",
      imagem: "https://imgur.com/6zlnN9k",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "👍",
      imagem: "https://imgur.com/3ho8WPj",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "loouuuuusa",
      imagem: "https://imgur.com/ceTCdYF",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "Eu e o lzn",
      imagem: "https://imgur.com/2Y2hiA5",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Entrei no rasp",
      imagem: "https://imgur.com/fw2vc8W",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "rebeca nanando",
      imagem: "https://imgur.com/bgthJq7",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Jão Stopiglia",
      descricao: "eu e as duas",
      imagem: "https://imgur.com/x1Vd2xL",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "prof mamprim",
      imagem: "https://imgur.com/XC5sdnz",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "foto da sala",
      imagem: "https://imgur.com/LD7twnj",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Lívia Oliveira Cruz",
      descricao: "Felipe Dev personagem",
      imagem: "https://imgur.com/XEyniLT",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "girls e a sunshine",
      imagem: "https://imgur.com/3Ikcky3",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Stopiglia",
      descricao: "eu e o thales",
      imagem: "https://imgur.com/f1a9oa5",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais",
      descricao: "Gustavo codando",
      imagem: "https://imgur.com/jIyWUWs",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "eu e o pivo só nas risadas",
      imagem: "https://imgur.com/z9oe1zc",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "estou indignado",
      imagem: "https://imgur.com/Fd3nTBG",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga",
      descricao: "Eu e o joãozinho",
      imagem: "https://imgur.com/lGuaCsA",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "olhar atento",
      imagem: "https://imgur.com/hkvhYSf",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá",
      descricao: "positivo e eu",
      imagem: "https://imgur.com/76NSeB6",
    },
  });

};

console.log("🌸| Seeds inseridas com sucesso!");

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
