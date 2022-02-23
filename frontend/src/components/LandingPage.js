import ConnectBar from "./ConnectBar"
import { DropContainer } from "./DropContainer"
import Header from "./Header"
import DropCarousel from "./DropCarousel"
import Timer from './Timer'
import Footer from './Footer'

const LandingPage = ({drops}) => {
  return (
      <div className="landing">
        <Header></Header>
        <ConnectBar></ConnectBar>
        <Timer drops={drops}></Timer>
        <DropContainer drops={drops} category={"current"}></DropContainer>
        <DropCarousel drops={drops} keyword='past'/>
        <Footer></Footer>
      </div> 
  )
}

export default LandingPage