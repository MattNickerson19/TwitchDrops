import {Button, Container, Col, Row, Image} from 'react-bootstrap'

const ConnectBar = () => {
  return (
    <Container className='connect_bar' fluid={true}>
        <Row>
            <Col>
                <h1>Connect Accounts</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
                <Button variant='warning' size='xxl' style={{
                    backgroundImage: 'url(https://blog.twitch.tv/assets/uploads/generic-email-header-1.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '70px',
                    width: '180px',
                    marginTop: '0'
                }}></Button>
                
            </Col>  
            <Col>

            </Col>
            <Col>
            <Button variant='warning' size='xxl' style={{
                    backgroundImage: 'url(https://i.ytimg.com/vi/VJVVT5dJ6v4/maxresdefault.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '70px',
                    width: '180px',
                    marginTop: '0'
                }}></Button>

            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
    
  )
}

export default ConnectBar