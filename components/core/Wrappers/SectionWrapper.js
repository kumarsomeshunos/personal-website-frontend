import styles from "./SectionWrapper.module.css";

export default function SectionWrapper({
  children,
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
}) {
  return (
    <section
      className={styles.main}
      style={{
        background: backgroundMain || undefined,
        color: colorMain || undefined,
      }}
    >
      <div
        className={styles.wallpaper}
        style={{
          background: backgroundWallpaper || undefined,
          filter: filterWallpaper || undefined,
        }}
      ></div>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
