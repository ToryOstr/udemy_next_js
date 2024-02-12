import Post from "./Post";
import styles from './PostsList.module.css'
export default function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="Tory" body="Checkout the full course" />
      <Post author="Nick" body="Just learn react.js" />
      <Post author="Dean" body="Learn Next.js" />
    </ul>
  );
}
