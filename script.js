function calcular()
{
    var inpBinario = document.getElementById('inputBinario').value
    var resultado = document.getElementById('resultado')
    var binario = 0
    var contador = 0

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

    resultado.innerHTML = 'Resultado:'
    for(var i = 0, c = inpBinario.length ; i < inpBinario.length; i++, c--)
    {
        if(inpBinario.substring(c-1, c) == '1')
        {
            binario += 2**i
        }
        else if(inpBinario.substring(c-1, c) != '0')
        {
            animar()
            binario = 0
            break
        }
    }
    resultado.innerHTML += ` ${binario}`
}