import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost"
import styles from './PostsList.module.css'

export default function PostsList() {
  const [enteredtext, setEnteredText] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function textChangeHandler() {
    setEnteredText(event.target.value);
  }

  function authorChangeHandler() {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      <NewPost onTextChange={textChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredtext} />
        <Post author="Nick" body="Just learn react.js" />
        <Post author="Dean" body="Learn Next.js" />
      </ul>
    </>
  );
}
