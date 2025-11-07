import * as PostagemModel from '../Models/postagemModel.js'

export const listarTodos = async (req, res) => {
    try {
        const postagens = await PostagemModel.encontreTodos();

        if(!postagens || postagens.length === 0){
            res.status(404).json({
                total: postagens.length,
                mensagem: 'Não há postagens na lista.',
                postagens
            })
        }

        res.status(200).json({
            total: postagens.length,
            mensagem: 'Lista de postagens:',
            postagens
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor.',
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
                erro: "Postagem não encontrada.",
                mensagem: 'Verifique o id do Postagem.',
                id: id
            })
        }

        res.status(200).json({
            message: 'Postagem encontrada:',
            postagem
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor.',
            detalhes: error.message,
            status: 500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { autor, descricao, data, imagem } = req.body;
        
        const dado = { autor, descricao, data, imagem }

    const novaPostagem = await PostagemModel.criar(req.body)
    
    res.status(201).json({
        mensagem: 'Postagem criada com sucesso!',
        comida: novaPostagem
    })

    } catch (error) {
        res.status(500).json({
            erro: 'erro o enviar postagem.',
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const postagemExiste = await PostagemModel.encontreUm(id);

        if(!postagemExiste){
            return res.status(404).json({
                erro: 'A postagem com esse id não foi encontrada.',
                id: id
            })
        }

        await PostagemModel.deletar(id)

        res.status(200).json({
            message: 'Postagem apagada com sucesso.',
            postagemRemovida: postagemExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar postagem.',
            detalhes: error.message
        })
        
    }
}

export const atualizar = async (req, res) => {
    try {
    
    const id = parseInt(req.params.id);
    const dados = req.body;

    const postagemExiste = await PostagemModel.encontreUm(id);

    if(!postagemExiste) {
        return res.status(404).json({
            erro: 'Esse postagem não existe',
            id: id
        })
    }

    const postagemAtualizada = await PostagemModel.atualizar(id, dados)

    return res.status(200).json({
        mensagem: 'Postagem atualizada com sucesso!',
        Postagem: postagemAtualizada
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar a postagem.',
            detalhes: error.message
        })
    }
}