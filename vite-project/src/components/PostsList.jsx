import Post from "./Post";
import NewPost from "./NewPost"
import styles from './PostsList.module.css'
export default function PostsList() {
  return (
    <>
      <NewPost/>
      <ul className={styles.posts}>
      <Post author="Tory" body="Checkout the full course" />
      <Post author="Nick" body="Just learn react.js" />
      <Post author="Dean" body="Learn Next.js" />
    </ul>
    </>
    
  );
}
