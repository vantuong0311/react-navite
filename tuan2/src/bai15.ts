async function simulateTaaask(time: number, result: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, time));
  return result;
}


async function runTasks() {
  const task1 = await simulateTaaask(1000, "Task 1 completed");
  console.log(task1);  
  
  const task2 = await simulateTaaask(2000, "Task 2 completed");
  console.log(task2);  
  
  const task3 = await simulateTaaask(1500, "Task 3 completed");
  console.log(task3); 
}

runTasks();