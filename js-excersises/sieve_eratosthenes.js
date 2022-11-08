/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function (n) {
    'use strict';

    let nums = [];
    let primes = [];
    nums.length = n;
    nums.fill(false);
    nums[0] = true;
    nums[1] = true;

    for (let i = 2; i < nums.length; i++) {
        if (!nums[i]) {
            for (let j = 2 * i; j < nums.length; j += i) {
                nums[j] = true;
            }
        }
    }

    nums.forEach((e, idx) => {
        if (!e) {
            primes.push(idx);
        }
    });

    return primes;
};

//console.log(sieve(1000000));
