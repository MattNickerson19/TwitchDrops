import React from "react";
import Carousel from "react-elastic-carousel";
import { Drop }from "./Drop";
import { Row, Col } from "react-bootstrap";
import LeftSideImage from "../images/Hero_shot_hunter.png";
import RightSideImage from "../images/Hero_shot_weasel.png";



export default function DropCarousel({drops}){

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];

    //exclude all but the past drops
    const dropBox = []
    for(let drop of drops.filter(drop => drop.drop_status === "past")){
        dropBox.push(...drop.drops);
    }
    
  return (
   
    <>
        <Row>
            <Col className="carousel-title-banner">
                <div className="carousel-title">
                    <strong>PREVIOUS DROPS</strong>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="bg-black" md={2}>
                <img className="leftSide-carousel-image" src={LeftSideImage} />
            </Col>
            <Col className="DropCarousel">
                <div className="carousel-border">
                    <Row className="carousel-wrapper">
                        <Carousel breakPoints={breakPoints}>
                            {dropBox.map((drop) => (
                            <Drop key={drop.item_name} {...drop} />
                            ))}
                        </Carousel>
                    </Row>
                </div>
            </Col>
            <Col className="bg-black" md={2}>
            <img className="rightSide-carousel-image" src={RightSideImage} />
            </Col>
        </Row>
        <footer className="footer">
            <br/><br/><br/>
        </footer>
    </>    
    
  );
}




