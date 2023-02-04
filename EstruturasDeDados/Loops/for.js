


const Numrs = [0, 2, 5, 6, 10, 8]
const Pars = []

console.log(Pars)

for(let par = 0; par < Numrs.length; par ++){
    const numr = Numrs[par] % 2 === 0

    Pars.push(numr)

}


console.log(Pars)