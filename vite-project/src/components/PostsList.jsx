import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

export default function PostsList({isPosting, onStopPosting}) {
  const [enteredtext, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function textChangeHandler() {
    setEnteredText(event.target.value);
  }

  function authorChangeHandler() {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onTextChange={textChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredtext} />
        <Post author="Nick" body="Just learn react.js" />
        <Post author="Dean" body="Learn Next.js" />
      </ul>
    </>
  );
}
