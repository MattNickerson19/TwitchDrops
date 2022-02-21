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

    let carouselTitle = "";

    //exclude all but the past drops
    const dropBox = []
    for(let drop of drops.filter(drop => drop.drop_status === "past")){
        dropBox.push(...drop.drops);
    }

    for(drops in dropBox){
        if(drops.drop_status === "past"){
            carouselTitle = "PREVIOUS DROPS"
            console.log("PAST")
            console.log(carouselTitle)
        }else if(drops.drop_status === "future"){
            carouselTitle = "FUTURE DROPS"
            console.log("FUTURE")
            console.log(carouselTitle)
        }
    }
    console.log(carouselTitle)
    
    
  return (
   
    <>
        <Row className="carousel-title-row">
            <Col className="carousel-title-left-wrapper"></Col>
            <Col className="carousel-title-banner">       
                <strong className="carousel-title">PREVIOUS DROPS</strong>
            </Col>
            <Col className="carousel-title-right-wrapper"></Col>
        </Row>
        <Row>
            <Col className="leftSide-column" md={2}>
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
            <Col className="rightSide-column" md={2}>
            <img className="rightSide-carousel-image" src={RightSideImage} />
            </Col>
        </Row>
        <footer className="footer">
            <br/><br/><br/>
        </footer>
    </>    
    
  );
}




