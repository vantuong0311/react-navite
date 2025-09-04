async function asyncTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; 
    setTimeout(() => {
      resolve(`✅ Task ${id} done after ${delay} ms`);
    }, delay);
  });
}

async function batchProcess(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5].map((id) => asyncTask(id));

  const results = await Promise.all(tasks);

  results.forEach((result) => console.log(result));
}

batchProcess();