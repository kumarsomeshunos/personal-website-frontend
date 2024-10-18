import Image from "next/image";
import styles from "./FeaturedCard.module.css";
import MainButton from "../../Buttons/MainButton/MainButton";
import CustomImage from "../../CustomImage/CustomImage";

export default function FeaturedCard() {
  return (
    <article className={styles.main}>
      <div className={styles.wrapper}>
        <CustomImage
          srcImage={
            "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75"
          }
          srcMobile={
            "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png"
          }
          altImage={"temp image"}
          widthImage={1000}
          heightImage={400}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>Project - Smile</h2>
          <div className={styles.buttons}>
            <MainButton
              href={"/"}
              text={"Details"}
              margin={"0.25rem 0.5rem 0 0"}
              marginHover={"0.25rem 0.5rem 0 0"}
            />
            <MainButton
              href={"/"}
              text={"Watch Video"}
              margin={"0.25rem 0 0 0.5rem"}
              marginHover={"0.25rem 0 0 0.5rem"}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
