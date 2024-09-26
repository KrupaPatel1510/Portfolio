import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
         <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          <p>I’m Krupa, a front-end designer dedicated to transforming ideas into engaging digital experiences.My design philosophy emphasizes usability and aesthetics, ensuring every project not only meets but exceeds client expectations. I am passionate about staying at the forefront of industry trends and technologies, continuously refining my skills to deliver innovative solutions.</p>
          <p>Driven by a love for design and a commitment to excellence, I bring creativity and technical expertise to every project. Whether collaborating with teams or working independently, I approach each task with enthusiasm and attention to detail.</p>
         
        </div>
        
        {/* <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div> */}
      </div>
  );
}
