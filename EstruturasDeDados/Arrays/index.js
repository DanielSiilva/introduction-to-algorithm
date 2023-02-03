


//Arrays : é uma Lista
//Acessado: sempre pelo indice.

// const My_Array = [0,1,2,3,4, 6, 8, 7, 3]

//Acessando 1° Elemento
// console.log(My_Array[0])

//Acessando ultimoelemento
// console.log(My_Array[My_Array.length -1])
// console.log(My_Array.sort())

// My_Array[1] = null

// console.log(My_Array)


//Aqui é criado um ponteiro, e tudo que for mudado em A refretirá em B, e virce-verca
// const A = [0,2,3];

// const B = A

// B[0] = 23

// console.log( A)
// console.log(B)

//Se quisermos mudar apenas o B, devemos criar um copia de A,e assim mudar o valor que quisermos, para isso usamor o spreend Operator. Nesse caso criamo uma copia do array originial, e as mudanças que realizamor não afetará o Array Original

// const A = [1, 2, 3] ;
// const B = [...A]

// console.log('---Antes da mudança---');
// console.log(A);
// console.log(B);


// console.log('---Depois da mudança---');
// B[1] = 6

// console.log(A);
// console.log(B);

// console.log('----Trocando elementos de posição----')

// //Podemos realizar isso de algumas formas: umas delas é usando variaveis temporarias, por exemplo.

// console.log(' --- Antes da troca ----')


// const A = [1, 2, 3]
// console.log(A)
// // console.log(' --- Depois da troca ----')
// // const Temp1 = A[0]
// // const Temp2 = A[1]

// // A[0] = Temp2;
// // A[1] = Temp1

// // console.log(A)

// //Podemos reatribuir tambem , somente reatibuir valores .
// console.log(' --- Depois da troca ----')

// A[0], A[1] = A[1],A[0]

// console.log(A)
