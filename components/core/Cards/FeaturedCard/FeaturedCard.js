import styles from "./FeaturedCard.module.css";
import MainButton from "../../Buttons/MainButton/MainButton";
import CustomImage from "../../CustomImage/CustomImage";

export default function FeaturedCard({
  imageSrc,
  imageSrcMobile,
  imageAlt,
  imageWidth,
  imageHeight,
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
  title,
  buttons,
}) {
  return (
    <article className={styles.main}>
      <div className={styles.wrapper}>
        <CustomImage
          srcImage={imageSrc}
          srcMobile={imageSrcMobile}
          altImage={imageAlt}
          widthImage={imageWidth}
          heightImage={imageHeight}
          layoutImage={layoutImage}
          objectFitImage={objectFitImage}
          paddingSection={paddingSection}
          positionDiv={positionDiv}
          widthDiv={widthDiv}
          heightDiv={heightDiv}
          borderRadiusDiv={borderRadiusDiv}
          overflowDiv={overflowDiv}
          boxShadowDiv={boxShadowDiv}
          hrefLink={hrefLink}
          textLink={textLink}
          textParagraph={textParagraph}
        />

        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.buttons}>
            {buttons.map((button, index) => {
              return (
                <MainButton
                  key={index}
                  href={button.value}
                  text={button.key}
                  margin={"1rem 0.5rem 0 0"}
                  marginHover={"1rem 0.5rem 0 0"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
