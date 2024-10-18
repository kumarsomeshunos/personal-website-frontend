import HeroProject from "@/components/Projects/HeroProject/HeroProject";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";

const name = "Somesh Kumar";
const version = "MK-VII";
const navbarLinks = [
  {
    key: "Home",
    value: "/",
  },
  {
    key: "Projects",
    value: "/projects",
  },
  {
    key: "Blogs",
    value: "/blogs",
  },
  {
    key: "Now",
    value: "/now",
  },
  {
    key: "Contact",
    value: "/contact",
  },
  {
    key: "Updates",
    value: "/updates",
  },
];

export default function ProjectPage() {
  return (
    <>
      <Navbar
        backgroundWallpaper={
          "linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"
        }
        name={name}
        version={version}
        navbarLinks={navbarLinks}
      />
      <HeroProject />
    </>
  );
}
