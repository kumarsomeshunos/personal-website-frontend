import styles from "./Blogs.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import BlogCard from "@/components/core/Cards/BlogCard/BlogCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default function Blogs({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
}) {
  return (
    <section className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <Heading
            heading={heading}
            subheading={subheading}
            backgroundImageName={backgroundImageName}
          />
          <MasonryCardHolder
            breakpointCols={{
              default: 2,
              1100: 2,
              700: 1,
            }}
          >
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <BlogCard
              number={1}
              data={"this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know.this is something you need to fkin know."}
            />
            <BlogCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
          </MasonryCardHolder>
          <div className={styles.buttons}>
            <MainButton text={"All Projects"} href={"/projects"} />
          </div>
        </section>
      </SectionWrapper>
    </section>
  );
}
