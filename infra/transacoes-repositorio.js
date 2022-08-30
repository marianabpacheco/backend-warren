transacoes = {
    transacoes: [
        {
            descricao: 'Salgado na faculdade',
            categoria: 'Despesa',
            valor: 5.5
        },
        {
            descricao: 'Livro Clean Code',
            categoria: 'Despesa',
            valor: 50
        },
        {
            descricao: 'Grana do estágio',
            categoria: 'Receita',
            valor: 80
        },
        {
            descricao: 'Capinha pro celular',
            categoria: 'Despesa',
            valor: 15
        },
    ]
}


class TransacoesRepositorio {

    listarTransacoes() {
        return transacoes;
    }

    criarTransacao(transacao){
        const lista = transacoes.transacoes;
        lista.push(transacao);
    }
}

module.exports = TransacoesRepositorio;