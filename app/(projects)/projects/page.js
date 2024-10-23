import styles from "./page.module.css";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import Navbar from "@/components/core/Navbar/Navbar";
import Projects from "@/components/Home/Projects/Projects";
import {
  navbarData,
  projectsSectionData,
  footerData,
  endData,
  featuredProject,
} from "@/data";
import FeaturedProjecet from "@/components/Projects/FeaturedProject/FeaturedProject";

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
      <FeaturedProjecet
        backgroundMain={featuredProject.backgroundMain}
        colorMain={featuredProject.colorMain}
        backgroundWallpaper={featuredProject.backgroundWallpaper}
        filterWallpaper={featuredProject.filterWallpaper}
        heading={featuredProject.heading}
        subheading={featuredProject.subheading}
        backgroundImageName={featuredProject.backgroundImageName}
        project={featuredProject.project}
      />
      <Projects
        backgroundMain={projectsSectionData.backgroundMain}
        colorMain={projectsSectionData.colorMain}
        backgroundWallpaper={projectsSectionData.backgroundWallpaper}
        filterWallpaper={projectsSectionData.filterWallpaper}
        heading={projectsSectionData.heading}
        subheading={projectsSectionData.subheading}
        backgroundImageName={projectsSectionData.backgroundImageName}
        projects={projectsSectionData.projects}
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
