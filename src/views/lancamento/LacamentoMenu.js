
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
                    <button className="btn btn-primary">Edita</button>
                    <button onClick={evento => props.deletarLancamento(lanca.id)} className="btn btn-danger">Deletar</button>
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