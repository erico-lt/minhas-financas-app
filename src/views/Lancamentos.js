function Lancamentos() {
    return (
        <>
            <div class="container">
                <div class="card mb-3">
                    <h3 class="card-header">Busca Lançamento</h3>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="bs-component">
                                 <form>
                                    <fieldset>
                                    <div class="form-group">
                                                <label for="exampleInputEmail1">Ano: *</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Digite o Ano"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Mês: *</label>
                                                <select class="form-control" id="exampleSelect1">
                                                    <option>SELECIONE...</option>
                                                    <option>Janeiro</option>
                                                    <option>Fevereiro</option>
                                                    <option>Março</option>
                                                    <option>Abril</option>
                                                    <option>Maio</option>
                                                    <option>Junho</option>
                                                    <option>Julho</option>
                                                    <option>Agosto</option>
                                                    <option>Setembro</option>
                                                    <option>Outubro</option>
                                                    <option>Novembro</option>
                                                    <option>Dezembro</option>

                                                </select>
                                            </div>
                                    </fieldset>
                                 </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
}

export default Lancamentos;



