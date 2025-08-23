import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting, greetingPT } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { PortfolioContext } from "../../contexts/PortfolioContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  const { isEnglish } = useContext(PortfolioContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {isEnglish ? greeting.title : greetingPT.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {isEnglish ? greeting.subTitle : greetingPT.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={isEnglish ? 'Contact me' : 'Entre em contato'} href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={isEnglish ? "https://docs.google.com/document/d/1gDXsNAsVlGyfvRpF1eme7Cn3pcPkGkatoP7w8ZkKFOQ/edit?usp=sharing" :
                      "https://docs.google.com/document/d/1WquxpxYFTLy-ANytvpGc25RVBrGU0x3RmVoJnGvyhTI/edit?usp=sharing"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text={isEnglish ? 'Download my resume' : 'Meu currículo'} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
