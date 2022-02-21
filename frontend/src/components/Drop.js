import {Card} from 'react-bootstrap'
import clock_image from '../images/clock.png'

export function Drop({item_name, unlock_condition, streamer_name, item_icon, itemDefID}){
    return (
        <>
            <Card 
            bg='dark'  
            text='white'
            style={{ width: '18rem' }}
            >
            <Card.Img variant="top" src={item_icon} />
            <Card.Body>
                <Card.Title>{item_name}</Card.Title>
                <Card.Subtitle className='mb-2'><img src={clock_image} className='clock_image'/>{unlock_condition}</Card.Subtitle>
                <Card.Title>{streamer_name}</Card.Title>
            </Card.Body>
            </Card>
        </>
        
    )
}
