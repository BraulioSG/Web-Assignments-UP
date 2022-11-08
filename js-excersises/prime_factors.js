/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function (n) {
    'use strict';

    console.log(n);
    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var aux,
        sequence = [];

    //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime
    aux = n;
    while (!isPrime(aux)) {
        for (let i = aux - 1; i > 1; i--) {
            if (isPrime(i) && aux % i === 0) {
                aux = aux / i;
                sequence.push(i);
            }
        }
    }
    if (aux !== 1) sequence.push(aux);

    sequence.sort((a, b) => a - b);

    return sequence;
};

const send = () => {
    let n = document.getElementById('num').value;
    result = getPrimeFactors(n);
    document.getElementById('result').innerHTML = result.join('*');
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
//console.log(getPrimeFactors(30030));
