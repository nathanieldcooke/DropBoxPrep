// const fib = (n) => {
//     if (n === 1 || n === 2) return 1
//     let m = 2;

//     let fib1 = 1; //   // 1
//     let fib2 = 1; // 2 // 2 // 3
//     while (m !== n) {
//         tempFib1 = fib2;
//         fib2 = fib1 + fib2;
//         fib1 = tempFib1;
//         m++;
//     }

//     return fib2;
// }

const fib = (n) => { // 5
    const table = Array(n + 1).fill(0); // [0, 1, 2, 3, 2, 0]
    table[1] = 1;
    for (let i = 0; i <= n; i++) { // 2
        console.log(table)
        //  1               2  --> 3
        table[i + 1] += table[i];
        //  0                1 --> 2
        table[i + 2] += table[i];
    }
    return table[n];
}


// const recFib = (n, fib1 = 1, fib2 = 1, m = 2) => {
//     if (n === 1 || n === 2) return 1;
//     if (n === m) return fib2;

//     return recFib(n, fib2, fib2 = fib1 + fib2, ++m);
// }


// const found = {};
// const recFib = (n) => {
//     if (n in found) return found[n];
//     if (n <= 2) return 1;

//     // console.log(found)

//     let nFib = recFib(n - 1) + recFib(n - 2);
//     found[n] = nFib;

//     return nFib;
// };

// console.log(fib(2))  // 1
// console.log(fib(3))  // 2
console.log(fib(5))  // 5
// console.log(fib(8))  // 21


// console.log(recFib(2))  // 1
// console.log(recFib(3))  // 2
// console.log(recFib(5))  // 5
// console.log(recFib(50))  // 21
// console.log(found)