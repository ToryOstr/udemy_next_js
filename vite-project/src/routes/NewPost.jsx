import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

export default function NewPost({onAddPost }) {
  const [enteredtext, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      text: enteredtext,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={textChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={styles.actions}>
          <Link to='..' type="button" >
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
