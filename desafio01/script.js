function calcular() {
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var n3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var num3 = Number(n3.value)

    if(num1 < num2){
    for (var cont = num1; cont <= num2; cont += num3) {
       res.innerHTML += `${cont} &#x1F449;`
    } 
} else {
    for (var cont = num1; cont >= num2; cont -= num3) {
        res.innerHTML += `${cont} &#x1F449;`
    }
}
}




