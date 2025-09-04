async function fetchUser1(id: number): Promise<{ id: number; name: string }> {
  const apiCall = new Promise<{ id: number; name: string }>((resolve) => {
    const delay = Math.floor(Math.random() * 3000); // 0–3s
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
      });
    }, delay);
  });

  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`Timeout fetching user ${id}`)), 2000);
  });

  return Promise.race([apiCall, timeout]);
}
async function fetchUsers1(ids: number[]): Promise<{ id: number; name: string }[]> {
  const promises = ids.map((id) => fetchUser1(id));
  return Promise.all(promises);
}

async function main1() {
  try {
    console.log("Fetching users...");
    const users = await fetchUsers1([1, 2, 3]);
    console.log("Result:", users);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

main1();