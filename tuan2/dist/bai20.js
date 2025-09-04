"use strict";
async function fetchUser1(id) {
    const apiCall = new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000); // 0–3s
        setTimeout(() => {
            resolve({
                id,
                name: `User ${id}`,
            });
        }, delay);
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`Timeout fetching user ${id}`)), 2000);
    });
    return Promise.race([apiCall, timeout]);
}
async function fetchUsers1(ids) {
    const promises = ids.map((id) => fetchUser1(id));
    return Promise.all(promises);
}
async function main1() {
    try {
        console.log("Fetching users...");
        const users = await fetchUsers1([1, 2, 3]);
        console.log("Result:", users);
    }
    catch (err) {
        console.error("Error:", err.message);
    }
}
main1();
