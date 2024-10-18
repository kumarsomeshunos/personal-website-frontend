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
            <select className={styles.select} name="options">
              <option value="">Select Theme</option>
              <option value="option1">Light</option>
              <option value="option2">Dark</option>
              <option value="option3">Blue</option>
              <option value="option4">Green</option>
              <option value="option5">Red</option>
              <option value="option6">Purple</option>
              <option value="option7">Orange</option>
              <option value="option8">Pink</option>
              <option value="option9">Brown</option>
              <option value="option10">Gray</option>
            </select>
          </ul>
        </section>
      </SectionWrapper>
    </nav>
  );
}
