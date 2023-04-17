function eratosthenes(n) {
    if (n < 2) {
        throw new Error("n must be larger than 1");
    }
    var A = new Array(n);
    for (var i = 0; i < A.length; i++) {
        A[i] = true;
    }
    var sqrt_n = Math.sqrt(n);
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
    var n = 150;
    console.log("Primes under " + n + ": ");
    var primes;
    primes = eratosthenes(n);
    for (var i = 2; i < primes.length; i++) {
        if (primes[i]) {
            console.log(i);
        }
    }
}
main();
