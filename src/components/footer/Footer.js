import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {PortfolioContext} from "../../contexts/PortfolioContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const {isEnglish} = useContext(PortfolioContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(isEnglish ? "Made with ❤️ by Me with help of " : "Feito com ❤️ por mim com ajuda do ")}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            {isEnglish ? "DeveloperFolio Team" : "Time DeveloperFolio"}
          </a>
        </p>
      </div>
    </Fade>
  );
}
