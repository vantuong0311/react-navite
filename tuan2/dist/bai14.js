"use strict";
async function multiplyByThree(num) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
}
multiplyByThree(5).then(result => {
    console.log(result);
});
