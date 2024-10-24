let baseData = {
  purewhite: {
    backgroundMain: "white",
    colorMain: "#2c3e50", // Dark Blue-Grey for visibility
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(200,200,200,1) 100%)", // Subtle gradient
    filterWallpaper: "blur(0px)",
    linkBorderBottom: "1px solid rgba(44, 62, 80, 0.6)",
    linkBackgroundColor: "#2c3e50",
  },
  alldark: {
    backgroundMain: "black",
    colorMain: "#f1c40f", // Bright Yellow for contrast
    backgroundWallpaper: "#1b1b1b", // Solid dark grey
    filterWallpaper: "blur(0px)",
    linkBorderBottom: "1px solid rgba(241, 196, 15, 0.7)",
    linkBackgroundColor: "#f1c40f",
  },
  glossyred: {
    backgroundMain: "#ff4d4d",
    colorMain: "#f8f9fa", // Light Grey for contrast
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(255,77,77,1) 0%, rgba(200,0,0,1) 100%)", // Vibrant red gradient
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(248, 249, 250, 0.8)",
    linkBackgroundColor: "#b30000",
  },
  oceanblue: {
    backgroundMain: "#0077b6",
    colorMain: "#caf0f8", // Light Cyan for contrast
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(0,119,182,1) 0%, rgba(2,62,138,1) 100%)", // Gradient from light to deep blue
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(202, 240, 248, 0.8)",
    linkBackgroundColor: "#023e8a",
  },
  forestgreen: {
    backgroundMain: "#2d6a4f",
    colorMain: "#c7f9cc", // Light Mint Green for contrast
    backgroundWallpaper: "#1b4332", // Solid dark green
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(199, 249, 204, 0.8)",
    linkBackgroundColor: "#1b4332",
  },
  sunsetorange: {
    backgroundMain: "#f77f00",
    colorMain: "#fefae0", // Soft Cream for warmth
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(247,127,0,1) 0%, rgba(253,94,0,1) 100%)", // Gradient transitioning from light to deep orange
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(254, 250, 224, 0.8)",
    linkBackgroundColor: "#d62828",
  },
  royalpurple: {
    backgroundMain: "#5a189a",
    colorMain: "#e0aaff", // Light Lavender for a royal look
    backgroundWallpaper: "#3c096c", // Solid deep purple
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(224, 170, 255, 0.8)",
    linkBackgroundColor: "#3c096c",
  },
  steelgrey: {
    backgroundMain: "#6c757d",
    colorMain: "#f8f9fa", // Light Grey for contrast
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(108,117,125,1) 0%, rgba(144,164,174,1) 100%)", // Subtle grey gradient
    filterWallpaper: "blur(1px)",
    linkBorderBottom: "1px solid rgba(248, 249, 250, 0.8)",
    linkBackgroundColor: "#495057",
  },
  lemonyellow: {
    backgroundMain: "#ffeb3b",
    colorMain: "#37474f", // Deep Blue-Grey for contrast
    backgroundWallpaper: "#fbc02d", // Solid mustard yellow
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(55, 71, 79, 0.6)",
    linkBackgroundColor: "#fbc02d",
  },
  midnightblack: {
    backgroundMain: "#121212",
    colorMain: "#90e0ef", // Light Blue for a futuristic look
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(48,48,48,1) 100%)", // Subtle black gradient
    filterWallpaper: "blur(1px)",
    linkBorderBottom: "1px solid rgba(144, 224, 239, 0.8)",
    linkBackgroundColor: "#000000",
  },
  softpink: {
    backgroundMain: "#ffb6c1",
    colorMain: "#5d4037", // Warm Brown for coziness
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(255,182,193,1) 0%, rgba(255,105,180,1) 100%)", // Soft pink gradient
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(93, 64, 55, 0.6)",
    linkBackgroundColor: "#ff69b4",
  },
  misticteal: {
    backgroundMain: "#008080",
    colorMain: "#b2f7ef", // Light Aqua for an ethereal look
    backgroundWallpaper: "#004d4d", // Solid dark teal
    filterWallpaper: "blur(2px)",
    linkBorderBottom: "1px solid rgba(178, 247, 239, 0.8)",
    linkBackgroundColor: "#004d4d",
  },
  goldensand: {
    backgroundMain: "#e0c097",
    colorMain: "#8b4513", // Saddle Brown for an earthy tone
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(224,192,151,1) 0%, rgba(194,153,107,1) 100%)", // Golden sand gradient
    filterWallpaper: "blur(1px)",
    linkBorderBottom: "1px solid rgba(139, 69, 19, 0.6)",
    linkBackgroundColor: "#c19a6b",
  },
};

