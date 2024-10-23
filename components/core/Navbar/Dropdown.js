"use client";

import styles from "./Dropdown.module.css";
import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={toggleNavbar}
      className={`${styles.main} ${isOpen ? styles.open : ""}`}
    >
      <li className={styles.li}>
        Theme{" "}
        <img src="https://miscellaneous.cdn.prismic.io/miscellaneous/Zxiad4F3NbkBX4UW_dropdown-svgrepo-com.svg" />
      </li>
      <ul className={styles.ul}>
        <li className={styles.themeSelect}>
          <a href="/">PureWhite</a>
        </li>
        <li className={styles.li}>
          <a href="/">AllDark</a>
        </li>
        <li className={styles.li}>
          <a href="/">GlossyRed</a>
        </li>
        <li className={styles.li}>
          <a href="/">OceanBlue</a>
        </li>
        <li className={styles.li}>
          <a href="/">ForestGreen</a>
        </li>
        <li className={styles.li}>
          <a href="/">SunsetOrange</a>
        </li>
        <li className={styles.li}>
          <a href="/">RoyalPurple</a>
        </li>
        <li className={styles.li}>
          <a href="/">SteelGrey</a>
        </li>
        <li className={styles.li}>
          <a href="/">LemonYellow</a>
        </li>
        <li className={styles.li}>
          <a href="/">MidnightBlack</a>
        </li>
        <li className={styles.li}>
          <a href="/">SoftPink</a>
        </li>
        <li className={styles.li}>
          <a href="/">MysticTeal</a>
        </li>
        <li className={styles.li}>
          <a href="/">GoldenSand</a>
        </li>
      </ul>
    </div>
  );
}
