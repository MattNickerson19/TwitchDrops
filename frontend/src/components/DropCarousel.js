import React from "react";
import Carousel from "react-elastic-carousel";
import { Drop }from "./Drop";
import { Row, Col } from "react-bootstrap";
import LeftSideImage from "../images/Hero_shot_hunter.png";
import RightSideImage from "../images/Hero_shot_weasel.png";



export default function DropCarousel({drops, title, start_date, end_date}){

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

  return (
   
    <>
        <Row className="carousel-title-row">
            <Col className="date_column"><p>START</p>{start_date}</Col>
            <Col className="carousel-title-banner">       
                <h1 className="carousel-title">{title}</h1>
            </Col>
            <Col className='date_column'><p>END</p>{end_date}</Col>
        </Row>
        <Row>
            <Col className="leftSide-column" md={2}>
                <img alt='a hunter' className="leftSide-carousel-image" src={LeftSideImage} />
            </Col>
            <Col className="DropCarousel">
                <div className="carousel-border">
                    <Row className="carousel-wrapper">
                        <Carousel breakPoints={breakPoints}>
                            {drops.map((drop) => (
                            <Drop key={drop.item_name} {...drop} />
                            ))}
                        </Carousel>
                    </Row>
                </div>
            </Col>
            <Col className="rightSide-column" md={2}>
            <img alt='a man holding a coffee cup' className="rightSide-carousel-image" src={RightSideImage} />
            </Col>
        </Row>
        <footer className="footer">
            <br/><br/><br/>
        </footer>
    </>    
    
  );
}




