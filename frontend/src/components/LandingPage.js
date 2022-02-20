import ConnectBar from "./ConnectBar"
import { DropContainer } from "./DropContainer"
import Header from "./Header"
import DropCarousel from "./DropCarousel"
import Timer from './Timer'

const LandingPage = ({drops}) => {
  return (
      <div className="landing">
        <Header></Header>
        <ConnectBar></ConnectBar>
        <Timer drops={drops}></Timer>
        <DropContainer drops={drops} category={"current"}></DropContainer>
        <DropCarousel drops={drops} />
      </div>
    
  )
}

export default LandingPage