let navbarData = {
  purewhite: {
    backgroundMain: "white",
    colorMain: undefined,
    backgroundWallpaper: "white",
    filterWallpaper: undefined,
    name: undefined,
    version: "MK-VII",
    navbarLinks: [
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
    ],
  },
  alldark: {
    backgroundMain: "black",
    colorMain: "#f1c40f",
    backgroundWallpaper: "black",
    filterWallpaper: undefined,
    name: undefined,
    version: "MK-VII",
    navbarLinks: [
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
    ],
  },
};

let heroData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    greetings: undefined,
    name: undefined,
    backgroundImageName: undefined,
    introductionMD: `<p class="has-line-data" data-line-start="0" data-line-end="1">a third-year B.Tech student at <a href="https://jaipur.manipal.edu/muj.html">Manipal University | Jaipur</a>, majoring in Information Technology.</p>
  <p class="has-line-data" data-line-start="2" data-line-end="3">Passionate about tech and innovation, I specialize in the <a href="https://www.mongodb.com/mern-stack">MERN stack</a>. I work with languages like Java, JavaScript, C, and Python. Currently diving into the exciting world of <a href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a> 🤖, exploring its endless possibilities.</p>
  <p class="has-line-data" data-line-start="4" data-line-end="5">Beyond coding, I’m intrigued by the inner workings of <a href="https://en.wikipedia.org/wiki/Operating_system">operating systems</a> 💻 and love learning about them. Understanding how computers work and optimizing performance fuels my curiosity.</p>`,
    heroButtons: [
      { key: "Projects", value: "/projects" },
      { key: "Blogs", value: "/blogs" },
      { key: "F.I.R.S.T", value: "/first" },
    ],
    displayProfile:
      "https://images.prismic.io/miscellaneous/9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png",
    displayProfileAlt: undefined,
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    greetings: "Hi there!",
    name: undefined,
    backgroundImageName: undefined,
    introductionMD: `<p class="has-line-data" data-line-start="0" data-line-end="1">a third-year B.Tech student at <a href="https://jaipur.manipal.edu/muj.html">Manipal University | Jaipur</a>, majoring in Information Technology.</p>
  <p class="has-line-data" data-line-start="2" data-line-end="3">Passionate about tech and innovation, I specialize in the <a href="https://www.mongodb.com/mern-stack">MERN stack</a>. I work with languages like Java, JavaScript, C, and Python. Currently diving into the exciting world of <a href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a> 🤖, exploring its endless possibilities.</p>
  <p class="has-line-data" data-line-start="4" data-line-end="5">Beyond coding, I’m intrigued by the inner workings of <a href="https://en.wikipedia.org/wiki/Operating_system">operating systems</a> 💻 and love learning about them. Understanding how computers work and optimizing performance fuels my curiosity.</p>`,
    heroButtons: [
      {
        key: "Projects",
        value: "/projects",
        border: "1px solid white",
        color: "black",
        background: "white",
      },
      { key: "Blogs", value: "/blogs" },
      { key: "F.I.R.S.T", value: "/first" },
    ],
    displayProfile:
      "https://images.prismic.io/miscellaneous/9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png",
    displayProfileAlt: undefined,
  },
};

