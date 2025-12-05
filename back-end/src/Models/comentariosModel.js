import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.comentario.findMany({
        orderBy: { id: 'asc' }
    });
}

export const encontreUm = async (id) => {
    return await prisma.comentario.findUnique({
        where: { id: Number(id) }
    })
}

export const criar = async (dado) => {
    return await prisma.comentario.create({
        data: {
            autor: dado.autor,
            comentario: dado.comentario,
            data: dado.data,
        }
    })
}

export const deletar = async (id) => {
    return await prisma.comentario.delete({
        where: { id: Number(id) }
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.comentario.update({
        where: { id: Number(id) },
        data: {
            ...(dado.autor && { autor: dado.autor }),
            ...(dado.comentario && { comentario: dado.comentario }),
        }
    })
}