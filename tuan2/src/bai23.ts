interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchCompletedTodos(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const todos: Todo[] = await response.json();

  return todos.filter((todo) => todo.completed);
}

async function main3() {
  try {
    const completedTodos = await fetchCompletedTodos();
    console.log("Completed Todos:");
    completedTodos.slice(0, 5).forEach((todo) => {
      console.log(`✔️ ${todo.id}: ${todo.title}`);
    });
    console.log(`\nTotal completed: ${completedTodos.length}`);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

main3();