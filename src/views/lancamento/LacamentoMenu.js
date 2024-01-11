
export default function LancamentoMenu(props) { 

    const corpo = props.lancamento.map(lanca => {
        return (            
            <tr key={lanca.id}>
                <td>{lanca.descricao}</td>
                <td>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(lanca.valor)}</td>
                <td>{lanca.tipo}</td>
                <td>{lanca.mes}</td>
                <td>{lanca.status}</td>
                <td>
                    <button className="btn btn-success" onClick={evento => props.atualizarStatus(lanca, 'EFETIVADO')}
                        title="Efetivar"
                        disabled={lanca.status !== 'PENDENTE'} >
                        <i className="bi bi-bookmark-check-fill"></i>
                    </button>
                    <button className="btn btn-warning" onClick={evento => props.atualizarStatus(lanca, 'CANCELADO')}
                       title="Cancelar"
                       disabled={lanca.status !== 'PENDENTE'} >
                        <i className="bi bi-x-square-fill"></i>
                    </button>
                    <button className="btn btn-primary" onClick={evento => props.editarItem(lanca.id)}  title="Editar">
                        <i className="bi bi-pen-fill"></i>
                    </button>
                    <button className="btn btn-danger" onClick={evento => props.deletarLancamento(lanca.id)} title="Deletar">
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <>
            <table {...props}>
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Data</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {corpo}
                </tbody>
            </table>
        </>
    )

}