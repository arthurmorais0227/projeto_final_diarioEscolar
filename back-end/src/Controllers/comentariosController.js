import * as ComentarioModel from '../Models/comentariosModel.js'

export const listarTodos = async (req, res) => {
    try {
        const limite = req.query.limite ? parseInt(req.query.limite) : undefined;
        const 
        comentarios = await ComentarioModel.encontreTodos();

        if(!comentarios || comentarios.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há comentarios na lista.',
                comentarios: []
            })
            return;
        }

        const comentariosFiltrados = typeof limite === 'number' && !isNaN(limite) ? comentarios.slice(0, limite) : comentarios;

        res.status(200).json({
            total: comentariosFiltrados.length,
            mensagem: 'Lista de comentarios:',
            comentarios: comentariosFiltrados
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor.',
            detalhes: error.message,
            status: 500
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comentario = await ComentarioModel.encontreUm(id);

        if(!comentario){
            return res.status(404).json({
                erro: "comentario não encontrado.",
                mensagem: 'Verifique o id do comentario.',
                id: id
            })
        }

        res.status(200).json({
            message: 'comentario encontrado:',
            comentario
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor.',
            detalhes: error.message,
            status: 500
        })
    }
};

export const criar = async (req, res) => {
    try {
        const { autor, comentario } = req.body;

        const dado = { autor, comentario };

        const novaComentario = await ComentarioModel.criar(dado);
    
        res.status(201).json({
            mensagem: 'Comentario criada com sucesso!',
            comentario: novoComentario
        });

    } catch (error) {
        res.status(500).json({
            erro: 'erro ao enviar comentário.',
            detalhes: error.message
        });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const comentarioExiste = await ComentarioModel.encontreUm(id);

        if(!comentarioExiste){
            return res.status(404).json({
                erro: 'A comentario com esse id não foi encontrada.',
                id: id
            })
        }

        await ComentarioModel.deletar(id)

        res.status(200).json({
            message: 'comentario apagado com sucesso.',
            comentarioRemovida: comentarioExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar comentário.',
            detalhes: error.message
        })
        
    }
}

export const atualizar = async (req, res) => {
    try {
    
    const id = parseInt(req.params.id);
    const dados = req.body;

    const comentarioExiste = await ComentarioModel.encontreUm(id);

    if(!comentarioExiste) {
        return res.status(404).json({
            erro: 'Esse comentario não existe',
            id: id
        })
    }

    const comentarioAtualizado = await ComentarioModel.atualizar(id, dados)

    return res.status(200).json({
        mensagem: 'comentario atualizado com sucesso!',
        comentario: comentarioAtualizado
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar o comentário.',
            detalhes: error.message
        })
    }
}