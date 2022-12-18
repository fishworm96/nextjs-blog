export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileNames) => {
    return {
      params: {
        id: fileNames.replace(/\.md$/, "")
      }
    }
  })
}