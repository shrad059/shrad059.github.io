import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "about me ";
  }, []);
  const handleImageError = () => {
    console.log("Failed to load the image.");
  };
  return (
    <div>
      <img  src={require("../images/picture.png")} alt="Shraddha pretending to smile"  onError={handleImageError}
width="200" height="auto" />
      <p>
        <nobr>📍 Halifax, NS</nobr>
      </p>
      <hr class="dashed" />
      <p>
      Hello! I am Shraddha (shra-duh)!!
      <br />
      <br />
      Originally from Illinois, I am currently in my senior year pursuing Bachelors in Computer Science & Physics at <a href="https://www.dal.ca/research.html">Dalhousie University</a>, Canada! 
      <br />
      <br />
      I am passionate about both physics and software engineering, and have been trying to develop my knowledge and skills in both fields. I am particularly interested in machine learning, data analysis, computer simulations, and software development. 
      <br />
      <br />
      Currently, I am working as a research assistant studying properties of battery and its material properties under  <a href="https://penghao-xiao.github.io/xiao_group/">Prof.Penghao Xiao.</a> Over the past two summers, I&apos;ve completed internships at two startups, where I had the opportunity to work as a full-stack software developer intern.
      </p>
      <p> </p>

    </div>
  );
}

export default About;
