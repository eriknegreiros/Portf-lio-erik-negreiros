const arr = [0,10,5]

const media = (arr) => {

console.log(`O valor da média = ${arr.reduce((acc, va) => {
    return acc + va
}, 0  )/ arr.length}`)  

console.log(`O maior número = ${Math.max.apply(Math,arr)}`)

console.log(`Soma = ${arr.reduce((acc, va) => {
    return acc + va
}, 0  )}`)

}
media(arr)