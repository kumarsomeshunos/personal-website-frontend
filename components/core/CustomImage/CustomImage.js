import Link from "next/link";
import styles from "./CustomImage.module.css";
import Image from "next/image";

export default function CustomImage({
  srcImage,
  srcMobile,
  altImage,
  widthImage,
  heightImage,
  layoutImage,
  objectFitImage,
  paddingSection,
  positionDiv,
  widthDiv,
  heightDiv,
  borderRadiusDiv,
  overflowDiv,
  boxShadowDiv,
  hrefLink,
  textLink,
  textParagraph,
}) {
  return (
    srcImage &&
    altImage &&
    widthImage &&
    heightImage && (
      <section
        style={{
          padding: paddingSection || "0",
        }}
      >
        <div
          style={{
            position: positionDiv || "relative",
            width: widthDiv || "100%",
            height: heightDiv || "auto",
            borderRadius: borderRadiusDiv || "0px",
            overflow: overflowDiv || "hidden",
            boxShadow: boxShadowDiv || "none",
          }}
        >
          {/* <Image
                    src={srcImage}
                    alt={altImage}
                    width={widthImage}
                    height={heightImage}
                    layout={layoutImage || "responsive"}
                    objectFit={objectFitImage || "cover"}
                /> */}
          <div className={styles.desktopImage}>
            <Image
              src={srcImage}
              alt={altImage}
              width={widthImage}
              height={heightImage}
              layout={layoutImage || "responsive"}
              objectFit={objectFitImage || "cover"}
            />
          </div>
          <div className={styles.mobileImage}>
            <Image
              src={srcMobile}
              alt={altImage}
              width={widthImage}
              height={heightImage}
              layout={layoutImage || "responsive"}
              objectFit={objectFitImage || "cover"}
            />
          </div>
        </div>
        {(textParagraph || (hrefLink && textLink)) && (
          <p className={styles.imageText}>
            {textParagraph || ""}{" "}
            {hrefLink && textLink && (
              <Link href={hrefLink}>[ {textLink} ]</Link>
            )}
          </p>
        )}
      </section>
    )
  );
}
