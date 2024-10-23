import HeroBlog from "@/components/Blogs/HeroBlog/HeroBlog";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import { navbarData, footerData, endData } from "@/data";

export default function BlogPage() {
  return (
    <>
      <Navbar
        backgroundMain={navbarData.backgroundMain}
        colorMain={navbarData.colorMain}
        backgroundWallpaper={navbarData.backgroundWallpaper}
        filterWallpaper={navbarData.filterWallpaper}
        name={navbarData.name}
        version={navbarData.version}
        navbarLinks={navbarData.navbarLinks}
      />
      <HeroBlog
        thumbnail={
          "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75"
        }
        tags={[{ key: "CSS" }, { key: "Web Design" }, { key: "Frontend" }]}
        postedOn={"2024-07-21T09:15:00Z"}
        colorMain={"black"}
        backgroundWallpaper={"white"}
      />
      <Footer
        backgroundMain={footerData.backgroundMain}
        colorMain={footerData.colorMain}
        backgroundWallpaper={footerData.backgroundWallpaper}
        filterWallpaper={footerData.filterWallpaper}
        footerImageSrc={footerData.footerImageSrc}
        footerImageAlt={footerData.footerImageAlt}
        footerImageWidth={footerData.footerImageWidth}
        footerImageHeight={footerData.footerImageHeight}
        footerLinksTitle={footerData.footerLinksTitle}
        footerLinks={footerData.footerLinks}
      />
      <End
        backgroundMain={endData.backgroundMain}
        colorMain={endData.colorMain}
        backgroundWallpaper={endData.backgroundWallpaper}
        filterWallpaper={endData.filterWallpaper}
      />
    </>
  );
}
