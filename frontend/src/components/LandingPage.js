import ConnectBar from "./ConnectBar"
import { DropContainer } from "./DropContainer"
import Header from "./Header"
import DropCarousel from "./DropCarousel";


const LandingPage = ({drops}) => {
  return (
      <div className="landing">
        <Header></Header>
        <ConnectBar></ConnectBar>
        <DropContainer drops={drops} category={"current"}></DropContainer>
        <DropCarousel drops={drops} />
      </div>
    
  )
}

export default LandingPage