let projectsSectionData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: "Here you'll find some of my projects that I've worked on.",
    backgroundImageName: undefined,

    projects: [
      {
        title: "The Popcorn Protocol",
        postedOn: "27 July 2024",
        status: "In Progress",
        subtitle: "Make Piracy Easier",
        description:
          "Even granny should be a able to download movies without paying.",
        links: [{ key: "TPP", value: "https://example.com/research-paper" }],
        src: "https://champagne.pages.dev/static/cheers.gif",
        slug: "the-popcorn-protocol",
        details: true,
        backgroundHover: "rgba(182, 255, 161, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: "black",
      },
      {
        title: "Organized Octopus",
        postedOn: "07 April 2024",
        status: "Completed",
        subtitle: undefined,
        description:
          "A Bookmark Manager. Make website collection and sharing easier.",
        links: [{ key: "Link", value: "https://example.com/research-paper" }],
        src: "https://images.prismic.io/miscellaneous/Zxd55oF3NbkBXzyl_bookmarksmanager.webp",
        slug: "the-organized-octopus",
        details: true,
        backgroundHover: "rgba(0, 0, 0, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: "black",
      },
      {
        title: "Careers Portal",
        postedOn: "23 January 2024",
        status: "Completed",
        subtitle: undefined,
        description: "Careers portal for Manipal University.",
        links: [
          { key: "Portal", value: "https://example.com/research-paper" },
          {
            key: "Backend Github",
            value: "https://example.com/research-paper",
          },
        ],
        src: "https://images.prismic.io/miscellaneous/3484ab3b-c51c-42bf-9f00-b2432ed6a300_manipal.png",
        slug: "manipal-careers-portal",
        details: true,
        backgroundHover: "rgba(254, 236, 55, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: "black",
      },
      {
        title: "TEDxManipal",
        postedOn: "17 November 2023",
        status: "Completed",
        subtitle: undefined,
        description: undefined,
        links: [
          { key: "TEDxManipal", value: "https://example.com/research-paper" },
        ],
        src: "https://images.prismic.io/miscellaneous/93609c16-ee87-4ba8-9377-fc1acd13dbc8_tedx.png",
        slug: "tedxmuj",
        details: true,
        backgroundHover: "rgba(255, 0, 0, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: "black",
      },
      {
        title: "EdiImg",
        postedOn: "11 July 2023",
        status: "Completed",
        subtitle: "Image Manuplation Software",
        description:
          "A simple desktop app for editing images. It's built with Python and has lots of tools to help you change your photos.",
        links: [
          { key: "GitHub Link", value: "https://example.com/research-paper" },
        ],
        src: undefined,
        slug: "ediimg",
        details: false,
        backgroundHover: "rgba(255, 162, 76, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: "black",
      },
      {
        title: "DoomScoll",
        postedOn: "19 Decemeber 2023",
        status: "Completed",
        subtitle: "Because learning shouldn't feel like a chore",
        description:
          "An app featuring an engaging Instagram Reels-style feed on various topics, powered by a fine-tuned GPT-4 model.",
        links: [
          { key: "DoomScoll", value: "https://example.com/research-paper" },
        ],
        src: "https://images.prismic.io/miscellaneous/6ce1ad8c-5d7c-463a-8a3b-bb7ba1d73f86_doomscroll.png",
        slug: "doomscrol",
        details: true,
        backgroundHover: "rgba(124, 0, 254, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: "black",
      },
    ],
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: "Here you'll find some of my projects that I've worked on.",
    backgroundImageName: undefined,

    projects: [
      {
        title: "The Popcorn Protocol",
        postedOn: "27 July 2024",
        status: "In Progress",
        subtitle: "Make Piracy Easier",
        description:
          "Even granny should be a able to download movies without paying.",
        links: [
          {
            key: "TPP",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
        ],
        src: "https://champagne.pages.dev/static/cheers.gif",
        slug: "the-popcorn-protocol",
        details: {
          key: "TPP",
          value: "https://example.com/research-paper",
          padding: "0.1rem 0.3rem",
          paddingHover: "0.1rem 0.3rem",
          borderRadius: "0.25rem",
          borderRadiusHover: "0.25rem",
          margin: "0.5rem 0.5rem 0 0",
          marginHover: "0.5rem 0.5rem 0 0",
          border: "1px solid black",
          borderHover: "1px solid black",
          background: "pink",
        },
        backgroundHover: "rgba(182, 255, 161, 0.1)",
        border: "1px solid white",
        borderHover: "1px solid black",
        color: undefined,
        colorHover: "white",
      },
      {
        title: "Organized Octopus",
        postedOn: "07 April 2024",
        status: "Completed",
        subtitle: undefined,
        description:
          "A Bookmark Manager. Make website collection and sharing easier.",
        links: [
          {
            key: "Link",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
        ],
        src: "https://images.prismic.io/miscellaneous/Zxd55oF3NbkBXzyl_bookmarksmanager.webp",
        slug: "the-organized-octopus",
        details: {
          key: "TPP",
          value: "https://example.com/research-paper",
          padding: "0.1rem 0.3rem",
          paddingHover: "0.1rem 0.3rem",
          borderRadius: "0.25rem",
          borderRadiusHover: "0.25rem",
          margin: "0.5rem 0.5rem 0 0",
          marginHover: "0.5rem 0.5rem 0 0",
          border: "1px solid black",
          borderHover: "1px solid black",
          background: "pink",
        },
        backgroundHover: "rgba(0, 0, 0, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: undefined,
        colorHover: "white",
      },
      {
        title: "Careers Portal",
        postedOn: "23 January 2024",
        status: "Completed",
        subtitle: undefined,
        description: "Careers portal for Manipal University.",
        links: [
          {
            key: "Portal",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
          {
            key: "Backend Github",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
        ],
        src: "https://images.prismic.io/miscellaneous/3484ab3b-c51c-42bf-9f00-b2432ed6a300_manipal.png",
        slug: "manipal-careers-portal",
        details: {
          key: "TPP",
          value: "https://example.com/research-paper",
          padding: "0.1rem 0.3rem",
          paddingHover: "0.1rem 0.3rem",
          borderRadius: "0.25rem",
          borderRadiusHover: "0.25rem",
          margin: "0.5rem 0.5rem 0 0",
          marginHover: "0.5rem 0.5rem 0 0",
          border: "1px solid black",
          borderHover: "1px solid black",
          background: "pink",
        },
        backgroundHover: "rgba(254, 236, 55, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: undefined,
        colorHover: "white",
      },
      {
        title: "TEDxManipal",
        postedOn: "17 November 2023",
        status: "Completed",
        subtitle: undefined,
        description: undefined,
        links: [
          {
            key: "TEDxManipal",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
        ],
        src: "https://images.prismic.io/miscellaneous/93609c16-ee87-4ba8-9377-fc1acd13dbc8_tedx.png",
        slug: "tedxmuj",
        details: {
          key: "TPP",
          value: "https://example.com/research-paper",
          padding: "0.1rem 0.3rem",
          paddingHover: "0.1rem 0.3rem",
          borderRadius: "0.25rem",
          borderRadiusHover: "0.25rem",
          margin: "0.5rem 0.5rem 0 0",
          marginHover: "0.5rem 0.5rem 0 0",
          border: "1px solid black",
          borderHover: "1px solid black",
          background: "pink",
        },
        backgroundHover: "rgba(255, 0, 0, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: undefined,
        colorHover: "white",
      },
      {
        title: "EdiImg",
        postedOn: "11 July 2023",
        status: "Completed",
        subtitle: "Image Manuplation Software",
        description:
          "A simple desktop app for editing images. It's built with Python and has lots of tools to help you change your photos.",
        links: [
          {
            key: "GitHub Link",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
        ],
        src: undefined,
        slug: "ediimg",
        details: false,
        backgroundHover: "rgba(255, 162, 76, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: undefined,
        colorHover: "white",
      },
      {
        title: "DoomScoll",
        postedOn: "19 Decemeber 2023",
        status: "Completed",
        subtitle: "Because learning shouldn't feel like a chore",
        description:
          "An app featuring an engaging Instagram Reels-style feed on various topics, powered by a fine-tuned GPT-4 model.",
        links: [
          {
            key: "DoomScoll",
            value: "https://example.com/research-paper",
            padding: "0.1rem 0.3rem",
            paddingHover: "0.1rem 0.3rem",
            borderRadius: "0.25rem",
            borderRadiusHover: "0.25rem",
            margin: "0.5rem 0.5rem 0 0",
            marginHover: "0.5rem 0.5rem 0 0",
            border: "1px solid black",
            borderHover: "1px solid black",
            background: "pink",
          },
        ],
        src: "https://images.prismic.io/miscellaneous/6ce1ad8c-5d7c-463a-8a3b-bb7ba1d73f86_doomscroll.png",
        slug: "doomscrol",
        details: {
          key: "TPP",
          value: "https://example.com/research-paper",
          padding: "0.1rem 0.3rem",
          paddingHover: "0.1rem 0.3rem",
          borderRadius: "0.25rem",
          borderRadiusHover: "0.25rem",
          margin: "0.5rem 0.5rem 0 0",
          marginHover: "0.5rem 0.5rem 0 0",
          border: "1px solid black",
          borderHover: "1px solid black",
          background: "pink",
        },
        backgroundHover: "rgba(124, 0, 254, 0.1)",
        border: "1px solid black",
        borderHover: "1px solid black",
        color: undefined,
        colorHover: "white",
      },
    ],
  },
};

let blogsSectionData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
  heading: undefined,
  subheading: "These are some snippets I've jotted down.",
  backgroundImageName: undefined,

  blogs: [
    {
      title: "FaceID in Manipal University",
      postedOn: "28 October 2024",
      tags: [{ key: "FaceID" }, { key: "Manipal" }, { key: "University" }],
      description:
        "I found a flaw in our college’s FaceID system that lets anyone upload images to other students’ accounts using a common API key. This could allow unauthorized access to the campus!",
      thumbnail: undefined,
      slug: "faceid-in-manipal-university",
      backgroundHover: "rgba(255, 162, 76, 0.1)",
      border: "1px solid black",
      color: "black",
      borderHover: "1px solid black",
    },
    {
      title: "The $200 DigitalOcean Credits",
      postedOn: "13 July 2024",
      tags: [{ key: "DigitalOcean" }, { key: "Credits" }],
      description: "How the $200 DigitalOcean credits changed the way I work?",
      thumbnail:
        "https://images.prismic.io/miscellaneous/8a335656-046e-4bdf-bc22-680b3f3b05fe_digitalocean-blogs.png",
      slug: "the-200-digitalocean-credits",
      backgroundHover: "rgba(0, 0, 255, 0.1)",
      border: "1px solid black",
      color: "black",
      borderHover: "1px solid black",
    },
  ],
};

let nowSectionData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper:
    "center / cover no-repeat url('https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2F175e679e8d615e8536cb92f4d479eac8.jpg&w=640&q=75')",
  filterWallpaper: "blur(1rem)",
  heading: undefined,
  subheading: undefined,
  backgroundImageName: undefined,

  now: {
    posterImage:
      "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2F175e679e8d615e8536cb92f4d479eac8.jpg&w=640&q=75",
    posterImageAlt: "Song poster",
    posterImageWidth: 1200,
    posterImageHeight: 1200,
    nowTitle: "Now Playing",
    songTitle: "The Less I Know The Better",
    songArtist: "Tame Impala",
    songAlbum: "Currents",
    description: "I'm listening to this song on Spotify right now.",
    buttonText: "Listen on Spotify",
    buttonLink: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
    rNowTitle: "About This Card",
    rNowDescription:
      "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
    rNowButtonText: "Want more of this?",
    rNowButtonLink: "/",
  },
};

let footerData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
  footerImageSrc:
    "https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/cfcb226c-f821-471c-8d58-7b4e6de6bdec/end-of-road-rebranded.gif",
  footerImageAlt: "Footer Image",
  footerImageWidth: 1200,
  footerImageHeight: 1200,
  footerLinksTitle: "You're gonna wanna try these...",
  footerLinks: [
    {
      key: "F.I.R.S.T",
      value: "/",
    },
    {
      key: "The Popcorn Protocol",
      value: "/projects/the-popcorn-protocol",
    },
    {
      key: "The Organized Octopus",
      value: "/projects/the-organized-octopus",
    },
    {
      key: "Clever Coder",
      value: "/projects/clever-coder",
    },
    {
      key: "Quantum Quest",
      value: "/projects/quantum-quest",
    },
    {
      key: "Nebula Navigator",
      value: "/projects/nebula-navigator",
    },
    {
      key: "Pixel Perfect",
      value: "/projects/pixel-perfect",
    },
    {
      key: "The Data Diver",
      value: "/projects/the-data-diver",
    },
    {
      key: "Silent Symphony",
      value: "/projects/silent-symphony",
    },
    {
      key: "The Code Crusader",
      value: "/projects/the-code-crusader",
    },
    {
      key: "Astro Adventurer",
      value: "/projects/astro-adventurer",
    },
    {
      key: "Circuit Breaker",
      value: "/projects/circuit-breaker",
    },
    {
      key: "The Infinite Loop",
      value: "/projects/the-infinite-loop",
    },
  ],
};

let endData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
};

