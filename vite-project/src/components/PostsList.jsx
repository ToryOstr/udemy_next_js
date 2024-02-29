import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList({isPosting, onStopPosting}) {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Dean" body="Learn Next.js" />
      </ul>
    </>
  );
}
