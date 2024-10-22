import Footer from "@/components/core/Footer/Footer";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Now from "@/components/Home/Now/Now";
import End from "@/components/core/Footer/End";
import {
  navbarData,
  nowSectionData,
  footerData,
  nowMovieData,
  nowBookData,
} from "@/data";

export default function NowPage() {
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
      <Now
        backgroundMain={nowSectionData.backgroundMain}
        colorMain={nowSectionData.colorMain}
        backgroundWallpaper={nowSectionData.backgroundWallpaper}
        filterWallpaper={nowSectionData.filterWallpaper}
        heading={nowSectionData.heading}
        subheading={nowSectionData.subheading}
        backgroundImageName={nowSectionData.backgroundImageName}
        now={nowSectionData.now}
      />
      <Now
        backgroundMain={nowMovieData.backgroundMain}
        colorMain={nowMovieData.colorMain}
        backgroundWallpaper={nowMovieData.backgroundWallpaper}
        filterWallpaper={nowMovieData.filterWallpaper}
        heading={nowMovieData.heading}
        subheading={nowMovieData.subheading}
        backgroundImageName={nowMovieData.backgroundImageName}
        now={nowMovieData.now}
      />
      <Now
        backgroundMain={nowBookData.backgroundMain}
        colorMain={nowBookData.colorMain}
        backgroundWallpaper={nowBookData.backgroundWallpaper}
        filterWallpaper={nowBookData.filterWallpaper}
        heading={nowBookData.heading}
        subheading={nowBookData.subheading}
        backgroundImageName={nowBookData.backgroundImageName}
        now={nowBookData.now}
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
