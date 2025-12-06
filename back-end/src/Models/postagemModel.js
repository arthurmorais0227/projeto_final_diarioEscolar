import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.postagem.findMany({
        orderBy: { id: 'asc' }
    });
}

export const encontreUm = async (id) => {
    return await prisma.postagem.findUnique({
        where: { id: Number(id) }
    })
}

export const criar = async (dado) => {
    return await prisma.postagem.create({
        data: {
            autor: dado.autor || 'Anônimo',
            descricao: dado.descricao,
            data: dado.data,
            imagem: dado.imagem
        }
    })
}

export const deletar = async (id) => {
    return await prisma.postagem.delete({
        where: { id: Number(id) }
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.postagem.update({
        where: { id: Number(id) },
        data: {
            ...(dado.autor && { autor: dado.autor }),
            ...(dado.descricao && { descricao: dado.descricao }),
            ...(dado.data && { data: dado.data }),
            ...(dado.imagem && { imagem: dado.imagem })
        }
    })
}
