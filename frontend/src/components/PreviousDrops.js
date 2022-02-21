import ConnectBar from "./ConnectBar"
import Header from "./Header"
import DropCarousel from "./DropCarousel";
import { Row, Col } from "react-bootstrap";



export function PreviousDrops({drops}){
    return(
        <>
            <Header />
            <ConnectBar />
            <DropCarousel drops={drops} />
        </>
    )    
}