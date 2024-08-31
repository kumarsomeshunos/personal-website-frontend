import styles from "./Blogs.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import BlogCard from "@/components/core/Cards/BlogCard/BlogCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

const dummyData = {
  title: "Understanding React Hooks: A Comprehensive Guide",
  postedOn: "2024-08-15T12:00:00Z",
  tags: [
    { key: "React" },
    { key: "JavaScript" },
    { key: "Web Development" },
  ],
  description:
    "This blog post provides a deep dive into React hooks, explaining how they work, why they're useful, and how to use them effectively in your React applications.",
  thumbnail: "https://via.placeholder.com/200", // Placeholder image URL
  slug: "understanding-react-hooks",
};

const blog1 = {
  title: "Exploring Next.js: The Future of Server-Side Rendering",
  postedOn: "2024-09-01T10:30:00Z",
  tags: [
    { key: "Next.js" },
    { key: "SSR" },
    { key: "Performance" }
  ],
  description:
    "An in-depth analysis of Next.js and its advantages for server-side rendering, covering features, performance benefits, and practical use cases.",
  slug: "exploring-nextjs-ssr",
};

const blog2 = {
  title: "10 CSS Tricks Every Developer Should Know",
  postedOn: "2024-07-21T09:15:00Z",
  tags: [
    { key: "CSS" },
    { key: "Web Design" },
    { key: "Frontend" }
  ],
  description:
    "This post shares ten essential CSS tricks that can enhance the styling and responsiveness of your web applications.",
};

const blog3 = {
  title: "A Beginner’s Guide to TypeScript",
  postedOn: "2024-06-30T15:45:00Z",
  tags: [
    { key: "TypeScript" },
    { key: "JavaScript" },
    { key: "Programming" }
  ],
  description:
    "Learn the basics of TypeScript, how it improves JavaScript development, and why you should consider using it in your next project.",
  thumbnail: "https://via.placeholder.com/200",
  slug: "beginners-guide-typescript",
};

const blog4 = {
  title: "Building Scalable Microservices with Node.js",
  postedOn: "2024-08-05T08:00:00Z",
  description:
    "Discover how to design and build scalable microservices architecture using Node.js, including best practices and common pitfalls.",
  thumbnail: "https://via.placeholder.com/200",
  slug: "scalable-microservices-nodejs",
};

const blog5 = {
  title: "How to Use Tailwind CSS for Rapid UI Development",
  postedOn: "2024-08-28T13:20:00Z",
  tags: [
    { key: "Tailwind CSS" },
    { key: "CSS Framework" },
    { key: "UI/UX" }
  ],
  description:
    "This article covers the basics of Tailwind CSS, a utility-first CSS framework, and how it can speed up your UI development process.",
  thumbnail: "https://via.placeholder.com/200",
  slug: "tailwind-css-rapid-development",
};

export default function Blogs({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
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
            heading={heading}
            subheading={subheading}
            backgroundImageName={backgroundImageName}
          />
          <MasonryCardHolder
            breakpointCols={{
              default: 2,
              1100: 2,
              1000: 1,
            }}
          >
            <BlogCard {...dummyData} />
            <BlogCard {...blog1} />
            <BlogCard {...blog2} />
            <BlogCard {...blog3} />
            <BlogCard {...blog4} />
            <BlogCard {...blog5} />
          </MasonryCardHolder>
          <div className={styles.buttons}>
            <MainButton text={"All Projects"} href={"/projects"} />
          </div>
        </section>
      </SectionWrapper>
    </section>
  );
}
