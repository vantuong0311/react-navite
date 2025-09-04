async function fetchWithRetry<T>(url: string, retries: number): Promise<T> {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed: ${(error as Error).message}`);

      attempt++;
      if (attempt > retries) {
        throw new Error(`Failed after ${retries} retries`);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  throw new Error("Unexpected error in fetchWithRetry");
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function main6() {
  try {
    const todo = await fetchWithRetry<Todo>(
      "https://jsonplaceholder.typicode.com/todos/1",
      3
    );
    console.log("✅ Success:", todo);
  } catch (err) {
    console.error("❌ Error:", (err as Error).message);
  }
}

main6();