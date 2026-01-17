// even and odd defferent numbers
// for (let i = 0; i <= 20; i += 1) {
//     if (i % 2 === 0) {
//         console.log("print even number", i)
//     }
// }


// for (let i = 0; i <= 20; i += 1){
//     if (i % 2 == 0) {
//         console.log("even", i)
//     }
// }


// for (let i = 0; i <= 20; i += 1){
//     if (i % 2 !== 0) {
//         console.log("odd", i)
//     }
// }


// for (let i = 1; i <= 20; i += 2){
//         console.log("odd", i)
// }

// give me the list number 1 to 30 divisible by 5
// for (let i = 1; i <= 30; i += 2){
//     if (i % 5 === 0  || i % 3 === 0) {
//             console.log(i)
//         }
// }



// give me the list number 1 to 30 divisible by 5
// for (let i = 1; i <= 100; i += 1){
//     if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i)
//         }
// }



// sum give me the list number 1 to 30 divisible by 5
let sum = 0;
for (let i = 1; i <= 30; i += 1){
    if (i % 3 === 0) {
        console.log(i)
        sum += i;
        console.log("total sum",i)
        }
}

console.log("total sum:",sum);