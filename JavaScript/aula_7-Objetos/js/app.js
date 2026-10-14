/*
Objetos armazenam dados organizados 
Ex: Propriedade e valor


*/
//Ex1

let aluno = {
    nome: "Miguel",
    idade: 15,
    Curso: "Desenvolvimento de Sistemas"
}

for(let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`)
}
