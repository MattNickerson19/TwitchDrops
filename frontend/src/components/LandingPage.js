import ConnectBar from "./ConnectBar"
import { DropContainer } from "./DropContainer"
import Header from "./Header"
import DropCarousel from "./DropCarousel";


const LandingPage = ({drops}) => {
  return (
      <div>
        <Header></Header>
        <ConnectBar></ConnectBar>
        <DropContainer drops={drops}></DropContainer>
        <DropCarousel drops={drops} />
      </div>
    
  )
}

export default LandingPage