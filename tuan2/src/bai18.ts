async function fetchUsers(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
      });
    }, 1000); 
  });
}


async function mainn() {
  console.log("Fetching user...");
  const user = await fetchUsers(2);
  console.log("Result:", user);
}

mainn();