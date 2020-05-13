import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyTitle">
        <h4> Noe Hernandez & copy@ 05/2020 </h4>{" "}
      </div>{" "}
      <div className="repoLink">
        <a
          href=" https://nhernandez2020.github.io/Book-Finder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Respository{" "}
        </a>{" "}
      </div>{" "}
    </footer>
  );
}

export default Footer;
