"use strict";
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const number = Math.random();
        if (number > 0.5) {
            resolve(number);
        }
        else {
            reject("Random number too low");
        }
    });
}
getRandomNumber().then((rs) => {
    console.log("seccess! Random number:", rs);
}).catch((error) => {
    console.log("Error", error);
});