let featuredProject = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
  heading: undefined,
  subheading: undefined,
  backgroundImageName: undefined,
  project: {
    imageSrc:
      "https://images.prismic.io/miscellaneous/008ccbfc-44b2-48f0-aeb3-0079712066bf_genesis.png",
    imageSrcMobile:
      "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Featured Project Image",
    imageWidth: 1200,
    imageHeight: 1200,
    layoutImage: undefined,
    objectFitImage: undefined,
    paddingSection: undefined,
    positionDiv: undefined,
    widthDiv: undefined,
    heightDiv: undefined,
    borderRadiusDiv: undefined,
    overflowDiv: undefined,
    boxShadowDiv: undefined,
    hrefLink: undefined,
    textLink: undefined,
    textParagraph: undefined,
    title: "Project Genesis",
    buttons: [
      {
        key: "Description",
        value: "/",
      },
      {
        key: "Watch Video",
        value: "/",
      },
    ],
  },
};

let featuredBlog = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
  heading: undefined,
  subheading: undefined,
  backgroundImageName: undefined,
  blog: {
    imageSrc:
      "https://images.prismic.io/miscellaneous/ZvflQbVsGrYSwGdk_image.webp",
    imageSrcMobile:
      "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Featured Project Image",
    imageWidth: 1200,
    imageHeight: 1200,
    layoutImage: undefined,
    objectFitImage: undefined,
    paddingSection: undefined,
    positionDiv: undefined,
    widthDiv: undefined,
    heightDiv: undefined,
    borderRadiusDiv: undefined,
    overflowDiv: undefined,
    boxShadowDiv: undefined,
    hrefLink: undefined,
    textLink: undefined,
    textParagraph: undefined,
    title: "FaceIDxManipal",
    buttons: [
      {
        key: "Read More",
        value: "/",
      },
      {
        key: "Watch Video",
        value: "/",
      },
    ],
  },
};

