import SectionWrapper from "../Wrappers/SectionWrapper";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
}) {
  return (
    <footer className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <div className={styles.leftPortion}>
            <Image
              src={
                "https://images.prismic.io/miscellaneous/ZxO8t4F3NbkBXvEw_footer.webp?auto=format,compress"
              }
              width={200}
              height={200}
              alt="walli"
            />
          </div>
          <div className={styles.rightPortion}>
            <h2 className={styles.linkHeading}>Other Links</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.li}>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </section>
      </SectionWrapper>
    </footer>
  );
}
