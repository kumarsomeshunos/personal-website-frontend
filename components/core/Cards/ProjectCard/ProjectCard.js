import styles from "./ProjectCard.module.css";

export default function ProjectCard({ number, data }) {
  return (
    <article className={styles.article}>
      <div className={styles.card}>
        {number} {data}
      </div>
    </article>
  );
}
