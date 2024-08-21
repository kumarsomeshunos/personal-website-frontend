import Navbar from "@/components/core/Navbar/Navbar";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Hero from "@/components/Home/Hero/Hero";

const name = "Somesh Kumar";
const version = "MK-VII";
const navbarLinks = [
  {
    key: "Home",
    value: "/",
  },
  {
    key: "Projects",
    value: "/projects",
  },
  {
    key: "Blogs",
    value: "/blogs",
  },
  {
    key: "Currently",
    value: "/currently",
  },
  {
    key: "Contact",
    value: "/contact",
  },
  {
    key: "Updates",
    value: "/updates",
  },
];

// HERO PROPS
const greetings = "Hello, I'm";
// const name = "Somesh Kumar";
const introductionMD = `<p class="has-line-data" data-line-start="0" data-line-end="1">a third-year B.Tech student at <a href="https://jaipur.manipal.edu/muj.html">Manipal University | Jaipur</a>, majoring in Information Technology.</p>
        <p class="has-line-data" data-line-start="2" data-line-end="3">Passionate about tech and innovation, I specialize in the <a href="https://www.mongodb.com/mern-stack">MERN stack</a>. I work with languages like Java, JavaScript, C, and Python. Currently diving into the exciting world of <a href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a> 🤖, exploring its endless possibilities.</p>
        <p class="has-line-data" data-line-start="4" data-line-end="5">Beyond coding, I’m intrigued by the inner workings of <a href="https://en.wikipedia.org/wiki/Operating_system">operating systems</a> 💻 and love learning about them. Understanding how computers work and optimizing performance fuels my curiosity.</p>`;
const heroButtons = [
  { key: "Projects", value: "/projects" },
  { key: "Blogs", value: "/blogs" },
];
const displayProfile =
  "https://images.prismic.io/miscellaneous/9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png";
const displayProfileAlt = "";

export default function Home() {
  return (
    <>
      <Navbar
        backgroundWallpaper={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px) center / cover no-repeat fixed"
        }
        colorMain={"blue"}
        name={name}
        version={version}
        navbarLinks={navbarLinks}
      />
      <Hero backgroundWallpaper={'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center; '} introductionMD={introductionMD} displayProfile={displayProfile} />
      <Hero backgroundWallpaper={'lightblue url("https://images6.alphacoders.com/132/1323881.png") no-repeat fixed center; '} introductionMD={introductionMD} displayProfile={displayProfile} />
      <Hero introductionMD={introductionMD} displayProfile={displayProfile} />
      <Hero backgroundWallpaper={'lightblue url("https://images6.alphacoders.com/132/1323881.png") no-repeat fixed center; '} introductionMD={introductionMD} displayProfile={displayProfile} />
      <Hero backgroundWallpaper={'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center; '} introductionMD={introductionMD} displayProfile={displayProfile} />
      <SectionWrapper>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </SectionWrapper>
      <SectionWrapper>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </SectionWrapper>
    </>
  );
}
