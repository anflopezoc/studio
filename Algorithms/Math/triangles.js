const trianglefibonacci = (number) => {
    const  x = 0;
    const y = 1;
    const fib = [];

    fib[0] = 0;
    fib[1] = 1;

    for (i= 2; i <= number; i++){
        fib[i] = fib[i-2]+ fib[i-1];
    };
    return fib
};

const trianglepascal = (numFilas)=> {
    if(numFilas == 0) return [];
    if(numFilas == 1) return [[1]];
    const resultado = []
    for (let i = 1; i <= numFilas; i++) {
        let arr = []
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i -1) arr[arr.length] = 1            
        else {arr[arr.length] = (resultado[i-2][j-1] + resultado[i-2][j]);}
        }
        resultado[resultado.length] = arr;
    }

    return resultado

} 
 

console.log(trianglefibonacci(7))
console.log(trianglepascal(7))