async function fetchUserr(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
      });
    }, 1000);
  });
}

async function fetchUserrs(ids: number[]): Promise<{ id: number; name: string }[]> {
  const promises = ids.map((id) => fetchUserr(id));
  
  return Promise.all(promises);
}

async function maiin() {
  console.log("Fetching users...");
  const users = await fetchUserrs([1, 2, 3]);
  console.log("Result:", users);
}

maiin();