import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "about me";
  }, []);

  return (
    <div>
      <img src="/images/me.JPEG" alt="Shraddha pretending to smile" width="200" height="auto" />
      <p>
        <nobr>📍 Halifax, NS</nobr>
      </p>
      <hr class="dashed" />
      <p>
      Hello! I am Shraddha (shra-duh)!!
      <br />
      <br />
      Hailing from the cornfields of Illinois, I am currently in my senior year pursuing Bachelors in Computer Science & Physics at <a href="">Dalhousie University</a>! 
      <br />
      <br />
      I am passionate about both physics and software engineering, and have been trying to develop my knowledge and skills in both fields. I am particularly interested in machine learning, data analysis, computer simulations, and software development. 
      <br />
      <br />
      Currently, I am working as a research assistant studying properties of battery and its material properties under Prof.Penghao Xiao.
      </p>
      <p> </p>
      
      {/* <p>
        <b>currently</b>
      </p>
      <p>
        -  I am in my senior year at Dalhousie University!
        -  
        <br />
        <br />
      </p> */}
      <p> </p>
      {/* <p> */}
        {/* <b>previously</b> */}
      {/* </p> */}
      {/* <p>did some internships:</p> */}
      {/* <ul>
        <li>
          developed a couple of accessibility tools for google (
          <a
            href="https://workspace.google.com/intl/en_ca/"
            class="clickable"
            target="_blank"
          >
            google workspace
          </a>
          )
        </li>
        <li>
          worked on purolator's b2c shipping application as a pm (
          <a
            href="https://www.purolator.com/en/business-solutions/technology-solutions/track-manage-deliveries-receivers"
            class="clickable"
            target="_blank"
          >
            PYW
          </a>
          )
        </li>
        <li>
          wrote some nasa code for the canadian space agency (
          <a
            href="https://github.com/nasa/cFS"
            class="clickable"
            target="_blank"
          >
            cFS
          </a>
          )
        </li>
        <li>
          wrote test suites for Equitable Bank's android app (
          <a
            href="https://apps.apple.com/ca/app/eq-bank-mobile-banking/id1039432211"
            class="clickable"
            target="_blank"
          >
            EQ Bank Mobile Banking
          </a>
          )
        </li>
      </ul>
      <p></p>
      <p>and did some clubs:</p>
      <ul>
        <li>
          wrote some satellite code for{" "}
          <a
            href="https://mcmasterneudose.ca/"
            target="_blank"
            class="clickable"
          >
            McMaster NEUDOSE
          </a>
        </li>
        <li>
          led the marketing team for the biggest design competition in 2021 with
          the{" "}
          <a
            href="https://www.mcmasterdesignleague.com/"
            class="clickable"
            target="_blank"
          >
            McMaster Design League
          </a>
        </li>
        <li>
          curated the attendee experience for{" "}
          <a href="https://deltahacks.com/" target="_blank" class="clickable">
            Deltahacks
          </a>
        </li>
      </ul> */}

    </div>
  );
}

export default About;
