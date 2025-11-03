import * as PostagemModel from '../Models/postagemModel.js'

export const listarTodos = async (req, res) => {
    try {
        const postagens = await PostagemModel.encontreTodos();

        if(!postagens || postagens.length === 0){
            res.status(404).json({
                total: postagens.length,
                mensagem: 'Não há postagens na lista',
                postagens
            })
        }

        res.status(200).json({
            total: postagens.length,
            mensagem: 'Lista de postagens',
            postagens
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const postagem = await PostagemModel.encontreUm(id);

        if(!postagem){
            return res.status(404).json({
                erro: "Postagem não encontrada",
                mensagem: 'Verifique o id do Postagem',
                id: id
            })
        }

        res.status(200).json({
            message: 'Postagem encontrada',
            postagem
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}