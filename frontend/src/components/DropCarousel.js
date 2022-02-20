import React from "react";
import Carousel from "react-elastic-carousel";
import { Drop }from "./Drop";
import { Row, Col } from "react-bootstrap";



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
            <Col className="carousel-title-banner"><strong className="carousel-title">PREVIOUS DROPS</strong></Col>
        </Row>
        <Row>
            <Col className=" bg-black" md={2}></Col>
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
            <Col className="bg-black" md={2}></Col>
        </Row>
    </>    
    
  );
}




