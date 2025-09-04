async function fetchData(id: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Data ${id}`), 1000 * id)
  );
}

async function main() {
  
  const promises = [fetchData(1), fetchData(2), fetchData(3)];

  
  for await (const result of promises) {
    console.log(result);
  }
}

main();