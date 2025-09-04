function simulateTaask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task completed after ${time / 1000} seconds`);
    }, time);
  });
}
async function runSimulateTaask() {
    try {
        const result = await simulateTaask(2000)
        console.log(result);
        
    } catch (error) {
        console.log(error)
    }
 }
 runSimulateTaask()