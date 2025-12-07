import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.aluno.findMany({ orderBy: { id: 'asc' } });
}

export const crie = async (dado) => {
    return await prisma.aluno.create({ data: dado });
}

export const encontreUm = async (id) => {
    return await prisma.aluno.findUnique({ where: { id: Number(id) } });
}

export const deletar = async (id) => {
    return await prisma.aluno.delete({ where: { id: Number(id) } });
}
