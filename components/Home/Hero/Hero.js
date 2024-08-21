import styles from "./Hero.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
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
  backgroundImageName,
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
                backgroundImage:
                  backgroundImageName || "var(--default-backgroundImageName)",
              }}
            >
              {name || "Somesh Kumar"}
            </h1>
            {introductionMD && <InsertHtml externalHtml={introductionMD} />}
            {heroButtons && (
              <div className={styles.buttons}>
                {heroButtons.map((heroButton, index) => {
                  return (
                    <MainButton
                      key={index}
                      text={heroButton.key}
                      href={heroButton.value}
                    />
                  );
                })}
              </div>
            )}
          </section>
          <section className={styles.rightPortion}>
            {displayProfile && (
              <Image
                src={displayProfile}
                width={800}
                height={800}
                alt={displayProfileAlt || "Display Profile Image"}
                className={styles.displayProfile}
              />
            )}
          </section>
        </section>
      </SectionWrapper>
    </header>
  );
}
