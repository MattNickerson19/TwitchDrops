import {Button, Container, Col, Row, Image} from 'react-bootstrap'

const ConnectBar = () => {
  return (
    <Container className='connect_bar' fluid={true}>
        <Row>
            <Col xs={2}>
                <Image className="connect_bar_image" rounded="true" src='https://blog.twitch.tv/assets/uploads/generic-email-header-1.jpg'/>
            </Col>
            <Col xs={2}>
                <Image className="connect_bar_image" rounded="true" src='https://i.ytimg.com/vi/VJVVT5dJ6v4/maxresdefault.jpg'/>
            </Col>
            <Col>
                <a href="/ConnectPage"><h1>Connect Accounts</h1></a>
            </Col>

        </Row>
    </Container>
    
  )
}

export default ConnectBar