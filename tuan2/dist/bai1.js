"use strict";
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000); // 2 giây
});
myPromise.then((message) => {
    console.log(message);
});
