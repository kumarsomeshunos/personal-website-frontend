import styles from "./GlobalWrapper.module.css";

export default function GlobalWrapper({
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
        background: backgroundMain || "var(--default-backgroundMain)",
        color: colorMain || "var(--default-colorMain)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            a {
              border-bottom: ${"var(--default-link-border-bottom)"};
            }
            a::after {
              background-color: ${"var(--default-link-background-color)"};
            }
          `,
        }}
      />
      <div
        className={styles.wallpaper}
        style={{
          background:
            backgroundWallpaper || "var(--default-backgroundWallpaper)",
          filter: filterWallpaper || "var(--default-filterWallpaper)",
        }}
      ></div>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
