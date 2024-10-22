import Link from "next/link";
import MainButton from "../../Buttons/MainButton/MainButton";
import styles from "./NowCard.module.css";
import Image from "next/image";

// Change posterImage width and height depending on type of card (movie, song, book)

export default function NowCard({
  posterImage,
  posterImageAlt,
  posterImageWidth,
  posterImageHeight,
  nowTitle,
  songTitle,
  songArtist,
  songAlbum,
  description,
  buttonText,
  buttonLink,
  rNowTitle,
  rNowDescription,
  rNowButtonText,
  rNowButtonLink,
}) {
  return (
    <article className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.leftPortion}>
          <Image
            src={posterImage}
            width={posterImageWidth}
            height={posterImageHeight}
            alt={posterImageAlt}
          />
          <div className={styles.songInfo}>
            <h1 className={styles.title}>{nowTitle}</h1>
            <hr />
            <h2 className={styles.artistAndAlbum}>{songTitle}</h2>
            <h2 className={styles.artistAndAlbum}>
              {songArtist} &bull; {songAlbum}
            </h2>
            <p className={styles.mySpotify}>{description}</p>
            <MainButton
              href={buttonLink}
              text={buttonText}
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
          <h1 className={styles.title}>{rNowTitle}</h1>
          <hr />
          <p className={styles.mySpotify}>{rNowDescription}</p>
          <MainButton
            padding={"0.1rem 0.5rem"}
            paddingHover={"0.1rem 0.5rem"}
            background={"transparent"}
            backgroundHover={"black"}
            color={"black"}
            colorHover={"white"}
            border={"2px solid black"}
            borderHover={"2px solid white"}
            text={rNowButtonText}
            href={rNowButtonLink}
          />
        </div>
      </div>
    </article>
  );
}
