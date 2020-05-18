const buscarFirmaCpf = () =>{
    const cpfInformado = document.getElementById('campoCpf')
    const campoResultadoBusca = document.querySelector('#resultadoBusca')

    //ler todas as Firmas no JSON
    const carregarTodasFirmas = () =>{
        const firmasBuffer = fs.readFileSync('../files/firmas.json')   
        return JSON.parse(firmasBuffer.toString())
    }

    //Buscar firma pelo nome
    const buscarFirma = (cpf) =>{
        //lista de firmas
        const firmas = carregarTodasFirmas()
    
        //comparar cpf informado com a lista de firmas
        const firmaEncontrada = firmas.find((cpf) => firmas.cpf === cpf)
    
        //testando e retornando pensagens
        if(firmaEncontrada !== undefined){
            campoResultadoBusca.textContent = '<strong>Possui firma aberta para o CPF informado!</strong>'
        }else{
            campoResultadoBusca.textContent = '<strong>Não possui firma aberta para o CPF informado.</strong>'
        }
    }
    buscarFirma(cpfInformado.value)
}