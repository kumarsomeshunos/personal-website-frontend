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
          <a href="/themes/purewhite">PureWhite</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/alldark">AllDark</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/glossyred">GlossyRed</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/oceanblue">OceanBlue</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/forestgreen">ForestGreen</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/sunsetorange">SunsetOrange</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/royalpurple">RoyalPurple</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/steelgrey">SteelGrey</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/lemonyellow">LemonYellow</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/midnightblack">MidnightBlack</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/softpink">SoftPink</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/misticteal">MysticTeal</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/goldensand">GoldenSand</a>
        </li>
      </ul>
    </div>
  );
}
