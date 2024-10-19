import HeroContact from "@/components/Contact/HeroContact/HeroContact";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";

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

export default function Contact() {
  return (
    <>
    <Navbar
        // backgroundMain={"linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"}
        name={name}
        version={version}
        navbarLinks={navbarLinks}
        colorMain={"black"}
backgroundWallpaper={"white"}
      />
      <HeroContact 
      // backgroundMain={"linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"} 
      colorMain={"black"}
      backgroundWallpaper={"white"}/>
      <Footer 
      colorMain={"black"}
      backgroundWallpaper={"white"} />
    </>
  );
}