"use strict";
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(1000).then((message) => {
    console.log(message);
});
