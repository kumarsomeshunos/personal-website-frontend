import FeaturedCard from "@/components/core/Cards/FeaturedCard/FeaturedCard";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Projects from "@/components/Home/Projects/Projects";

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

export default function ProjectsPage() {
    return (
        <>
        <Navbar
        // backgroundWallpaper={
        //   "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px) center / cover no-repeat fixed"
        // }
        backgroundMain={"linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"}
        name={name}
        version={version}
        navbarLinks={navbarLinks}
      />
      <Projects
        // backgroundWallpaper={
        //   'lightblue url("https://images6.alphacoders.com/132/1323881.png") no-repeat fixed center'
        // }
        colorMain={"white"}
        heading={"Projects"}
        subheading={
          "This is the subheading you've been wating for years, right?"
        }
        backgroundImageName={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        }
        // backgroundMain={"green"}
        // filterWallpaper={"blur(50px)"}
      />
        </>
    );
}