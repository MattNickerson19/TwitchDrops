import {Button, Container, Col, Row} from 'react-bootstrap'

const ConnectBar = () => {
  return (
    <Container className='connect_bar' fluid={true}>
        <Row>
            <Col xs={2}>
                <img className="twitch_logo" src='https://blog.twitch.tv/assets/uploads/generic-email-header-1.jpg'/>
            </Col>
            <Col xs={2}>
                <Button  variant='outline-success'>Connect</Button>
            </Col>
            <Col>
                <h1>Connect Accounts</h1>
            </Col>
        </Row>
    </Container>
    
  )
}

export default ConnectBar