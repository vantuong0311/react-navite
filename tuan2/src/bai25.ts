async function downloadFile(fileName: string): Promise<void> {
  console.log(`Starting download: ${fileName}...`);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Download complete: ${fileName}`);
      resolve();
    }, 3000);
  });
}

async function main4() {
  await downloadFile("example.zip");
}

main4();