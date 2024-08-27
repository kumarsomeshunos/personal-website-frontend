import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Blogs from "@/components/Home/Blogs/Blogs";

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
    key: "Currently",
    value: "/currently",
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
        backgroundWallpaper={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px) center / cover no-repeat fixed"
        }
        name={name}
        version={version}
        navbarLinks={navbarLinks}
      />
      <Blogs
        backgroundWallpaper={
          'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center'
        }
        colorMain={"yellow"}
        heading={"Blogs"}
        subheading={
          "This is the subheading you've been wating for years, right?"
        }
        backgroundImageName={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        }
        backgroundMain={"black"}
        filterWallpaper={"blur(50px)"}
      />
    </>
  );
}
