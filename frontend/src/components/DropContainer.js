import { Drop } from "./Drop";
import { Container, Row, Col } from 'react-bootstrap'


export function DropContainer({drops = []}){
    //filter out only current drops
    let currentDrops = drops.filter(drop => drop.drop_status === "current");
    return (  
            <Container fluid='auto'>
                
                    <Row xs={1} md={2} lg={3} xl={4}>
                    {currentDrops.map( (drop) => {
                        return (<Col key={drop.item_name}><Drop key={drop.item_name} {...drop} /></Col> ) 
                    })}
                    </Row>
                             
            </Container>  
    );
}