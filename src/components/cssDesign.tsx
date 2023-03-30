import "../styles/design.css";
import travel1 from "../images/travel1.jpg";
import travel2 from "../images/travel2.jpg";
import travel3 from "../images/travel3.jpg";
import travel5 from "../images/travel5.jpg";
import travel from "../images/travel.png";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import { useState } from "react";

function CssDesign() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="body">
      <div className="dropdownMenu">
        <div className="travelDiv">
          {" "}
          <img src={travel} className="travelImage" alt="travel"/>
        </div>
        <div className="menu" onClick={() => setDropdown(!dropdown)}>
          <div className="bar-default" />
          <div className="bar-default" />
          <div className="bar-default" />
        </div>
        {dropdown ? (
          <div className="dropdown">
            <ul>
              <li>School</li>
              <li>About Us</li>
              <li>Our Camp</li>
              <li>Activities</li>
              <li>Contact Us</li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="container">
        <div>
          <div className="leftSide">
            <div className="leftNav">
              <div className="navItem">School</div>
              <div className="navItem">About Us</div>
              <div className="navItem">Our Camp</div>
            </div>
            <div className="summary">
              WE CREATE TRAVELS THAT FEEL LIKE REAL ADVENTURES - IN MOST
              EXCITING EARTH'S CORNERS
            </div>
            <div className="exploreText">Explore</div>
          </div>
          <div></div>
          <div className="rightSide">
            <div className="rightNav">
              <div className="navItem">Activities</div>
              <div className="navItem">Contact Us</div>
              <div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="avatar">
              <div className="avatar1">
                <img src={user1} className="avatarImage" alt="user1"/>
              </div>
              <div className="avatar2">
                <img src={user2} className="avatarImage" alt="user2"/>
              </div>
              <div className="avatar3">
                <img src={user3} className="avatarImage" alt="user3"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mission">
        <div className="travelImages">
          <div className="experience">
            <div className="missionText">OUR MISSION</div>
            <div className="travelExp">
              Travel experience with a positive impact
            </div>
            <div className="button">
              <span className="buttonText">How to Start</span>
            </div>
          </div>
          <div className="images">
            <div className="travelImg">
              {" "}
              <img src={travel1} className="image1" alt="travel1"/>
            </div>
            <div className="travelImg">
              {" "}
              <img src={travel2} className="image1" alt="travel2"/>
            </div>
            <div className="travelImg">
              {" "}
              <img src={travel3} className="image1" alt="travel3"/>
            </div>
            <div className="travelImg">
              {" "}
              <img src={travel5} className="image1" alt="travel5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssDesign;
