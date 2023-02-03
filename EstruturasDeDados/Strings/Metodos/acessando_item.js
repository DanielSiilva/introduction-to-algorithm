
//Acessando caracteres em uma string : Podemos acessar cada caractere em uma string usando seu índice. Na programação, a contagem começa em 0. O primeiro índice da string é zero e o último índice é o comprimento da string menos um.

//Ex: 

const Js = 'JavaScript'

console.log('Acessando um unico elemento');

console.log(Js[0]) //Sempre pelo indicie

console.log('--------------');

console.log('Acessando todos os item com o loop for');

for( let i = 0; i < Js.length; i++){
    console.log(Js[i])
}
