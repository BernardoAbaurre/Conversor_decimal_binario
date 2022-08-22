function calcular()
{
    var inpDecimalStr = document.getElementById('inputDecimal').value
    var inpDecimal = Number(document.getElementById('inputDecimal').value)
    var resultado = document.getElementById('resultado')
    var binario = []
    var contador = 0

    // animação de erro
    function animar()
    {
        if (contador == 0)
        {
            document.getElementById('inputDecimal').classList.add('move')
            contador = 1
            setTimeout(animar,500)
        }
        else
        {
            document.getElementById('inputDecimal').classList.remove('move')
            contador = 0
        }
    }

    // zerar resultados
    resultado.innerHTML = 'Resultado: '
    document.getElementById('nbits').innerHTML = 'Número de bits: '

    // processamento
    if(isNaN(inpDecimalStr) == true || inpDecimalStr == "" || inpDecimal <= 0)
    {
        animar()
        resultado.innerHTML += '-'
        document.getElementById('nbits').innerHTML += '-'
    }
    else
    {
        for(var i = 0; inpDecimal > 1; i++)
        {
            binario.push((inpDecimal%2).toString(10))
            inpDecimal = Math.floor(inpDecimal/2)
        }
        binario.push(1)
        binario = binario.reverse()

        // saída
        for(var i = 0; i < binario.length; i++)
        {
            resultado.innerHTML += `${binario[i]}`
        }
        document.getElementById('nbits').innerHTML += `${binario.length}`
    }
}