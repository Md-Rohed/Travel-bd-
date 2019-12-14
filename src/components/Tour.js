import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
const tours = [{},
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "Saint-martin",
    route: "saint-martin",
    subtitle: "Beach",
    info:"dsfdfdsfsdf"
    
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "blah blah",
    title: "Sajek",
    route: "sajek",
    subtitle: "king of cloud",
    info:"fdsfsdfdsfsd"
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "blah blah",
    title: "Sunamganj",
    subtitle: "King of River",
    info: "sunamganj is a great place. <br /> new line"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "Nilgiri",
    subtitle: "King of Hill",
    info:"fdsfsdfewq"
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "AMIYAKHUM",
    subtitle: "waterfall",
    info:"fdsfsdfqwq"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Sundaraban",
    subtitle: "FOREST",
    info: "saqfgergter"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "khoiyachora",
    subtitle: "waterfall",
    info :"fsdfdsfsd"
    
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "Chandranath hill",
    subtitle: "Danger area",
    info : "iojsfq"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "Cox's Bazar",
    subtitle: "Largest sea-beach",
    info: "dsadsadq"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Bogalake Camp Site",
    subtitle: "Bandarban",
    info : "dada"
  }
];

const Tour = props => {
  const id = Number(props.location.pathname.split("/")[2])
  const {img, title, info, subtitle} = tours[id]
  
  return (
    <div className="subComponent">
      <Container>
        <section className="tour-cover item-center">
          <img src={img} alt="" />
  <h1>{title}</h1>
  <h4>{subtitle}</h4>
        </section>
        <section className="tour-info">
          <Row>
            <Col sm="8">
              <div className="tour-desc">
              <div dangerouslySetInnerHTML={{__html: info}} />
              </div>
            </Col>
            <Col sm="4">
              <div className="tour-gallery">
                <a href={imgCard1}>
                  <img src={imgCard1} alt="" />
                </a>
                <a href={imgCard2}>
                  <img src={imgCard2} alt="" />
                </a>
                <a href={imgCard3}>
                  <img src={imgCard3} alt="" />
                </a>
                <a href={imgCard4}>
                  <img src={imgCard4} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="reviews">
        <Container>
          <section className="tour-msg text-center">
            <h1>Reviews and Suggestions</h1>
            <p>We're glad to hear something from you.</p>
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message"
                  />
                </Col>
              </Row>
              <Button outline color="secondary" className="float-right">
                Submit
              </Button>
            </form>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Tour;
