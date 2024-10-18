import styles from "./Now.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import NowCard from "@/components/core/Cards/NowCard/NowCard";

export default function Now({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
  posterImage
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
          <NowCard posterImage={posterImage} />
        </section>
      </SectionWrapper>
    </section>
  );
}
