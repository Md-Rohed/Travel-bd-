import React, { Component } from "react";
import { Container, Row, Col, Button , Badge , CardColumns } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
const beach = [
    {
      id: 1,
      category: ["resort", "honeymoon"],
      img: imgCard1,
      alt: "blah blah",
      title: "test ",
      subtitle: "Beach",
      info : "daddad"
      
    }
]
const itemCategories = [
    "all",
    "beach",
    "mountain",
    "resort",
    "climbing",
    "camping",
    "honeymoon"
  ];
  
  class Beach extends Component {
    state = {
      cards: [],
      category: "all"
    };
  
    componentDidMount() {
      this.setState({ cards: beach });
    }
  
    render() {
      const { cards, category } = this.state;
      return (
        <div className="subComponent-lg" id="packageBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>Tourist Place </h1>
              <p>A Great Collection of tourist place</p>
            </header>
            <section className="packageBody text-center">
              {itemCategories.map((badge, index) => (
                <Badge
                  key={index}
                  href=""
                  color={badge === category ? "dark" : "light"}
                  onClick={() => this.setState({ category: badge })}
                >
                  {badge}
                </Badge>
              ))}
  
              <Row className="text-left">
                <CardColumns>
                  {category !== "all"
                    ? cards.map(tourcard => {
                        return tourcard.category.map(catItem => {
                          return catItem === category ? (
                            <TourCard key={tourcard.id} tourcard={tourcard} />
                          ) : null;
                        });
                      })
                    : cards.map(tourcard => (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ))}
                </CardColumns>
              </Row>
            </section>
          </Container>
        </div>
      );
    }
  }

  
const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard1} alt="" />
        <h1>Seaside Resort</h1>
        <h4>Batangas Resort</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                           Rohed tttttdadsad
              </p>
              <p>
                Morbi facilisis, odio vitae egestas pretium, mauris tortor
                vulputate dolor, non interdum nunc tellus at dolor. Donec
                condimentum et augue vitae volutpat. Fusce vitae laoreet sem.
                Integer a justo sit amet nibh vehicula blandit. Suspendisse
                faucibus venenatis egestas. In vulputate sapien sit amet ligula
                vulputate, in consequat ex molestie. Curabitur hendrerit
                pulvinar vehicula. Phasellus quis posuere tortor. Cras&&
                pellentesque vehicula dui nec fermentum. Sed venenatis nunc
                justo. Quisque metus est, volutpat quis scelerisque in,
                fermentum sed lacus. Sed sed pretium massa. Aenean imperdiet
                molestie turpis at egestas.
              </p>
              </div>
            </Col>
            </Row>
            </section>
          </Container>
          </div>
          );
  
  export default Beach;