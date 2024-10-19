import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Blogs from "@/components/Home/Blogs/Blogs";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";

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

export default function BlogsPage() {
  return (
    <>
      <Navbar
        // backgroundWallpaper={
        //   "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px) center / cover no-repeat fixed"
        // }
        // backgroundMain={"linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"}
        name={name}
        version={version}
        navbarLinks={navbarLinks}
        colorMain={"black"}
backgroundWallpaper={"white"}
      />
      <Blogs
        // backgroundWallpaper={
        //   'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center'
        // }
        // colorMain={"yellow"}
        colorMain={"black"}
backgroundWallpaper={"white"}
        heading={"Blogs"}
        subheading={
          "This is the subheading you've been wating for years, right?"
        }
        // backgroundImageName={
        //   "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        // }
        // backgroundMain={"black"}
        // filterWallpaper={"blur(50px)"}
      />
      <Footer backgroundWallpaper={"white"} colorMain={"black"} />
      <End backgroundWallpaper={"white"} colorMain={"black"} />
    </>
  );
}
