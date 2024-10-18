import CustomImage from "@/components/core/CustomImage/CustomImage";
import styles from "./HeroProject.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";

const heroButtons = [
    { key: "Projects", value: "/projects" },
    { key: "Blogs", value: "/blogs" },
    { key: "Projects", value: "/projects" },
    { key: "Blogs", value: "/blogs" },
];

export default function HeroProject({
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
                <section className={styles.wrapper}>
                    <section className={styles.leftPortion}>
                        <Heading heading={"Project Name"} subheading={"Check out my cool stuff – projects"} />
                        <div className={styles.information}>
                            <p>Project Description</p>
                            <p>Project Description</p>
                        </div>
                        <div className={styles.information}>
                            <p>Project Description</p>
                            <p>Project Description</p>
                        </div>
                        
                        <p className={styles.description}>Check out my cool stuff – projects, blogs, and interactive things – on my dynamic website powered by the latest tech (Node LTS, Next.js 14). Dive in, handle content easily, and see what I've been into lately in the "Last Listened" section. Are you into tech? You can also see the Python and Bash scripts behind it all!</p>
                        {heroButtons && (
                            <div className={styles.buttons}>
                                {heroButtons.map((heroButton, index) => {
                                    return (
                                        <MainButton
                                            key={index}
                                            text={heroButton.key}
                                            href={heroButton.value}
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
                            </div>
                        )}
                    </section>
                    <section className={styles.rightPortion}><CustomImage
                        srcImage={"https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75"}
                        srcMobile={`https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png`}
                        altImage={"Example Image"}
                        widthImage={1200}
                        heightImage={1200}
                        borderRadiusDiv="10px"
                        hrefLink={"https://www.google.com/"}
                        paddingSection={"1.5rem 0"}
                    // textLink={"link to google"}
                    // textParagraph={"This is a paragraph inside a div with a link and an image inside it is a paragraph inside a div with a link and an image inside it is a paragraph inside a div with a link and an image inside it is a paragraph inside a div with a link and an image inside it is a paragraph inside a div with a link and an image inside it."}
                    /></section>
                </section>
                <InsertHtml externalHtml={`<h1>Dummy Project Documentation</h1>

    <!-- Table of Contents -->
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api">API Reference</a></li>
        <li><a href="#examples">Examples</a></li>
        <li><a href="#contribution">Contribution Guidelines</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <!-- Introduction -->
    <section id="introduction">
        <h2>Introduction</h2>
    </section>

    <!-- Installation -->
    <section id="installation">
        <h2>Installation</h2>
        <p>To install the Dummy Project, you need to follow these steps:</p>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/yourusername/dummy-project.git</code></pre>
            </li>
            <li>Navigate to the project directory:
                <pre><code>cd dummy-project</code></pre>
            </li>
            <li>Install the dependencies using npm:
                <pre><code>npm install</code></pre>
            </li>
        </ol>
        <p>For detailed setup instructions, please refer to the <a href="#usage">Usage</a> section.</p>
    </section>

    <!-- Usage -->
    <section id="usage">
        <h2>Usage</h2>
        <p>To start using the Dummy Project, run the following command:</p>
        <pre><code>npm start</code></pre>
        <p>After running the above command, the project will be available at <code>http://localhost:3000</code>.</p>

        <h3>Configuration</h3>
        <p>The project can be configured using the <code>config.json</code> file. Here’s an example:</p>
        <pre><code>{
    "port": 3000,
    "env": "development",
    "db": {
        "host": "localhost",
        "port": 27017,
        "name": "dummydb"
    }
}</code></pre>
    </section>

    <!-- API Reference -->
    <section id="api">
        <h2>API Reference</h2>
        <p>This project provides the following API endpoints:</p>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GET</td>
                    <td>/api/items</td>
                    <td>Retrieves a list of items</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/api/items</td>
                    <td>Creates a new item</td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>/api/items/:id</td>
                    <td>Updates an existing item</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>/api/items/:id</td>
                    <td>Deletes an item</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Examples -->
    <section id="examples">
        <h2>Examples</h2>
        <p>Here are some usage examples:</p>

        <h3>Fetching Items</h3>
        <pre><code>fetch('http://localhost:3000/api/items')
    .then(response => response.json())
    .then(data => console.log(data));</code></pre>

        <h3>Creating a New Item</h3>
        <pre><code>fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'New Item' })
}).then(response => response.json())
    .then(data => console.log(data));</code></pre>
    </section>

    <!-- Contribution Guidelines -->
    <section id="contribution">
        <h2>Contribution Guidelines</h2>
        <p>We welcome contributions from the community! Please follow these steps to contribute:</p>
        <ol>
            <li>Fork the repository.</li>
            <li>Create a new branch for your feature: <code>git checkout -b feature-name</code></li>
            <li>Commit your changes: <code>git commit -m "Add new feature"</code></li>
            <li>Push to the branch: <code>git push origin feature-name</code></li>
            <li>Create a pull request for review.</li>
        </ol>
        <p>Ensure that your code follows the style guide and passes all tests.</p>
    </section>

    <!-- License -->
    <section id="license">
        <h2>License</h2>
        <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
    </section>`} />
            </SectionWrapper>
        </section>
    );
}