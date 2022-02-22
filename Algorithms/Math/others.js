// --- Calculate the average of an Array
function average (array) { 
    return array.reduce((a,b) => (a+b), 0 )/arr.length 
    } 
const arr = [13,43,33]

//console.log(average(arr));


// ---- Determine if the elements of an array are equal

function checkEquel (array) {
    let first = arr[0];
   for (let i=1; i<arr.length; i++)
       if (arr[i] != first)
            return false;
   return true;
}

const arrayEquel = ['q','q','r','q']

// console.log(checkEquel(arrayEquel))


//  ------ Algoritmo factorial

const nFactorial = (num) => {
    if (num==0) return 0
    else {
        const numFact = num - 1;
        let resFact = 1 ;
        for (let i = 1; i <= numFact; i++) {
            resFact = resFact * i
        }
        return resFact * num
    }
}

// console.log(nFactorial(4));

// -- Secuencia Fibonnaci 


const fibonacciSequence = (number) => {
    const fib = [];

    fib[0] = 0;
    fib[1] = 1;

    for (i= 2; i <= number; i++){
        fib[i] = fib[i-2]+ fib[i-1];
    };
    return fib[fib.length -1]
};

console.log(fibonacciSequence(11));




