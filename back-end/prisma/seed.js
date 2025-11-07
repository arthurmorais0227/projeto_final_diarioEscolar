import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.postagem.deleteMany({});

  await prisma.$executeRaw`ALTER SEQUENCE "Postagem_id_seq" RESTART WITH 1;`;  // Para PostgreSQL

await prisma.postagem.create({
      data: {
        autor: "Ana Clara Lima",
        descricao: "Monitorar a experiência do usuário com eficiência. Flexibilidade é a chave para o sucesso de um produto.",
        imagem: "link_da_imagem_1.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Pedro Henrique Souza",
        descricao: "Criar uma estratégia funcional é crucial. A maior prioridade é sempre a satisfação do cliente.",
        imagem: "link_da_imagem_2.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Mariana Ferreira",
        descricao: "A importância de otimizar os recursos do seu sistema. Desenvolver serviços de valor agregado.",
        imagem: "link_da_imagem_3.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "João Paulo Costa",
        descricao: "As palavras-chave principais do nosso projeto são engajamento e inovação. Aumente seu foco no cliente.",
        imagem: "link_da_imagem_4.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Lívia Rodrigues",
        descricao: "Incentivar um sistema é sempre o melhor caminho. O futuro exige muita inovação e criatividade.",
        imagem: "link_da_imagem_5.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Felipe Almeida",
        descricao: "Desenvolver uma estratégia de longo prazo é essencial. Otimize a experiência do usuário.",
        imagem: "link_da_imagem_6.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Camila Santos",
        descricao: "Criar uma estratégia funcional é crucial. A maior prioridade é sempre o cliente.",
        imagem: "link_da_imagem_7.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Guilherme Oliveira",
        descricao: "Os serviços de valor agregado impactam diretamente o resultado. Flexibilidade e melhorias contínuas.",
        imagem: "link_da_imagem_8.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Sofia Mendes",
        descricao: "Foco na experiência do usuário e eficiência. Aumente seu foco na satisfação do cliente.",
        imagem: "link_da_imagem_9.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Lucas Pereira",
        descricao: "Monitorar a experiência do usuário é vital. As palavras-chave principais são flexíveis e adaptáveis.",
        imagem: "link_da_imagem_10.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Heloísa Castro",
        descricao: "Otimizar recursos para obter melhorias. Incentivar um sistema é o melhor caminho para a inovação.",
        imagem: "link_da_imagem_11.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Rafael Martins",
        descricao: "Aumente seu foco no cliente e na eficiência. O futuro exige muita criatividade e adaptabilidade.",
        imagem: "link_da_imagem_12.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Beatriz Nogueira",
        descricao: "Desenvolver uma estratégia de longo prazo é essencial. A maior prioridade é a qualidade e o valor.",
        imagem: "link_da_imagem_13.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Daniel Rocha",
        descricao: "Criar uma estratégia funcional para o nosso projeto. Monitorar a experiência do usuário com sucesso.",
        imagem: "link_da_imagem_14.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Isabela Gomes",
        descricao: "Os serviços de valor agregado impactam o resultado. Flexibilidade e foco na melhoria contínua.",
        imagem: "link_da_imagem_15.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Gustavo Lopes",
        descricao: "Aumente seu foco na satisfação do cliente e inovação. Otimize os recursos do seu sistema.",
        imagem: "link_da_imagem_16.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Laura Vieira",
        descricao: "Incentivar um sistema é sempre a melhor abordagem. O futuro exige adaptabilidade e visão de longo prazo.",
        imagem: "link_da_imagem_17.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Thiago Barbosa",
        descricao: "Desenvolver serviços de valor agregado é essencial. As palavras-chave principais são flexíveis e eficientes.",
        imagem: "link_da_imagem_18.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Júlia Pires",
        descricao: "A maior prioridade é sempre o cliente. Criar uma estratégia funcional e de alto impacto.",
        imagem: "link_da_imagem_19.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "André Carvalho",
        descricao: "Monitorar a experiência do usuário com sucesso. Otimize a experiência do usuário e os resultados.",
        imagem: "link_da_imagem_20.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Maria Eduarda Silveira",
        descricao: "Desenvolver uma estratégia de longo prazo. Flexibilidade e foco na melhoria contínua são diferenciais.",
        imagem: "link_da_imagem_21.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Arthur Mendes",
        descricao: "Aumente seu foco no cliente e na inovação. Incentivar um sistema é o melhor caminho.",
        imagem: "link_da_imagem_22.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Manuela Costa",
        descricao: "Os serviços de valor agregado impactam diretamente. A maior prioridade é a satisfação do cliente.",
        imagem: "link_da_imagem_23.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Gabriel Oliveira",
        descricao: "Criar uma estratégia funcional e adaptável. Monitorar a experiência do usuário com eficiência.",
        imagem: "link_da_imagem_24.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Vitória Martins",
        descricao: "Otimize os recursos do seu sistema. O futuro exige muita criatividade e adaptabilidade.",
        imagem: "link_da_imagem_25.jpg",
      }
    }),

    await prisma.postagem.create({
      data: {
        autor: "Enzo Pires",
        descricao: "Desenvolver serviços de valor agregado. As palavras-chave principais são flexíveis e de longo prazo.",
        imagem: "link_da_imagem_26.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Luisa Farias",
        descricao: "Incentivar um sistema é sempre a melhor abordagem. Aumente seu foco na eficiência e no valor.",
        imagem: "link_da_imagem_27.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Bruno Rocha",
        descricao: "A maior prioridade é sempre o cliente. Desenvolver uma estratégia de alto impacto.",
        imagem: "link_da_imagem_28.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Clara Gomes",
        descricao: "Monitorar a experiência do usuário com sucesso. Otimize a experiência do usuário com o sistema.",
        imagem: "link_da_imagem_29.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Eduardo Silva",
        descricao: "Criar uma estratégia funcional para o nosso projeto. Flexibilidade e melhorias contínuas são cruciais.",
        imagem: "link_da_imagem_30.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Giovana Lopes",
        descricao: "Os serviços de valor agregado impactam o resultado. Incentivar um sistema para obter inovação.",
        imagem: "link_da_imagem_31.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Ricardo Vieira",
        descricao: "Aumente seu foco na satisfação do cliente e adaptabilidade. Otimize os recursos do sistema.",
        imagem: "link_da_imagem_32.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Valentina Barbosa",
        descricao: "Desenvolver uma estratégia de longo prazo é essencial. O futuro exige muita criatividade.",
        imagem: "link_da_imagem_33.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Fábio Carvalho",
        descricao: "As palavras-chave principais são engajamento e valor. A maior prioridade é a qualidade.",
        imagem: "link_da_imagem_34.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Alice Faria",
        descricao: "Monitorar a experiência do usuário com eficiência. Criar uma estratégia funcional e de sucesso.",
        imagem: "link_da_imagem_35.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Vinícius Mendes",
        descricao: "Desenvolver serviços de valor agregado. Flexibilidade e foco na melhoria contínua.",
        imagem: "link_da_imagem_36.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Helena Rocha",
        descricao: "Aumente seu foco no cliente e na eficiência. Incentivar um sistema para resultados ótimos.",
        imagem: "link_da_imagem_37.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Lorenzo Gomes",
        descricao: "A maior prioridade é sempre o cliente. Otimize os recursos do seu sistema para escalabilidade.",
        imagem: "link_da_imagem_38.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Mirella Vieira",
        descricao: "Desenvolver uma estratégia de longo prazo é crucial. O futuro exige muita inovação.",
        imagem: "link_da_imagem_39.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Caio Lima",
        descricao: "Os serviços de valor agregado impactam o resultado. Monitorar a experiência do usuário de perto.",
        imagem: "link_da_imagem_40.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Isadora Costa",
        descricao: "Criar uma estratégia funcional e adaptável. Flexibilidade e foco na satisfação do cliente.",
        imagem: "link_da_imagem_41.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Benício Santos",
        descricao: "Incentivar um sistema é sempre o melhor caminho. As palavras-chave principais são eficiência e valor.",
        imagem: "link_da_imagem_42.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Larissa Oliveira",
        descricao: "Aumente seu foco na melhoria contínua. Desenvolver serviços de valor agregado para o usuário.",
        imagem: "link_da_imagem_43.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Emanuel Pereira",
        descricao: "A maior prioridade é a qualidade. Otimize a experiência do usuário com o sistema.",
        imagem: "link_da_imagem_44.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Esther Ribeiro",
        descricao: "Monitorar a experiência do usuário com sucesso. Desenvolver uma estratégia de longo prazo.",
        imagem: "link_da_imagem_45.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Henrique Nogueira",
        descricao: "Criar uma estratégia funcional e de alto impacto. Flexibilidade é crucial para o sucesso.",
        imagem: "link_da_imagem_46.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Nicole Lima",
        descricao: "Os serviços de valor agregado impactam o resultado. Incentivar um sistema para crescimento.",
        imagem: "link_da_imagem_47.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Theo Barbosa",
        descricao: "Aumente seu foco no cliente e adaptabilidade. Otimize os recursos do seu sistema.",
        imagem: "link_da_imagem_48.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Gabriela Almeida",
        descricao: "Desenvolver serviços de valor agregado. As palavras-chave principais são flexíveis e adaptáveis.",
        imagem: "link_da_imagem_49.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Davi Rocha",
        descricao: "A maior prioridade é sempre o cliente. Monitorar a experiência do usuário para melhoria.",
        imagem: "link_da_imagem_50.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Cecília Martins",
        descricao: "Desenvolver uma estratégia de longo prazo é essencial. O futuro exige muita criatividade e inovação.",
        imagem: "link_da_imagem_51.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Miguel Vieira",
        descricao: "Criar uma estratégia funcional e eficiente. Flexibilidade e foco na melhoria contínua.",
        imagem: "link_da_imagem_52.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Elisa Gomes",
        descricao: "Os serviços de valor agregado impactam diretamente o resultado. Incentivar um sistema para o sucesso.",
        imagem: "link_da_imagem_53.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Lucca Lopes",
        descricao: "Aumente seu foco na satisfação do cliente. Otimize os recursos do seu sistema com eficiência.",
        imagem: "link_da_imagem_54.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Maitê Pires",
        descricao: "A maior prioridade é a qualidade e o valor. Desenvolver serviços de valor agregado.",
        imagem: "link_da_imagem_55.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Alexandre Silva",
        descricao: "Monitorar a experiência do usuário com sucesso. As palavras-chave principais são flexíveis e de longo prazo.",
        imagem: "link_da_imagem_56.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Marina Costa",
        descricao: "Desenvolver uma estratégia de longo prazo é crucial. Aumente seu foco na eficiência.",
        imagem: "link_da_imagem_57.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Murilo Oliveira",
        descricao: "Criar uma estratégia funcional e adaptável. Otimize a experiência do usuário com o sistema.",
        imagem: "link_da_imagem_58.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Aurora Santos",
        descricao: "Os serviços de valor agregado impactam o resultado. Incentivar um sistema para melhoria contínua.",
        imagem: "link_da_imagem_59.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Davi Lucca Rocha",
        descricao: "A maior prioridade é sempre o cliente. Flexibilidade e foco na satisfação.",
        imagem: "link_da_imagem_60.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Heloísa Lima",
        descricao: "Desenvolver serviços de valor agregado para o usuário. O futuro exige muita criatividade.",
        imagem: "link_da_imagem_61.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Théo Farias",
        descricao: "Monitorar a experiência do usuário com eficiência. Desenvolver uma estratégia de alto valor.",
        imagem: "link_da_imagem_62.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Clara Vitória Silva",
        descricao: "Criar uma estratégia funcional para o nosso projeto. Otimize os recursos do seu sistema.",
        imagem: "link_da_imagem_63.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Benjamin Almeida",
        descricao: "Aumente seu foco no cliente e na inovação. Incentivar um sistema é o melhor caminho para resultados.",
        imagem: "link_da_imagem_64.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Lara Mendes",
        descricao: "A maior prioridade é sempre o cliente. Flexibilidade e adaptabilidade são diferenciais.",
        imagem: "link_da_imagem_65.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Gael Pires",
        descricao: "Desenvolver uma estratégia de longo prazo é essencial. Os serviços de valor agregado impactam diretamente.",
        imagem: "link_da_imagem_66.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Alícia Costa",
        descricao: "Monitorar a experiência do usuário com sucesso. Otimize a experiência do usuário para crescimento.",
        imagem: "link_da_imagem_67.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Samuel Vieira",
        descricao: "Criar uma estratégia funcional e de alto impacto. Aumente seu foco na eficiência.",
        imagem: "link_da_imagem_68.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Rebeca Oliveira",
        descricao: "Incentivar um sistema é sempre a melhor abordagem. Desenvolver serviços de valor agregado.",
        imagem: "link_da_imagem_69.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Elias Martins",
        descricao: "A maior prioridade é a satisfação do cliente. As palavras-chave principais são flexíveis e inovadoras.",
        imagem: "link_da_imagem_70.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Ayla Nogueira",
        descricao: "Otimize os recursos do seu sistema. Desenvolver uma estratégia de longo prazo.",
        imagem: "link_da_imagem_71.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Vicente Rocha",
        descricao: "Monitorar a experiência do usuário com eficiência. Criar uma estratégia funcional e adaptável.",
        imagem: "link_da_imagem_72.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Chloe Gomes",
        descricao: "Os serviços de valor agregado impactam o resultado. Flexibilidade e melhorias contínuas.",
        imagem: "link_da_imagem_73.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Noah Lopes",
        descricao: "Aumente seu foco no cliente e adaptabilidade. Incentivar um sistema para o sucesso.",
        imagem: "link_da_imagem_74.jpg",
      },
    });

    
    await prisma.postagem.create({
      data: {
        autor: "Antonella Silva",
        descricao: "A maior prioridade é sempre o cliente. Desenvolver serviços de valor agregado.",
        imagem: "link_da_imagem_75.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Bryan Faria",
        descricao: "Otimize a experiência do usuário com o sistema. O futuro exige muita criatividade e inovação.",
        imagem: "link_da_imagem_76.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Diana Mendes",
        descricao: "Desenvolver uma estratégia de longo prazo é crucial. Monitorar a experiência do usuário.",
        imagem: "link_da_imagem_77.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Davi Lucas Carvalho",
        descricao: "Criar uma estratégia funcional e de alto impacto. Flexibilidade é crucial para o sucesso.",
        imagem: "link_da_imagem_78.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Emilly Santos",
        descricao: "Os serviços de valor agregado impactam diretamente. Aumente seu foco na eficiência.",
        imagem: "link_da_imagem_79.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Francisco Costa",
        descricao: "Incentivar um sistema é sempre o melhor caminho. A maior prioridade é a qualidade e o valor.",
        imagem: "link_da_imagem_80.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Helena Alvez",
        descricao: "Desenvolver serviços de valor agregado para o usuário. Otimize os recursos do seu sistema.",
        imagem: "link_da_imagem_81.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Hugo Pereira",
        descricao: "Monitorar a experiência do usuário com sucesso. As palavras-chave principais são flexíveis e adaptáveis.",
        imagem: "link_da_imagem_82.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Joana Oliveira",
        descricao: "Desenvolver uma estratégia de longo prazo. Criar uma estratégia funcional e eficiente.",
        imagem: "link_da_imagem_83.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Kaique Rocha",
        descricao: "Aumente seu foco no cliente e na inovação. Flexibilidade e melhorias contínuas.",
        imagem: "link_da_imagem_84.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Lorena Lima",
        descricao: "Os serviços de valor agregado impactam o resultado. Incentivar um sistema para escalabilidade.",
        imagem: "link_da_imagem_85.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Márcio Pires",
        descricao: "A maior prioridade é sempre o cliente. Otimize a experiência do usuário com o sistema.",
        imagem: "link_da_imagem_86.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Nina Ferreira",
        descricao: "Desenvolver serviços de valor agregado. O futuro exige muita criatividade.",
        imagem: "link_da_imagem_87.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Otávio Martins",
        descricao: "Monitorar a experiência do usuário com eficiência. Desenvolver uma estratégia de longo prazo.",
        imagem: "link_da_imagem_88.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Pietra Barbosa",
        descricao: "Criar uma estratégia funcional e adaptável. Aumente seu foco na satisfação do cliente.",
        imagem: "link_da_imagem_89.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Quincy Carvalho",
        descricao: "Incentivar um sistema é sempre a melhor abordagem. As palavras-chave principais são valor e engajamento.",
        imagem: "link_da_imagem_90.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Rafaela Gomes",
        descricao: "A maior prioridade é a qualidade. Os serviços de valor agregado impactam diretamente.",
        imagem: "link_da_imagem_91.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Sérgio Vieira",
        descricao: "Otimize os recursos do seu sistema. Monitorar a experiência do usuário com sucesso.",
        imagem: "link_da_imagem_92.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Tainá Oliveira",
        descricao: "Desenvolver uma estratégia de longo prazo é crucial. Flexibilidade e adaptabilidade.",
        imagem: "link_da_imagem_93.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Uriel Lima",
        descricao: "Aumente seu foco na eficiência e no valor. Criar uma estratégia funcional e de sucesso.",
        imagem: "link_da_imagem_94.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Yasmin Santos",
        descricao: "Os serviços de valor agregado impactam o resultado. Incentivar um sistema para melhoria contínua.",
        imagem: "link_da_imagem_95.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Vitor Mendes",
        descricao: "A maior prioridade é sempre o cliente. Desenvolver serviços de valor agregado.",
        imagem: "link_da_imagem_96.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Xavier Rocha",
        descricao: "Monitorar a experiência do usuário com eficiência. O futuro exige muita inovação.",
        imagem: "link_da_imagem_97.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Zoe Farias",
        descricao: "Desenvolver uma estratégia de longo prazo. Otimize a experiência do usuário com o sistema.",
        imagem: "link_da_imagem_98.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Ian Gomes",
        descricao: "Criar uma estratégia funcional e de alto impacto. Flexibilidade e foco na satisfação do cliente.",
        imagem: "link_da_imagem_99.jpg",
      },
    });

    await prisma.postagem.create({
      data: {
        autor: "Eva Costa",
        descricao: "Aumente seu foco no cliente e na eficiência. Incentivar um sistema é o melhor caminho.",
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
