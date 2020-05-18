const firmas = (cpf) =>{

    //ler todas as Firmas no JSON
    const carregarTodasFirmas = () =>{
        try{
            const firmasBuffer = fs.readFileSync('firmas.json')   
            return JSON.parse(firmasBuffer.toString())
        }catch (error){
            return []
        }
    }

    //Buscar firma pelo nome
    const buscarFirma = (cpf) =>{
        const firmas = carregarTodasFirmas()
    
        const firmaEncontrada = firmas.find((firma) => firma.cpf === cpf)
    
        if(firmaEncontrada !== undefined){
            return firmaEncontrada
        }else{
            return console.log('Não possui firma aberta para este CPF.')
        }
    }

    buscarFirma(cpf)
}

module.exports = firmas