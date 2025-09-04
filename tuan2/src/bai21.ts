interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodo(id: number): Promise<Todo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Todo = await response.json();
  return data;
}

async function main2() {
  try {
    const todo = await fetchTodo(1);
    console.log("Todo:", todo);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}

main2();