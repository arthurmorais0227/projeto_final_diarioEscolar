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