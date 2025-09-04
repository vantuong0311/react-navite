"use strict";
function getEvenNumber(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumber = arr.filter(num => num % 2 == 0);
            resolve(evenNumber);
        }, 1000);
    });
}
getEvenNumber([1, 2, 3, 4, 5, 6]).then((rs) => {
    console.log("cac so chan", rs);
}).catch((err) => {
    console.log("loi", err);
});
