import styles from "./ProjectCard.module.css";
import MainButton from "../../Buttons/MainButton/MainButton";
import Image from "next/image";

export default function ProjectCard({
  title,
  postedOn,
  status,
  subtitle,
  description,
  links,
  src,
  slug,
  details,
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
        "--defalut-backgroundProjectCard": background,
        "--deafult-borderProjectCard": border,
        "--default-box-shadowProjectCard": boxShadow,
        "--default-colorProjectCard": color,
        "--default-borderRadiusProjectCard": borderRadius,
        "--default-textDecorationProjectCard": textDecoration,
        "--default-transitionProjectCard": transition,
        "--defalut-backgroundProjectCardHover": backgroundHover,
        "--deafult-borderProjectCardHover": borderHover,
        "--default-box-shadowProjectCardHover": boxShadowHover,
        "--default-colorProjectCardHover": colorHover,
        "--default-borderRadiusProjectCardHover": borderRadiusHover,
        "--default-textDecorationProjectCardHover": textDecorationHover,
        "--default-transitionProjectCardHover": transitionHover,
      }}
    >
      <div className={styles.wrapper}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {title && <hr />}
        {(postedOn || status) && (
          <div className={styles.timeAndStatus}>
            {postedOn && (
              <time
                className={styles.time}
                dateTime={postedOn.substring(0, 10)}
              >
                {postedOn.substring(0, 10)}
              </time>
            )}
            {status && status.toLowerCase() == "completed" ? (
              <span className={styles.statusGreen}>{status}</span>
            ) : (
              <span className={styles.statusOrange}>{status}</span>
            )}
          </div>
        )}
        {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
        {description && <p className={styles.description}>{description}</p>}
        {(links || details) && (
          <div className={styles.buttons}>
            {links &&
              links.map((link, index) => {
                return (
                  <MainButton
                    key={index}
                    text={link.key}
                    href={link.value}
                    padding={"0.1rem 0.3rem"}
                    paddingHover={"0.1rem 0.3rem"}
                    borderRadius={"0.25rem"}
                    borderRadiusHover={"0.25rem"}
                    margin={"0.5rem 0.5rem 0 0"}
                    marginHover={"0.5rem 0.5rem 0 0"}
                    border={"none"}
                    borderHover={"none"}
                  />
                );
              })}
            {details && (
              <MainButton
                key={99}
                text={"Read More"}
                href={`project/${slug}`}
                padding={"0.1rem 0.3rem"}
                paddingHover={"0.1rem 0.3rem"}
                borderRadius={"0.25rem"}
                borderRadiusHover={"0.25rem"}
                margin={"0.5rem 0.5rem 0 0"}
                marginHover={"0.5rem 0.5rem 0 0"}
                border={"none"}
                borderHover={"none"}
              />
            )}
          </div>
        )}
        {src && (
          <div className={styles.image}>
            <Image src={src} width={400} height={200} alt="Project Thumbnail" />
          </div>
        )}
      </div>
    </article>
  );
}
