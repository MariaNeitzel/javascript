let num= [5, 8, 4, 6, 7]
num[5]=9
num.push(3)
num.sort()

console.log(`Nosso vetro é o ${num} e tem ${num.length} espaços`)

/*console.log( num[0])
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}*/

for(let pos in num){//Simplificado
    console.log(num[pos])
}

num.indexOf(7)