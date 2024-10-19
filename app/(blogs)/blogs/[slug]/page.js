import HeroBlog from "@/components/Blogs/HeroBlog/HeroBlog";
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

export default function BlogPage() {
  return (
    <>
      <Navbar
        // backgroundWallpaper={
        //   "linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"
        // }
        colorMain={"black"}
backgroundWallpaper={"white"}
        name={name}
        version={version}
        navbarLinks={navbarLinks}
      />
        <HeroBlog thumbnail={"https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75"} tags={[{ key: "CSS" }, { key: "Web Design" }, { key: "Frontend" }]} postedOn={"2024-07-21T09:15:00Z"} colorMain={"black"}
backgroundWallpaper={"white"} />
    </>
  );
}
