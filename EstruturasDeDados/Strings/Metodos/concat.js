// concat() : pega muitas substrings e as junta.

const paises = ['Brasil', 'Argentina', 'Portugal'];

const cidades = ['Timbiras', 'Codó', 'São luis']

const concatCidadePaises = []
console.log(concatCidadePaises)

//Laço

for( let i = 0; i < paises.length ; i++){
    // console.log(paises[i]);

    // concatCidadePaises.push(paises[i])

    const filter = paises.filter((item) => item === 'Brasil')

    if(filter){
        concatCidadePaises.push(filter)
    }
    
}


console.log(concatCidadePaises)


