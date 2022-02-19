import { FaqContainer } from "./FaqContainer"
import Header from "./Header"


export function FaqPage ({faqs}){
  return (
      <div className="bg-secondary" style={{height:"100vh"}}>
        <Header></Header>
        <FaqContainer faqs={faqs}></FaqContainer>
      </div>
    
  )
}

