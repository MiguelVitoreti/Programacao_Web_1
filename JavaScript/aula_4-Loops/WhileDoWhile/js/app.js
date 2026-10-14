/*
A diferença do While e Do While
1 - While 
    1.1 - verifica a condição antesde entrar no loop
    1.2 - tem um contador e variável de escape do loop
2 - Do While
    2.1 - primeiro executa o loop, depois testa
    2.2 - usado quando precisa executar o loop pelo
          menos 1 vez
    2.3 - Escapa so loop apenas se a variável atender 
          a condição      
*/

// While

/*
let num1 = 0 

while(num1 <= 5){
    console.log(`${(num1 + 1)}º rodada`)
    
    num1++
}
*/

//Exemplo tabuada com prompt

let num1 = 0 
let fixo = Number(prompt("Insira seu número"))

while(num1 <= 10){
    console.log(`${fixo} x ${num1} = ${fixo * num1}\n`)
    
    num1++
}    