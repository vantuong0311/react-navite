"use strict";
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main5() {
    console.log("⏳ Waiting 5 seconds...");
    await wait(5000);
    console.log("✅ Done after 5 seconds!");
}
main5();
