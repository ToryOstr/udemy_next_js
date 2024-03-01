import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({onCancel, onAddPost}) {
    const [enteredtext, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function textChangeHandler() {
    setEnteredText(event.target.value);
  }

  function authorChangeHandler() {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      text: enteredtext,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={textChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
