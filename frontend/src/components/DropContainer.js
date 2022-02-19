import { Drop } from "./Drop";
import { Container, Row, Col } from 'react-bootstrap'


export function DropContainer({drops = [], category}){
    //filter out only drops that match the category
    const dropBox = []
    for(let drop of drops.filter(drop => drop.drop_status === category)){
        dropBox.push(...drop.drops);
    }
    return (  
        <Container fluid='auto' className='drop_container'>
                <Row xs={1} md={2} lg={3} xl={4}>
                {dropBox.map( (drop) => {
                    return (<Col key={drop.item_name}><Drop key={drop.item_name} {...drop} /></Col> ) 
                })}
                </Row>         
        </Container>  
    );
}