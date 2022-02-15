import {Nav, Navbar} from 'react-bootstrap'
import white_logo from '../images/white_logo.png'
import 'bootstrap/dist/css/bootstrap.css'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand={false}>
        <Navbar.Brand>
            <img className='header_logo' src={white_logo}/>
            Project Winter Twitch Drops
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='menu'/>
        <Navbar.Collapse id='menu'>
            <Nav>
                <Nav.Link href="#">Previous Drops</Nav.Link>
                <Nav.Link href="#">Future Drops</Nav.Link>
                <Nav.Link href="#">Connect</Nav.Link>
                <Nav.Link href="#">Official Site</Nav.Link>
            </Nav>
        </Navbar.Collapse>

        
    </Navbar>  
    
  )
}

export default Header