import { useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Timer = ({drops}) => {
    const currentDrop = drops.filter(drop => drop.drop_status === "current");
    let timeLeft = {}

    const calculateRemainingTime = () => { 
        //parse the date from currentDrop 
        const endString = currentDrop[0].end_date;
        let endDropYear = parseInt(endString.slice(6));
        let endDropMonth = parseInt(endString.slice(3, 5).trim());
        let endDropDay = parseInt(endString.slice(0, 2).trim());
    
        //make date objects and subtract to get the difference
        let endDate = new Date(endDropYear, (endDropMonth -1), endDropDay);
        let currentDate = new Date();
        let difference = endDate - currentDate;
        
        //fill timeLeft variable with values
        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft;
    }
 
    const [countdown, setCountdown] = useState(calculateRemainingTime());

    useEffect(() => {
        const timer = setTimeout(() => {
          setCountdown(calculateRemainingTime());
        }, 1000);
        return () => clearTimeout(timer);
      });
   
  return (
    <Container fluid='auto' className='timer'>
        <Row>
        <Col><h1>{currentDrop[0].name}</h1></Col>
        </Row>
        <Row className='timer_row'>
            <Col><p>DAYS:</p></Col>
            <Col><p>{timeLeft.days}</p></Col>
            <Col><p>HOURS:</p></Col>
            <Col><p>{timeLeft.hours}</p></Col>
            <Col><p>MINUTES:</p></Col>
            <Col><p>{timeLeft.minutes}</p></Col>
            <Col><p>SECONDS:</p></Col>
            <Col><p>{timeLeft.seconds}</p></Col>
        </Row>
    </Container>
  )
}

export default Timer