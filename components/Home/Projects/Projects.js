import styles from "./Projects.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import ProjectCard from "@/components/core/Cards/ProjectCard/ProjectCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import FeaturedCard from "@/components/core/Cards/FeaturedCard/FeaturedCard";

const dummyProps = {
  title: "Amazing Project",
  postedOn: "2024-08-31T12:00:00Z",
  status: "Completed",
  subtitle: "A Revolutionary Approach to AI",
  description:
    "This project explores the boundaries of artificial intelligence, pushing the limits of what AI can achieve in various fields, including healthcare, finance, and technology.",
  links: [
    { key: "GitHub", value: "https://github.com/your-repo" },
    { key: "Live Demo", value: "https://your-demo-site.com" },
  ],
  slug: "amazing-project",
  details: true,
  backgroundHover: "pink",
  // border,
  // boxShadow,
  // color,
  // borderRadius,
  // textDecoration,
  // transition,
  // backgroundHover,
  // borderHover,
  // boxShadowHover,
  // colorHover,
  // borderRadiusHover,
  // textDecorationHover,
  // transitionHover,
};

const dummyProps1 = {
  title: "Eco-Friendly Initiative",
  postedOn: "2024-07-15T09:00:00Z",
  status: "In Progress",
  subtitle: "Innovative Solutions for a Greener Tomorrow",
  description:
    "This project focuses on developing sustainable technologies that reduce environmental impact and promote green living.",
  links: [
    { key: "Research Paper", value: "https://example.com/research-paper" },
    { key: "Join Us", value: "https://example.com/join-us" },
  ],
  src: "https://via.placeholder.com/400x200",
  slug: "eco-friendly-initiative",
  details: true,
  backgroundHover: "lightgreen",
};

const dummyProps2 = {
  title: "Tech Conference 2024",
  postedOn: "2024-09-10T14:30:00Z",
  status: "Upcoming",
  description:
    "An exciting conference bringing together industry leaders and innovators to discuss the latest in technology, AI, and cybersecurity.",
  links: [
    { key: "Register", value: "https://techconf2024.com/register" },
    { key: "Agenda", value: "https://techconf2024.com/agenda" },
  ],
  src: "https://via.placeholder.com/400x200",
  slug: "tech-conference-2024",
  details: false,
  backgroundHover: "orange",
};

const dummyProps3 = {
  title: "Fitness Tracker App",
  postedOn: "2024-06-01T10:00:00Z",
  status: "Completed",
  subtitle: "Your Personal Health Companion",
  description:
    "A mobile app that helps you track your workouts, monitor your diet, and achieve your fitness goals with personalized plans and tips.",
  links: [
    { key: "App Store", value: "https://apps.apple.com/fitness-tracker" },
    { key: "Google Play", value: "https://play.google.com/fitness-tracker" },
  ],
  src: "https://via.placeholder.com/400x200",
  slug: "fitness-tracker-app",
  details: true,
  backgroundHover: "lightblue",
};

const dummyProps4 = {
  title: "AI in Education",
  postedOn: "2024-04-20T08:00:00Z",
  status: "Completed",
  description:
    "This project explores the application of AI in creating personalized learning experiences, improving engagement, and optimizing curriculum delivery.",
  slug: "ai-in-education",
  details: false,
  backgroundHover: "aqua",
};

const dummyProps5 = {
  title: "Urban Farming",
  postedOn: "2024-02-15T11:45:00Z",
  status: "Ongoing",
  description:
    "An innovative project aimed at transforming unused urban spaces into productive farming areas, promoting local food production and reducing carbon footprint.",
  src: "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75",
  slug: "urban-farming-revolution",
  details: false,
  backgroundHover: "lightcoral",
};

export default function Projects({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
  projects,
}) {
  return (
    <section className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
        <Heading
            heading={"Featured Project"}
            backgroundImageName={backgroundImageName}
          />
        <FeaturedCard />
          <Heading
            heading={heading}
            subheading={subheading}
            backgroundImageName={backgroundImageName}
          />
          <MasonryCardHolder
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1,
            }}
          >
            <ProjectCard {...dummyProps} />
            <ProjectCard {...dummyProps1} />
            <ProjectCard {...dummyProps2} />
            <ProjectCard {...dummyProps3} />
            <ProjectCard {...dummyProps4} />
            <ProjectCard {...dummyProps5} />
          </MasonryCardHolder>
          <div className={styles.buttons}>
            <MainButton text={"All Projects"} href={"/projects"} />
          </div>
        </section>
      </SectionWrapper>
    </section>
  );
}
