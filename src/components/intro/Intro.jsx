import "./intro.scss"
import profile_pic from "../../assets/profile_pic.jpg"
import down from "../../assets/down.png"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Traveling", "Awesome", "Dorky"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={profile_pic} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1>Hyunjae Song</h1>
          <h3>
           <span ref={textRef}></span> Software Engineer
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}
