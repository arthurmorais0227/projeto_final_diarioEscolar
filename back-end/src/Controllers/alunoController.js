import * as AlunoModel from '../Models/alunoModel.js';

export const listarTodos = async (req, res) => {
    try {
        const alunos = await AlunoModel.encontreTodos();

        if (!alunos || alunos.length === 0) {
            return res.status(200).json({ total: 0, mensagem: 'Nenhum aluno encontrado.', alunos: [] });
        }

        res.status(200).json({ total: alunos.length, mensagem: 'Lista de alunos', alunos });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao obter alunos.', detalhes: error.message });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const aluno = await AlunoModel.encontreUm(id);

        if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado.', id });

        res.status(200).json({ mensagem: 'Aluno encontrado', aluno });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao obter aluno.', detalhes: error.message });
    }
}
