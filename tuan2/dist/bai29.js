"use strict";
async function asyncTaskk(id) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000; // 1–3 giây
        setTimeout(() => {
            resolve(`✅ Task ${id} done after ${delay} ms`);
        }, delay);
    });
}
async function queueProcess() {
    for (let i = 1; i <= 5; i++) {
        const result = await asyncTaskk(i);
        console.log(result);
    }
}
queueProcess();
