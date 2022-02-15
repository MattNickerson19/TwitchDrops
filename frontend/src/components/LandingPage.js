import { DropContainer } from "./DropContainer"
import Header from "./Header"


const LandingPage = ({drops}) => {
  return (
      <div>
        <Header></Header>
        <DropContainer drops={drops}></DropContainer>
      </div>
    
  )
}

export default LandingPage