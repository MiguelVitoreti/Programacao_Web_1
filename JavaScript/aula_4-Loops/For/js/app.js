console.log("Bem vindo a nossa tabuada")

//Estrutura do Loop For
/*
Se divide em 3 partes:
1 - Variável contadora
2 - Condição
3 - Incremento




for(let i = 1; i<=10; i++){
    console.log(`${i}° volta do loop`)
}

console.log(`Calculadora `)



let num1 = Number(prompt("Bem vindo a nossa tabuada \n\nDigite o número da sua tabuada"))

for(let i = 0; i<=10; i++){
    console.log(`${num1} x ${i} = ${num1*i}\n`)
}


let num1 = Number(prompt("Bem vindo a nossa tabuada \n\nDigite o número da sua tabuada"))

for(let i = 0; i<=10; i++){
    if(i == 5){
        break
    }
    console.log(`${num1} x ${i} = ${num1*i}\n`)
}

*/

// Continue - Serve para pular a proxima instrução mas mantem o loop

let num1 = Number(prompt("Bem vindo a nossa tabuada \n\nDigite o número da sua tabuada"))

for(let i = 0; i<=10; i++){
    if(i == 5){
        continue
    }

    console.log(`${num1} x ${i} = ${num1*i}\n`)
}