import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Blogs from "@/components/Home/Blogs/Blogs";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import { navbarData, blogsSectionData, footerData, featuredBlog } from "@/data";
import FeaturedBlog from "@/components/Blogs/FeaturedBlog/FeaturedBlog";

export default function BlogsPage() {
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
      <FeaturedBlog
        backgroundMain={featuredBlog.backgroundMain}
        colorMain={featuredBlog.colorMain}
        backgroundWallpaper={featuredBlog.backgroundWallpaper}
        filterWallpaper={featuredBlog.filterWallpaper}
        heading={featuredBlog.heading}
        subheading={featuredBlog.subheading}
        backgroundImageName={featuredBlog.backgroundImageName}
        blog={featuredBlog.blog}
      />
      <Blogs
        backgroundMain={blogsSectionData.backgroundMain}
        colorMain={blogsSectionData.colorMain}
        backgroundWallpaper={blogsSectionData.backgroundWallpaper}
        filterWallpaper={blogsSectionData.filterWallpaper}
        heading={blogsSectionData.heading}
        subheading={blogsSectionData.subheading}
        backgroundImageName={blogsSectionData.backgroundImageName}
        blogs={blogsSectionData.blogs}
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
