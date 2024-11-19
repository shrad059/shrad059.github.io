import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "grinding leetcode",
  "brewing my chai tea",
  "cafe hopping around Halifax",
  "reading poetry",
  "perfecting my spotify playlist",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "shraddha's crib 𓆩⟡𓆪";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [tooltipShown, setTooltipShown] = useState(false);

  const handleHover = () => {
    if (!tooltipShown) {
      setTooltipShown(true);
    }
  };

  return (
    <div>
      <h2>i'm shraddha!</h2>
      <p>welcome to my little node of the internet!</p>
      <p>
        i'm a student and aspiring software engineer based in Canada &#127809;. 
        I enjoy building fun projects to bring joy to the web, collaborating with friends, working on hard problems, and making an impact. 
        When I am not busy coding something, i'm probably{" "}
        <a
          className="clickable"
          id="hobbies"
          onClick={handleHobbyClick}
          onMouseEnter={handleHover}
        >
          {!tooltipShown && (
            <span className="tooltip">hi! you can click on it to see my hobbies</span>
          )}
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:sh913738@dal.ca" className="clickable">
          sh913738@dal.ca
        </a>
        <br />
      </p>
      {/* <div className="box">
        i'm looking for 2025 new grad swe positions! shoot me an{" "}
        <a href="mailto:sh913738@dal.com" className="clickable">
          email
        </a>{" "}
        if you are hiring &lt;3{" "}
      </div> */}
    </div>
  );
}

export default Home;
