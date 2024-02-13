import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

export default function PostsList({isPosting, onStopPosting}) {

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Dean" body="Learn Next.js" />
      </ul>
    </>
  );
}
