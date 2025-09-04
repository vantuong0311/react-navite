function simulateTassk(time: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 0) {
        resolve(`Task completed after ${time / 1000} seconds`);
      } else {
        reject("Error: Task failed because time is invalid");
      }
    }, time);
  });
}
async function runTask(time: number) {
  try {
    const result = await simulateTassk(time); 
    console.log(result);  
  } catch (error) {
    console.error(error);  
  } finally {
    console.log("Task execution finished");  
  }
}

runTask(2000);  
runTask(-1000);