import styles from "./Navbar.module.css";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Link from "next/link";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Navbar({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  name,
  version,
  navbarLinks,
}) {
  return (
    <nav className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <span className={`${styles.logo} ${ubuntu.className}`}>
            <Link href={"/"}>{name || "Somesh Kumar"}</Link>
            <span className={styles.version}>{version || null}</span>
          </span>
          <ul className={styles.ul}>
            {navbarLinks.map((navbarLink, index) => {
              return (
                <li key={index} className={styles.li}>
                  <Link href={navbarLink.value}>{navbarLink.key}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      </SectionWrapper>
    </nav>
  );
}
