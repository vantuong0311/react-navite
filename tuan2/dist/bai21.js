"use strict";
async function fetchTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
async function main2() {
    try {
        const todo = await fetchTodo(1);
        console.log("Todo:", todo);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}
main2();
