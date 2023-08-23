
let amigo = {nome: 'Victor', sexo: 'homem', peso: 62, engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)

console.log(`Me chamo ${amigo.nome}, sou ${amigo.sexo} e peso ${amigo.peso} Kg.`)