import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">Xpense🎫.</div>
        <div className="header-button">
          <a
            href="https://github.com/Shreya241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original"></i>Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
