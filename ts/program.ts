
function eratosthenes(n: number): boolean[] {
    if (n < 2) {
        throw new Error("n must be larger than 1");
    }
    
    let A: boolean[] = new Array(n);
    for(var i = 0; i < A.length; i++){
        A[i] = true;
    }
    let sqrt_n = Math.sqrt(n);
    
    for (var i = 2; i <= sqrt_n; i++) {
        if (A[i]) {
            var k = 1;
            for (var j = i * i; j < n; j = i * i + k++ * i) {
                A[j] = false;
            }
        }
    }
    
    return A;
}

function main() {
    const n = 150;
    console.log("Primes under " + n + ": ");
    let primes;
    primes = eratosthenes(n);
    
    for (var i = 2; i < primes.length; i++) {
        if (primes[i]) {
            console.log(i);
        }
    }
}

main();