let nowMovieData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper:
    "center / cover no-repeat url('https://m.media-amazon.com/images/M/MV5BZDY0OTA2MDEtNDNlOS00ZWE4LTlkMGUtNmIxYjAwYzEyNTM3XkEyXkFqcGc@._V1_.jpg')",
  filterWallpaper: "blur(1rem)",
  heading: "Now Watching",
  subheading: undefined,
  backgroundImageName: undefined,

  now: {
    posterImage:
      "https://m.media-amazon.com/images/M/MV5BZDY0OTA2MDEtNDNlOS00ZWE4LTlkMGUtNmIxYjAwYzEyNTM3XkEyXkFqcGc@._V1_.jpg",
    posterImageAlt: "Movie Poster",
    posterImageWidth: 1200,
    posterImageHeight: 1200,
    nowTitle: "Now Watching",
    songTitle: "Chemical Hearts",
    songArtist: "Tame Impala",
    songAlbum: "Currents",
    description: "I'm listening to this song on Spotify right now.",
    buttonText: "Listen on Spotify",
    buttonLink: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
    rNowTitle: "About This Card",
    rNowDescription:
      "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
    rNowButtonText: "Want more of this?",
    rNowButtonLink: "/",
  },
};

let nowBookData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper:
    "center / cover no-repeat url('https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg')",
  filterWallpaper: "blur(1rem)",
  heading: "Now Reading",
  subheading: undefined,
  backgroundImageName: undefined,

  now: {
    posterImage:
      "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg",
    posterImageAlt: "Movie Poster",
    posterImageWidth: 1200,
    posterImageHeight: 1200,
    nowTitle: "Now Reading",
    songTitle: "The Silent Patient",
    songArtist: "Tame Impala",
    songAlbum: "Currents",
    description: "I'm listening to this song on Spotify right now.",
    buttonText: "Listen on Spotify",
    buttonLink: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
    rNowTitle: "About This Card",
    rNowDescription:
      "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
    rNowButtonText: "Want more of this?",
    rNowButtonLink: "/",
  },
};

let heroContactData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
  heading: undefined,
  subheading: "These are some snippets I've jotted down.",
  backgroundImageName: undefined,
};

let updatesData = {
  backgroundMain: undefined,
  colorMain: undefined,
  backgroundWallpaper: undefined,
  filterWallpaper: undefined,
  heading: undefined,
  subheading: "These are some snippets I've jotted down.",
  backgroundImageName: undefined,
};

export {
  baseData,
  navbarData,
  heroData,
  projectsSectionData,
  blogsSectionData,
  nowSectionData,
  footerData,
  endData,
  featuredProject,
  featuredBlog,
  nowMovieData,
  nowBookData,
  heroContactData,
  updatesData,
};
