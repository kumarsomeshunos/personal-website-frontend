import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Updates from "@/components/Updates/Updates";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import { navbarData, footerData } from "@/data";

export default function ProjectsPage() {
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
      <Updates
        colorMain={"black"}
        backgroundWallpaper={"white"}
        // backgroundMain={"#000"}
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
      <End backgroundWallpaper={"white"} colorMain={"black"} />
    </>
  );
}
