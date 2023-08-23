function calcular(){ 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var n1 = Number(fano.value)
   

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERROR')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")

        if (sexo[0].checked) {
            gênero = 'Homem'
        } else {
            gênero = 'Mulher'
        }
    } 

    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-bebe-m.jpg')
    } else if (idade < 20) {
        img.setAttribute('src', 'foto-jovem-m.jpg')
    } else if (idade < 40) {
        img.setAttribute('src', 'foto-adulto-m.jpg')
    } else {
        img.setAttribute('src', 'foto-idoso-m.jpg')
    }
    
    //MULHER

    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-bebe-f.jpg')
    } else if (idade < 20) {
        img.setAttribute('src', 'foto-jovem-f.jpg')
    } else if (idade < 40) {
        img.setAttribute('src', 'foto-adulto-f.jpg')
    } else {
        img.setAttribute('src', 'foto-idoso-f.jpg')
    }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    
}