import Footer from "@/components/core/Footer/Footer";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Now from "@/components/Home/Now/Now";

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
    key: "F.I.R.S.T",
    value: "/first",
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

export default function NowPage() {
  return (
    <>
      <Navbar
        backgroundWallpaper={
          "linear-gradient(270deg, #000000 0%, #093e4c 50%, #1a1a1c 100%)"
        }
        name={name}
        version={version}
        navbarLinks={navbarLinks}
      />
      <Now
        backgroundWallpaper={
          'center / cover no-repeat url("https://lastfm.freetls.fastly.net/i/u/500x500/1aaa3638ee0bfee0ba8089c78ad63b26.jpg")'
        }
        colorMain={"black"}
        heading={"Now Listening"}
        backgroundImageName={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        }
        filterWallpaper={"blur(2rem)"}
        posterImage={"https://lastfm.freetls.fastly.net/i/u/500x500/1aaa3638ee0bfee0ba8089c78ad63b26.jpg"}
      />
      <Now
        backgroundWallpaper={
          'center / cover no-repeat url("https://rukminim2.flixcart.com/image/850/1000/k5wse4w0/poster/u/b/a/medium-artistic-movie-poster-thor-marvel-movie-poster-for-room-original-imafzgvb2xt8ptzx.jpeg?q=90&crop=false")'
        }
        colorMain={"black"}
        heading={"Now Watching"}
        backgroundImageName={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        }
        filterWallpaper={"blur(2rem)"}
        posterImage={"https://rukminim2.flixcart.com/image/850/1000/k5wse4w0/poster/u/b/a/medium-artistic-movie-poster-thor-marvel-movie-poster-for-room-original-imafzgvb2xt8ptzx.jpeg?q=90&crop=false"}
      />
      <Now
        backgroundWallpaper={
          'center / cover no-repeat url("https://books.google.com/books/content?id=3SZsswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api")'
        }
        colorMain={"black"}
        heading={"Now Reading"}
        backgroundImageName={
          "repeating-linear-gradient(45deg, #ff7e5f, #ff7e5f 10px, #feb47b 10px, #feb47b 20px)"
        }
        filterWallpaper={"blur(2rem)"}
        posterImage={"https://books.google.com/books/content?id=3SZsswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
      />
      <Footer />
    </>
  );
}