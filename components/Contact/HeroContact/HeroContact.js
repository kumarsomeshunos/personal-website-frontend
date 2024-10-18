import styles from "./HeroContact.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import Heading from "@/components/core/Heading/Heading";
import Image from "next/image";

export default function HeroContact({
    backgroundMain,
    colorMain,
    backgroundWallpaper,
    filterWallpaper,
}) {
    return (
        <section className={styles.main}>
            <SectionWrapper
                backgroundMain={backgroundMain}
                colorMain={colorMain}
                backgroundWallpaper={backgroundWallpaper}
                filterWallpaper={filterWallpaper}
            >
                <Heading heading={"Contact"} />
                <section className={styles.wrapper}>
                    <section className={styles.leftPortion}>
                        <form action="">
                            <div className={styles.formGroup}>
                                <input className={styles.formInput} type="text" placeholder="Name" /><br />
                            </div>
                            <div className={styles.formGroup}>
                                <input className={styles.formInput} type="email" placeholder="Email" /><br />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea className={styles.fromTextArea} placeholder="Message..." /><br />
                            </div>
                            {/* <button type="submit">Send</button> */}
                            <MainButton
                                text={"Send Message"}
                                href={"/contact"}
                                borderRadius={"1rem"}
                                borderRadiusHover={"1rem"}
                            />
                        </form>
                    </section>
                    <section className={styles.rightPortion}>
                        {/* <Heading heading={"Contact"} /> */}
                        <p>You can contact me at my email address: <a href="mailto:contact@example.com">contact@example.com</a> and my phone number: <a href="tel:+1234567890">+1234567890</a>. The username I use on most of the social media platforms is <a href="https://www.instagram.com/the.mr.x/">the.mr.x</a>. Below is the link of some of my social media profiles.</p>
                        <div className={styles.socialMediaLinks}>
                            <a href="https://www.instagram.com/the.mr.x/">
                                <Image src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png" alt="Instagram" width={96} height={96} />
                            </a>
                            <a href="https://www.linkedin.com/in/the-mr-x/">
                                <Image src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn" width={96} height={96} />
                            </a>
                            <a href="https://www.instagram.com/the.mr.x/">
                                <Image src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png" alt="Instagram" width={96} height={96} />
                            </a>
                            <a href="https://www.linkedin.com/in/the-mr-x/">
                                <Image src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn" width={96} height={96} />
                            </a>
                            <a href="https://www.instagram.com/the.mr.x/">
                                <Image src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png" alt="Instagram" width={96} height={96} />
                            </a>
                            <a href="https://www.linkedin.com/in/the-mr-x/">
                                <Image src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn" width={96} height={96} />
                            </a>
                            <a href="https://www.instagram.com/the.mr.x/">
                                <Image src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png" alt="Instagram" width={96} height={96} />
                            </a>
                            <a href="https://www.linkedin.com/in/the-mr-x/">
                                <Image src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn" width={96} height={96} />
                            </a>
                        </div>
                    </section>
                </section>
            </SectionWrapper>
        </section>
    );
}