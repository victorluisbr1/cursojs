function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let num1 = Number(num.value)
    

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let c = 1
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num1} x ${c} = ${num1 * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
}




