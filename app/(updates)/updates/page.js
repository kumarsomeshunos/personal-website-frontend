import FeaturedCard from "@/components/core/Cards/FeaturedCard/FeaturedCard";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Projects from "@/components/Home/Projects/Projects";
import UpdateCard from "@/components/core/Cards/UpdateCard/UpdateCard";
import Updates from "@/components/Updates/Updates";

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

export default function ProjectsPage() {
    return (
        <>
            <Navbar
                // backgroundMain={"#000"}
                colorMain={"black"}
backgroundWallpaper={"white"}
                name={name}
                version={version}
                navbarLinks={navbarLinks}
            />
            <Updates 
            colorMain={"black"}
            backgroundWallpaper={"white"}
            // backgroundMain={"#000"} 
            />
        </>
    );
}