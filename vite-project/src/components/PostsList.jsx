import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState, useEffect } from "react";

export default function PostsList({isPosting, onStopPosting}) {

  const [posts, setPosts] = useState([]);
  const [isLoadedData, setIsLoadedData] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoadedData(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsLoadedData(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': "application/json"
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoadedData && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((p, index) => (
            <Post key={index} author={p.author} body={p.text} />
          ))}
        </ul>
      )}
      {!isLoadedData && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
        </div>
      )}
      {isLoadedData && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}
