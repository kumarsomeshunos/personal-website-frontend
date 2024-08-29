import styles from "./Projects.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import ProjectCard from "@/components/core/Cards/ProjectCard/ProjectCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default function Projects({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
  projects,
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
              default: 3,
              1100: 2,
              700: 1,
            }}
          >
            <ProjectCard
              number={1}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={2}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={3}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={4}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={5}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={6}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={7}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={8}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know."
              }
            />
            <ProjectCard
              number={9}
              data={
                "this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know. this is something you need to fkin know.this is something you need to fkin know. this is something you need to fkin know."
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
