"use strict";
async function postData(data) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
}
async function main45() {
    try {
        const newPost = await postData({
            title: "Hello TypeScript",
            body: "This is a test POST request",
            userId: 123,
        });
        console.log("Post created:", newPost);
    }
    catch (err) {
        console.error("Error:", err.message);
    }
}
main45();
