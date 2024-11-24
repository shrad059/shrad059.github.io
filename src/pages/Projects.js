import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { textVariant } from "../utils/motion.js";
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ name, description, tags, image, github_link, source_code_link }) => {
  return (
    <div className="portfolio-item">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="portfolio-item-inner"
      >
        <div>
          <img src={image} alt={`${name} screenshot`} className="project-image" />
          <div className="project-mask">
            <div className="iconLink">
              <div
                onClick={() => window.open(github_link, "_blank")}
                className="github-link"
              >
                <FontAwesomeIcon icon={faGithub} className="git-icon" />
              </div>
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project-content">
          <p className="project-title text-white">{name}</p>
          <p className="project-description text-white">{description}</p>
          <div className="project-tags">
            {tags?.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Portfolio = () => {
  useEffect(() => {
    document.title = "my projects ✨";
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <motion.div variants={textVariant()}>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        </motion.div>
        <div className="portfolio-row">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
