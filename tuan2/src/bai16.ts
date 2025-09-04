async function fetchUser(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("User data"), 1000)
  );
}

async function fetchPosts(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Post 1", "Post 2"]), 2000)
  );
}

async function fetchComments(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1500)
  );
}

async function loadData() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments(),
    ]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

loadData();