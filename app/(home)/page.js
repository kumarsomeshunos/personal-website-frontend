import End from "@/components/core/Footer/End";
import Footer from "@/components/core/Footer/Footer";
import Navbar from "@/components/core/Navbar/Navbar";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Blogs from "@/components/Home/Blogs/Blogs";
import Hero from "@/components/Home/Hero/Hero";
import Now from "@/components/Home/Now/Now";
import Projects from "@/components/Home/Projects/Projects";

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
    key: "Now",
    value: "/now",
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
        // backgroundWallpaper={
        //   "linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"
        // }
        colorMain={"black"}
        name={name}
        version={version}
        navbarLinks={navbarLinks}
        backgroundWallpaper={"white"}
      />
      <Hero
        introductionMD={introductionMD}
        displayProfile={displayProfile}
        heroButtons={heroButtons}
        backgroundWallpaper={"white"}
        // backgroundWallpaper={'url("https://images.prismic.io/miscellaneous/ZxOJH4F3NbkBXu-u_hero.png") no-repeat center center / cover'}
        colorMain={"black"}
      />
      <Projects
        // backgroundWallpaper={
        //   'lightblue url("https://images6.alphacoders.com/132/1323881.png") no-repeat fixed center'
        // }
        // backgroundWallpaper={
        //   'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center'
        // }
        backgroundWallpaper={"white"}
        // colorMain={"white"}
        heading={"Projects"}
        subheading={
          "This is the subheading you've been wating for years, right?"
        }
        colorMain={"black"}
        // backgroundImageName={
        //   "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        // }
        // backgroundMain={"black"}
        // filterWallpaper={"blur(50px)"}
      />
      <Blogs
        // backgroundWallpaper={
        //   'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center'
        // }
        // colorMain={"white"}
        heading={"Blogs"}
        subheading={
          "This is the subheading you've been wating for years, right?"
        }
        // backgroundImageName={
        //   "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        // }
        // backgroundMain={"black"}
        // filterWallpaper={"blur(50px)"}
        backgroundWallpaper={"white"}
        colorMain={"black"}
      />
      <Now
        backgroundWallpaper={
          'center / cover no-repeat url("https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2Fb385713f95702a0425640da136618c60.jpg&w=640&q=75")'
        }
        colorMain={"white"}
        heading={"Now Listening"}
        backgroundImageName={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        }
        filterWallpaper={"blur(2rem)"}
        posterImage={"https://i.scdn.co/image/ab67616100005174f6d51e6f5342d2d363220920"}
      />
      <Footer backgroundWallpaper={"white"} colorMain={"black"} />
      <End backgroundWallpaper={"white"} colorMain={"black"} />
      {/* <Hero
        backgroundWallpaper={
          'lightblue url("https://images6.alphacoders.com/132/1323881.png") no-repeat fixed center'
        }
        introductionMD={introductionMD}
        displayProfile={displayProfile}
        heroButtons={heroButtons}
        backgroundMain={"green"}
        filterWallpaper={"blur(50px)"}
      />
      <Hero introductionMD={introductionMD} displayProfile={displayProfile} />
      <Hero
        backgroundWallpaper={
          'lightblue url("https://images6.alphacoders.com/132/1323881.png") no-repeat fixed center'
        }
        introductionMD={introductionMD}
        displayProfile={displayProfile}
      />
      <Hero
        backgroundWallpaper={
          'lightblue url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg") no-repeat fixed center'
        }
        introductionMD={introductionMD}
        displayProfile={displayProfile}
      /> */}
    </>
  );
}
