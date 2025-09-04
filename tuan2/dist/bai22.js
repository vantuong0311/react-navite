"use strict";
async function fetchTodoo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
async function fetchTodos(ids) {
    try {
        const results = await Promise.all(ids.map((id) => fetchTodoo(id)));
        results.forEach((todo) => {
            console.log(`Todo ${todo.id}: ${todo.title} | Completed: ${todo.completed}`);
        });
    }
    catch (err) {
        console.error("Error fetching todos:", err.message);
    }
}
fetchTodos([1, 2, 3, 4, 5]);
