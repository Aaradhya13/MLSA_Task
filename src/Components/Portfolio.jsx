/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/poster.jpg";

const imageAltText = "digital aesthetic night background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AmazClone",
    description:
      "AmazClone is a remarkable CSS project that replicates the user interface of the renowned Amazon website. Offering a personalized online shopping experience, AmazClone mirrors Amazon's layout, aesthetics, and responsiveness, allowing users to browse, search, and explore a vast array of products seamlessly. With carefully crafted CSS styles, this project showcases the developer's skills in front-end web development. From its intuitive navigation to interactive elements, AmazClone aims to provide users with a familiar and enjoyable shopping journey, making it an excellent demonstration of CSS proficiency and attention to detail.",
    url: "https://github.com/Aaradhya13/AmazClone",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Experience the classic game of Tic-Tac-Toe through this interactive JavaScript mini project! In this web-based game, players take turns clicking on the grid's boxes to place their symbol—either X or O.",
    url: "https://github.com/Aaradhya13/tic-tac-toe",
  },
  {
    title: "My 1st audition in college",
    description:
      "A youtube shorts of me auditioning for getting into the dance club of our college for the 1st time",
    url: "https://youtube.com/shorts/3lBsMVnk_Wo?si=1E4q4P6zUHmqupt_",
  },
  {
    title: "Happiness of going Home!",
    description:
      "A shorts to capture life's little enjoyable moments",
    url: "https://youtube.com/shorts/Hl1297B1f_0?si=N7C7qI3TxGcBK-2l",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
