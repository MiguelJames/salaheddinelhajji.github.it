import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salah eddine el hajji </span>
            from <span className="purple"> Rabat, Morocco.</span>
            <br />
            I am currently a student.
            <br />
            I study IT development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing
            </li>
            <li className="about-activity">
              <ImPointRight /> taking my dog on a ride
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Salah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
