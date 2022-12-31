import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/ayush__tr/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ayush-tripathi-0865a41ab"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/SpecterHunt"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
