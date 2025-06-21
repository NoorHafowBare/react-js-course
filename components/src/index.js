import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

const endPoint = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const response = await fetch(endPoint);
      const data = await response.json();
      setPost(data);
      setLoading(false);
    };
    getPosts();

    // fetch(endPoint)
    //   .then((Response) => Response.json())
    //   .then((da
    // ta) => setPost(data));
  }, []);
  if (loading) return <h1>loading please wait...</h1>;

  return (
    <>
      <h1>All Posts</h1>
      {post.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
