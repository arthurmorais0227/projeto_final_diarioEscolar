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