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

export const encontreComPorPostagem = async (id_postagem) => {
    return await prisma.comentario.findMany({
        where: { id_postagem: Number(id_postagem) },
        orderBy: { id: 'asc' }
    });
}

export const criar = async (dado) => {
    return await prisma.comentario.create({
        data: {
            autor: dado.autor || 'Anônimo',
            comentario: dado.comentario,
            id_postagem: Number(dado.id_postagem)
        }
    });
}

export const atualizar = async (id, dados) => {
    return await prisma.comentario.update({
        where: { id: Number(id) },
        data: {
            autor: dados.autor || 'Anônimo',
            comentario: dados.comentario,
            id_postagem: dados.id_postagem
        }
    });
}

export const deletar = async (id) => {
    try {
        const deletado = await prisma.comentario.delete({
            where: { id: Number(id) }
        });

        return deletado; // se deu certo, retorna o registro deletado
    } catch (error) {
        if (error.code === 'P2025') {
            return null; // registro não existe
        }
        throw error; // outros erros do Prisma
    }
};
