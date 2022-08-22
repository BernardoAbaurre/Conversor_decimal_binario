function calcular()
{
    var inpBinario = document.getElementById('inputBinario').value
    var resultado = document.getElementById('resultado')
    var binario = 0
    var contador = 0
    var nbits = inpBinario.length

    // animação de erro
    function animar()
    {
        if (contador == 0)
        {
            document.getElementById('inputBinario').classList.add('move')
            contador = 1
            setTimeout(animar,500)
        }
        else
        {
            document.getElementById('inputBinario').classList.remove('move')
            contador = 0
        }
    }

    // zerar resultados
    resultado.innerHTML = 'Resultado:'
    document.getElementById('nbits').innerHTML = 'Número de bits:'

    // processamento
    for(var i = 0, c = inpBinario.length ; i < inpBinario.length; i++, c--)
    {
        if(inpBinario.substring(c-1, c) != '0' && inpBinario.substring(c-1, c) != '1')
        {
            animar()
            binario = "-"
            nbits = "-"
            break
        }
        else if(inpBinario.substring(c-1, c) == '1')
        {
            binario += 2**i
        }
    }

    //saída
    resultado.innerHTML += ` ${binario}`
    document.getElementById('nbits').innerHTML += ` ${nbits}`
}

// ativação com a tecla ENTER
function enter(event)
{
    if ( event.charCode == 13)
    {
        calcular()
    }
}
document.body.addEventListener("keypress", enter)