const sum = new Promise((resolve,reject) => {
    console.log('executing...');
    setTimeout(() => {
        const result = 'hello';
        resolve(result);
    }, 3000);

});

// sum.then((result) => {
//     console.log(result);         // it call sumPromise 
// }).catch(error => {
//     console.log(error);
// })


async function printSum() {
    const result = await sum();
    console.log(result);
}

printSum();

