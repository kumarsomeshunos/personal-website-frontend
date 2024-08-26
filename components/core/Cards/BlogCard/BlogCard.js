import styles from "./BlogCard.module.css";

export default function BlogCard({ number, data }) {
  return (
    <article className={styles.article}>
      <div className={styles.card}>
        {number} {data}
      </div>
    </article>
  );
}
