interface PostData {
  title: string;
  body: string;
  userId: number;
}

interface PostResponse extends PostData {
  id: number; 
}


async function postData(data: PostData): Promise<PostResponse> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result: PostResponse = await response.json();
  return result;
}

async function main45() {
  try {
    const newPost = await postData({
      title: "Hello TypeScript",
      body: "This is a test POST request",
      userId: 123,
    });

    console.log("Post created:", newPost);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

main45();