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

export const listarComPorPostagem = async (req, res) => {
    try {
        const id_postagem = parseInt(req.params.id_postagem);
        const comentarios = await ComentarioModel.encontreComPorPostagem(id_postagem);

        if(!comentarios || comentarios.length === 0){
            res.status(200).json({
                total: 0,
                mensagem: 'Não há comentários para esta postagem.',
                comentarios: []
            })
            return;
        }

        res.status(200).json({
            total: comentarios.length,
            mensagem: 'Comentários encontrados:',
            comentarios: comentarios
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
        const { autor, comentario, id_postagem } = req.body;

        if (!id_postagem) {
            return res.status(400).json({
                erro: 'id_postagem é obrigatório.',
                status: 400
            });
        }
        
        if(!comentario){
            return  res.status(400).json({
                erro: 'comentario é obrigatório.',
                status: 400
            });
        }

        const dado = { autor, comentario, id_postagem };

        const novoComentario = await ComentarioModel.criar(dado);
    
        res.status(201).json({
            mensagem: 'Comentário criado com sucesso!',
            comentario: novoComentario
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao enviar comentário.',
            detalhes: error.message
        });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deletado = await ComentarioModel.deletar(id);

        if (!deletado) {
            return res.status(404).json({
                erro: "Comentário não encontrado para deletar.",
                id
            });
        }

        res.status(200).json({
            mensagem: "Comentário deletado com sucesso!",
            comentario: deletado
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao deletar comentário.',
            detalhes: error.message
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;
        
        const atualizado = await ComentarioModel.atualizar(id, dados);

        if (!atualizado) {
            return res.status(404).json({
                erro: "Comentário não encontrado para atualizar.",
                id
            });
        }

        res.status(200).json({
            mensagem: "Comentário atualizado com sucesso!",
            comentario: atualizado
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar comentário.',
            detalhes: error.message
        });
    }
};
