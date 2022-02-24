import { FaqContainer } from "./FaqContainer"
import Header from "./Header"


export function FaqPage ({faqs}){
  return (
      <div style={{height:"100vh", backgroundColor:"#665A93"}}>
        <Header></Header>
        <FaqContainer faqs={faqs}></FaqContainer>
      </div>
    
  )
}

