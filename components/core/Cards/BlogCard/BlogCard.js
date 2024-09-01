import styles from "./BlogCard.module.css";
import MainButton from "../../Buttons/MainButton/MainButton";
import Image from "next/image";

export default function BlogCard({
  title,
  postedOn,
  tags,
  description,
  thumbnail,
  slug,
  background,
  border,
  boxShadow,
  color,
  borderRadius,
  textDecoration,
  transition,
  backgroundHover,
  borderHover,
  boxShadowHover,
  colorHover,
  borderRadiusHover,
  textDecorationHover,
  transitionHover,
}) {
  return (
    <article
      className={styles.main}
      style={{
        "--defalut-backgroundBlogCard": background,
        "--deafult-borderBlogCard": border,
        "--default-box-shadowBlogCard": boxShadow,
        "--default-colorBlogCard": color,
        "--default-borderRadiusBlogCard": borderRadius,
        "--default-textDecorationBlogCard": textDecoration,
        "--default-transitionBlogCard": transition,
        "--defalut-backgroundBlogCardHover": backgroundHover,
        "--deafult-borderBlogCardHover": borderHover,
        "--default-box-shadowBlogCardHover": boxShadowHover,
        "--default-colorBlogCardHover": colorHover,
        "--default-borderRadiusBlogCardHover": borderRadiusHover,
        "--default-textDecorationBlogCardHover": textDecorationHover,
        "--default-transitionBlogCardHover": transitionHover,
      }}
    >
      {thumbnail && (
        <div className={styles.image}>
          <Image
            src={thumbnail}
            width={200}
            height={200}
            alt="Blog Thumbnail"
          />
        </div>
      )}
      <div className={styles.divInfo}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {title && <hr />}
        {postedOn && (
          <div className={styles.divTime}>
            <time className={styles.time} dateTime={postedOn.substring(0, 10)}>
              {postedOn.substring(0, 10)}
            </time>
          </div>
        )}
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, index) => {
              return (
                <span className={styles.tag} key={index}>
                  {tag.key}
                </span>
              );
            })}
          </div>
        )}
        {description && <p className={styles.description}>{description}</p>}
        {slug && (
          <div className={styles.buttons}>
            <MainButton
              href={`blog/${slug}`}
              text={"Read More"}
              padding={"0.3rem 0.3rem"}
              paddingHover={"0.3rem 0.3rem"}
              borderRadius={"0.25rem"}
              borderRadiusHover={"0.25rem"}
              margin={"0.5rem 0.5rem 0 0"}
              marginHover={"0.5rem 0.5rem 0 0"}
              border={"none"}
              borderHover={"none"}
            />
          </div>
        )}
      </div>
    </article>
  );
}
