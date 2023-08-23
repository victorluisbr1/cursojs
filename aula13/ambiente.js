/*
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
console.log(`Você tem ${idade} anos.`)
*/

var idade = 1
do {
    console.log(`Você tem ${idade} anos.`)
    idade++
} while (idade <= 10)


var idade = 1
while (idade <= 10) {
    console.log(`Você tem ${idade} anos.`)
    idade++ // idade = + 1
}

do {
    var pass = prompt("Enter your password:");
  } while (pass !== "secret");
  