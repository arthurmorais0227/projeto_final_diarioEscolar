import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.postagem.deleteMany({});

  await prisma.$executeRaw`ALTER SEQUENCE "Postagem_id_seq" RESTART WITH 1;`;  // Para PostgreSQL

  await prisma.postagem.create({
    data: {
      autor: "Ana Clara Cremasco Luiz",
      descricao: "Estudando para a prova de matemática.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisostomo de Oliveira",
      descricao: "Participando do projeto de ciências com a turma.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "Apresentando um trabalho sobre sustentabilidade.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga Ferreira",
      descricao: "Fazendo anotações durante a aula de história.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "Revisando o conteúdo de português para o teste.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "Estudando em grupo na biblioteca da escola.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Julia Erlo Figueiredo de Miranda",
      descricao: "Trabalhando no cartaz do projeto de arte.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "Participando de uma oficina de robótica.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "Fazendo exercícios de química para o simulado.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "Organizando o caderno para a semana de provas.",
      imagem: "./assets/img/oberon.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "Estudando programação no laboratório de informática.",
      imagem: "link_da_imagem_11.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "Apresentando o projeto de matemática com a equipe.",
      imagem: "link_da_imagem_12.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "Fazendo pesquisa para o trabalho de geografia.",
      imagem: "link_da_imagem_13.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Isabele Porto",
      descricao: "Participando da feira de ciências da escola.",
      imagem: "link_da_imagem_14.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Estudando gramática para a prova de português.",
      imagem: "link_da_imagem_15.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Manuela Maestro",
      descricao: "Organizando o material escolar para o novo bimestre.",
      imagem: "link_da_imagem_16.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "Apresentando um seminário sobre literatura brasileira.",
      imagem: "link_da_imagem_17.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "Revisando os tópicos de biologia para o exame.",
      imagem: "link_da_imagem_18.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais dos Santos",
      descricao: "Escrevendo redação sobre meio ambiente.",
      imagem: "link_da_imagem_19.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Estudando equações no reforço de matemática.",
      imagem: "link_da_imagem_20.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "Fazendo um experimento de ciências no laboratório.",
      imagem: "link_da_imagem_21.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "Lendo um livro de história para o trabalho em grupo.",
      imagem: "link_da_imagem_22.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Rodrigues Stopiglia",
      descricao: "Criando uma apresentação sobre o sistema solar.",
      imagem: "link_da_imagem_23.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Nicolly Rodrigues de Souza Santos",
      descricao: "Fazendo um resumo para o estudo de geografia.",
      imagem: "link_da_imagem_24.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fernando Santos Evêncio da Silva",
      descricao: "Pesquisando sobre revolução industrial para a aula.",
      imagem: "link_da_imagem_25.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "Estudando inglês com os colegas da turma.",
      imagem: "link_da_imagem_26.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Teixeira Lisboa",
      descricao: "Organizando os slides do trabalho de química.",
      imagem: "link_da_imagem_27.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá Guimarães de Oliveira Pinto",
      descricao: "Praticando cálculos de física para o simulado.",
      imagem: "link_da_imagem_28.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Victor da Silva Gomes",
      descricao: "Participando da olimpíada de matemática.",
      imagem: "link_da_imagem_29.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Anotando as explicações do professor de geografia.",
      imagem: "link_da_imagem_30.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Estudando história do Brasil para a prova final.",
      imagem: "link_da_imagem_31.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Ana Clara Cremasco Luiz",
      descricao: "Fazendo revisão para o exame de ciências.",
      imagem: "link_da_imagem_32.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisostomo de Oliveira",
      descricao: "Montando cartaz sobre o meio ambiente.",
      imagem: "link_da_imagem_33.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "Fazendo resumo das aulas de português.",
      imagem: "link_da_imagem_34.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga Ferreira",
      descricao: "Trabalhando em equipe no projeto de história.",
      imagem: "link_da_imagem_35.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "Participando de grupo de estudos de matemática.",
      imagem: "link_da_imagem_36.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "Lendo sobre a Segunda Guerra Mundial.",
      imagem: "link_da_imagem_37.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Julia Erlo Figueiredo de Miranda",
      descricao: "Estudando para o simulado de ciências humanas.",
      imagem: "link_da_imagem_38.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "Pesquisando para o projeto de tecnologia.",
      imagem: "link_da_imagem_39.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "Escrevendo relatório do experimento de física.",
      imagem: "link_da_imagem_40.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "Fazendo atividade de leitura em grupo.",
      imagem: "link_da_imagem_41.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "Montando maquete para o trabalho de geografia.",
      imagem: "link_da_imagem_42.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "Praticando redação para o ENEM.",
      imagem: "link_da_imagem_43.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "Estudando o ciclo da água para a feira de ciências.",
      imagem: "link_da_imagem_44.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Isabele Porto",
      descricao: "Revisando conteúdo de álgebra e geometria.",
      imagem: "link_da_imagem_45.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Apresentando poesia na aula de literatura.",
      imagem: "link_da_imagem_46.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Manuela Maestro",
      descricao: "Organizando um mural de curiosidades científicas.",
      imagem: "link_da_imagem_47.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "Participando do clube de leitura da escola.",
      imagem: "link_da_imagem_48.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "Anotando fórmulas importantes de química.",
      imagem: "link_da_imagem_49.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais dos Santos",
      descricao: "Ajudando colegas com dúvidas de matemática.",
      imagem: "link_da_imagem_50.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Estudando biomas brasileiros para a prova.",
      imagem: "link_da_imagem_51.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "Criando gráfico para o trabalho de estatística.",
      imagem: "link_da_imagem_52.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "Desenvolvendo apresentação sobre energia limpa.",
      imagem: "link_da_imagem_53.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Rodrigues Stopiglia",
      descricao: "Estudando os períodos da história antiga.",
      imagem: "link_da_imagem_54.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Nicolly Rodrigues de Souza Santos",
      descricao: "Escrevendo texto sobre cidadania e ética.",
      imagem: "link_da_imagem_55.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fernando Santos Evêncio da Silva",
      descricao: "Pesquisando invenções da revolução científica.",
      imagem: "link_da_imagem_56.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rafael Santos Mendes",
      descricao: "Resolvendo exercícios de geometria plana.",
      imagem: "link_da_imagem_57.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Teixeira Lisboa",
      descricao: "Ajudando na organização da gincana escolar.",
      imagem: "link_da_imagem_58.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Cauã Tupinambá Guimarães de Oliveira Pinto",
      descricao: "Revisando tópicos de biologia celular.",
      imagem: "link_da_imagem_59.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Victor da Silva Gomes",
      descricao: "Lendo sobre a história da arte no renascimento.",
      imagem: "link_da_imagem_60.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gustavo Victor Ferreira",
      descricao: "Participando de oficina de ciências ambientais.",
      imagem: "link_da_imagem_61.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Daniel Casalli",
      descricao: "Apresentando seminário sobre ecossistemas.",
      imagem: "link_da_imagem_62.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Ana Clara Cremasco Luiz",
      descricao: "Fazendo relatório da aula de laboratório.",
      imagem: "link_da_imagem_63.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisostomo de Oliveira",
      descricao: "Desenhando cartaz educativo sobre reciclagem.",
      imagem: "link_da_imagem_64.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "Estudando expressões algébricas.",
      imagem: "link_da_imagem_65.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga Ferreira",
      descricao: "Lendo capítulo do livro de biologia.",
      imagem: "link_da_imagem_66.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "Escrevendo texto dissertativo sobre educação.",
      imagem: "link_da_imagem_67.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "Montando slides sobre a fotossíntese.",
      imagem: "link_da_imagem_68.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Julia Erlo Figueiredo de Miranda",
      descricao: "Participando de competição de conhecimentos gerais.",
      imagem: "link_da_imagem_69.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "Trabalhando com mapas na aula de geografia.",
      imagem: "link_da_imagem_70.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "Analisando dados para o trabalho de estatística.",
      imagem: "link_da_imagem_71.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "Praticando leitura de textos em inglês.",
      imagem: "link_da_imagem_72.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "Fazendo atividade sobre movimentos literários.",
      imagem: "link_da_imagem_73.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "Revisando tabela periódica para o teste.",
      imagem: "link_da_imagem_74.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "Anotando fórmulas de física clássica.",
      imagem: "link_da_imagem_75.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Isabele Porto",
      descricao: "Criando resumos para estudar na semana de provas.",
      imagem: "link_da_imagem_76.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "Montando cartaz sobre cultura indígena.",
      imagem: "link_da_imagem_77.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Manuela Maestro",
      descricao: "Estudando para o simulado de ciências da natureza.",
      imagem: "link_da_imagem_78.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Murilo Milan Brustolin",
      descricao: "Desenhando gráficos para o trabalho de matemática.",
      imagem: "link_da_imagem_79.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Beatriz Miotto de Oliveira",
      descricao: "Trabalhando com maquetes em artes visuais.",
      imagem: "link_da_imagem_80.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Arthur Morais dos Santos",
      descricao: "Resolvendo questões de física moderna.",
      imagem: "link_da_imagem_81.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Livia Oliveira Cruz",
      descricao: "Participando do grupo de estudos de literatura.",
      imagem: "link_da_imagem_82.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Otávio de Andrade Braga",
      descricao: "Criando apresentação sobre biodiversidade.",
      imagem: "link_da_imagem_83.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Piva Nogueira",
      descricao: "Estudando geopolítica mundial.",
      imagem: "link_da_imagem_84.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "João Pedro Rodrigues Stopiglia",
      descricao: "Lendo reportagem sobre inovação na educação.",
      imagem: "link_da_imagem_85.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Ana Clara Cremasco Luiz",
      descricao: "",
      imagem: "link_da_imagem_86.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Crisostomo de Oliveira",
      descricao: "",
      imagem: "link_da_imagem_87.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Danilo do Valle Marchiori Jorge",
      descricao: "",
      imagem: "link_da_imagem_88.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda Braga Ferreira",
      descricao: "",
      imagem: "link_da_imagem_89.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Maria Eduarda de Andrade",
      descricao: "",
      imagem: "link_da_imagem_90.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Gabriela Emi Yamamoto",
      descricao: "",
      imagem: "link_da_imagem_91.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Julia Erlo Figueiredo de Miranda",
      descricao: "",
      imagem: "link_da_imagem_92.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Luiz Felipe",
      descricao: "",
      imagem: "link_da_imagem_93.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Victor Ferreira de Oliveira",
      descricao: "",
      imagem: "link_da_imagem_94.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Rebeca Gabrielly Moreira Alves",
      descricao: "",
      imagem: "link_da_imagem_95.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Emílio Henrique dos Santos Favoretto",
      descricao: "",
      imagem: "link_da_imagem_96.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Fabio Henrique Rabello Trevizolli",
      descricao: "",
      imagem: "link_da_imagem_97.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Pedro Henrique Urbano Escapalete",
      descricao: "",
      imagem: "link_da_imagem_98.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Yasmin Isabele Porto",
      descricao: "",
      imagem: "link_da_imagem_99.jpg",
    },
  });

  await prisma.postagem.create({
    data: {
      autor: "Bianca Luisa Teodoro Silva",
      descricao: "",
      imagem: "link_da_imagem_100.jpg",
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
