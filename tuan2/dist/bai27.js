"use strict";
async function fetchWithRetry(url, retries) {
    let attempt = 0;
    while (attempt <= retries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
            attempt++;
            if (attempt > retries) {
                throw new Error(`Failed after ${retries} retries`);
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
    throw new Error("Unexpected error in fetchWithRetry");
}
async function main6() {
    try {
        const todo = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("✅ Success:", todo);
    }
    catch (err) {
        console.error("❌ Error:", err.message);
    }
}
main6();
