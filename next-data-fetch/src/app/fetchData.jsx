async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FetchData() {
  const posts = await getPosts();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {posts.slice(0, 5).map((post) => (
        <div key={post.id} className="border p-3 mb-2">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}