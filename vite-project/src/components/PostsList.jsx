import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostsList.module.css";

export default function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((p, index) => (
            <Post key={index} author={p.author} body={p.text} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
        </div>
      )}
    </>
  );
}
