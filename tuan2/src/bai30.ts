interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodooo(id: number): Promise<Todo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Todo = await response.json();
  return data;
}

async function fetchTodosWithStatus(ids: number[]): Promise<void> {
  const promises = ids.map((id) => fetchTodooo(id));

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✅ Todo ${ids[index]} success:`, result.value.title);
    } else {
      console.error(`❌ Todo ${ids[index]} failed:`, result.reason);
    }
  });
}

fetchTodosWithStatus([1, 2, 9999, 3]); 