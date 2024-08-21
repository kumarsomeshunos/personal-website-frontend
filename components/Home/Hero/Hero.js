import styles from "./Hero.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Hero({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  greetings,
  name,
  introductionMD,
  heroButtons,
  displayProfile,
  displayProfileAlt,
}) {
  return (
    <header className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <section className={styles.leftPortion}>
            <p className={styles.greetings}>{greetings || "Hello, I'm"}</p>
            <h1
              className={`${styles.name} ${ubuntu.className}`}
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(34,122,255,1) 0%, rgba(40,201,250,1) 38%, rgba(14,137,219,1) 75%)`,
              }}
            >
              {name || "Somesh Kumar"}
            </h1>
            {introductionMD && <InsertHtml externalHtml={introductionMD} />}
            {/* <div className={styles.buttons}>
              {heroButtons.map((heroButton, index) => {
                return (
                  <MainButton
                    key={index}
                    text={heroButton.key}
                    href={heroButton.value}
                    backgroundColor={"#1A9FEA"}
                  />
                );
              })}
            </div> */}
          </section>
          <section className={styles.rightPortion}>
            {displayProfile && <Image
              src={displayProfile}
              width={800}
              height={800}
              alt={displayProfileAlt || "Display Profile Image"}
              className={styles.displayProfile}
            />}
          </section>
        </section>
      </SectionWrapper>
    </header>
  );
}
