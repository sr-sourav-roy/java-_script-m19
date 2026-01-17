// continue --> skip rest of the code for this iteration
// break --> i am done this loop. loo end.


// for loop continue
// for (let i = 1; i < 20; i += 1){
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i)
// }


// while loop continue
let num = 0;
while (num < 20) {
    num += 1;
    if (num % 3 !== 0) {
        continue;
    }
    console.log(num);

}