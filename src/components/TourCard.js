import React from "react";
import { navigate  } from "@reach/router";


import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

const TourCard = ({ tourcard }) => {
  const { img, alt, title, subtitle, info } = tourcard;
  const handleClick = linkData => {
    return (
      navigate(`/tour/${linkData.id}`,{ newId: linkData.id })
    );
  };

  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <Button
          outline
          color="secondary"
          className="float-right"
          onClick={() => handleClick(tourcard)}
        >
          Read more
        </Button>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;
