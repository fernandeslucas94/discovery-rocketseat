// 1º - Declare uma variável com nome weight

// var weight;

// 2º - Qual tipo de dado é a variável acima ?

// console.log(typeof weight); // Boolean or Int!

// 3º - Declare uma variável e atribua valores para cada um dos dados:

// let user = {
//     name: 'Lucas',
//     age: 26,
//     stars: 15.5,
//     isSubscribed: true 
// }

// 4º - A variável student abaixo é de que tipo de dado ?

student = {} 
// console.log(typeof student); // Object

// 4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3

student = {
    name: 'Lucas',
    age: 26,
    weight: 60,
    isSubscribed: true
}

// 4.2 - Mostre no console a seguinte mensagem:
    //   <name> de idade <age> pesa <weight> kgs.

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kgs.`)

// 5º - Declare uma variável do tipo array, de nome students, e atribua a ela nenhun valor.

// let students = [];

// 6º - Reatribua valor para a variável acima, colocando dentro dela o objeto student do exercício 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students = [student];

// 7º - Coloque no console a posição 0 do array acima!

// console.log(students[0]);

// 8º - Crie um novo student e coloque na poisção 1 do array students

const student1 = {
    name: 'Paulo',
    age: 35,
    weight: 80,
    isSubscribed: true
}

students = [
    student,
    student1
]

// Outra maneira de atribuir a posição 1 do array o novo student, é a seguinte:

// students[1] = student1;

console.log(students[1]);

