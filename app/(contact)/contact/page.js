import HeroContact from "@/components/Contact/HeroContact/HeroContact";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import { navbarData, footerData, endData, heroContactData } from "@/data";

export default function Contact() {
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
      <HeroContact
        backgroundMain={heroContactData.backgroundMain}
        colorMain={heroContactData.colorMain}
        backgroundWallpaper={heroContactData.backgroundWallpaper}
        filterWallpaper={heroContactData.filterWallpaper}
        heading={heroContactData.heading}
        subheading={heroContactData.subheading}
        backgroundImageName={heroContactData.backgroundImageName}
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
