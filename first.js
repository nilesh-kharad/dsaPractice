// const fibonnacci = (n)=>{
//     let series = [0,1]
//     for(let i=2; i<n;i++){
//         series[i] = series[i-1] + series[i-2]
//     }
//     return series
// }
// console.log('fi', fibonnacci(2));
// console.log('fi', fibonnacci(3));
// console.log('fi', fibonnacci(5));
// console.log('fi', fibonnacci(7));

// const factorial =(n)=>{
//     let fact = 1
//     if(n==0){
//         return 1
//     } else {
//         for (let i = n; i > 1 ; i--) {
//             fact = fact * i
//         }
//     return fact
//     }
// }
// console.log('factorial()', factorial(4));
// console.log('factorial()', factorial(5));


const isPrime = (n) => {
    if (n < 2) {
        return false
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true

    }
}

console.log('isPrime', isPrime(1));
console.log('isPrime', isPrime(5));
console.log('isPrime', isPrime(4));