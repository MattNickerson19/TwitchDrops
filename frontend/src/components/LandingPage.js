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
        <Footer></Footer>
      </div> 
  )
}

export default LandingPage