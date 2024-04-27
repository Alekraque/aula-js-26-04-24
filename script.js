function calcc() {
    var lista = parseInt(document.getElementById('lista').value)

    for (i=0; i<=lista; i++){
        console.log(i)
    }
}


function calcular() {
    var numero = parseInt(document.getElementById('numero').value)

    for (i = 1; i <= 10; i++) {
        console.log(`${i}x${numero} = ${i*numero}`)
    }
}

function calc() {
    var divisor = parseInt(document.getElementById('divisor').value)
    for (i = 1; i <= divisor; i++) {

        if (divisor % i == 0) {
            console.log(`${divisor} é divisivel por ${i}`)
        }
    }
}