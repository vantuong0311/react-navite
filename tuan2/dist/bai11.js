"use strict";
const delayHelloAsyncc = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
async function run() {
    const message = await delayHelloAsyncc;
    console.log(message);
}
run();
