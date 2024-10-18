import MainButton from "../../Buttons/MainButton/MainButton";
import styles from "./NowCard.module.css";
import Image from "next/image";

export default function NowCard({posterImage}) {
  return (
    <article className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.leftPortion}>
          <Image
            src={posterImage}
            width={400}
            height={400}
            alt="Now Card Image"
          />
          <div className={styles.songInfo}>
            <h1 className={styles.title}>Close To You</h1>
            <hr />
            <h2 className={styles.artistAndAlbum}>
              Gracie Abrams &bull; The Secret of Us
            </h2>
            <p className={styles.mySpotify}>
              Well, you can checkout my playlist on <a href="/">Spotify</a>
            </p>
            <MainButton
              href={"/"}
              text={"Listen this song on Spotify"}
              background={"transparent"}
              border={"2px solid green"}
              padding={"0.1rem 0.5rem"}
              color={"black"}
              borderRadius={"5px"}
              backgroundHover={"green"}
              borderHover={"2px solid black"}
              paddingHover={"0.1rem 0.5rem"}
              colorHover={"white"}
              borderRadiusHover={"5px"}
            />
          </div>
        </div>
        <div className={styles.rightPortion}>
          <h1 className={styles.title}>Other things I'm upto</h1>
          <hr />
          <h2 className={styles.artistAndAlbum}>
            Gracie Abrams &bull; The Secret of Us
          </h2>
          <p className={styles.mySpotify}>
            Well, you can checkout my playlist on <a href="/">Spotify</a>
          </p>
        </div>
      </div>
    </article>
  );
}
