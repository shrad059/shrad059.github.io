import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "resume";
  }, []);

  return (
    <div>
      <p>here's my resume（˶′◡‵˶）</p>
      <hr class="dashed" />

      <iframe
        // src="https://drive.google.com/file/d/1FSB4Da5LWI-cA_hx4cC6kCoX0Srxz3oA/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Shraddha_Singh_Resume.pdf"
        download="/Shraddha_Singh_Resume.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
