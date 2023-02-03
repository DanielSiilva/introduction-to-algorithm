console.log('Acessando Elementos')

console.log('---Pelo indice -----')

const A = [ 0, 2, 3];
console.log([A[0], A[2]])

// ---------------------------------
console.log('---Acessando todos os elementos: For -----')

for( let i =0; i < A.length ; i++){
    console.log(A[i])
}

// ---------------------------------
console.log('---Acessando todos os elementos: Map -----')

console.log(A.map(item => item))

// ---------------------------------
// Sequancia dos 20 primeiros numeros da sequência de Fibonacci, os dois primeiros numeros da sequncia são 1 e 2

console.log('---Algortmo da sequencia de Fibonacci -----')

//Iniciamos o array
const Fibonacci = [];
Fibonacci[1] = 1; // Atribuimos o 1 a segunda posição
Fibonacci[2] = 1; // Atribuimos o 2 a terceira posição


//Criando do 3° ao 20° numero da seguencia, usando o for. atribuido a soma das duas posições anteriores do array á posição atual

for (let i = 3; i < 20; i++){
    (Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i -2])
}

// Percorremos o Array com todas as sequencias já criadas, mostrando dos numeros em sua posições! 

for (let i = 1; i <Fibonacci.length; i++){
    console.log(Fibonacci[i])
}

//Obs: Em Js Array é um objeto mutavel, ou seje, não precisamos dizer o tamanho do array, como em outras linguagens tais como JAVA. Nesse caso, o Array deve aumetar de forma dinamica, a medida que vamos adcionado mais elementos!

