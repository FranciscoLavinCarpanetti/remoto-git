// dado un array de numeros [-1,5,-4,7]  quiero que me devuelvas el array contrario 

//[-1,5,-4,7] => [1,-5,4,-7]

//[-1,5,-4,7] => [1,5,4,7]

// resolverlo como querais pero prima usar funciones.

const array = [-1, 5, -4, 7];

const getArraySignChange = arr => arr.map(numero => numero * (-1));
console.log(getArraySignChange(array))


const getArrayAbs = arr => arr.map(numero => Math.abs(numero))
console.log(getArrayAbs(array)) 