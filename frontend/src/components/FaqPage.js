import { FaqContainer } from "./FaqContainer"
import Header from "./Header"


export function FaqPage ({faqs}){
  return (
      <div>
        <Header></Header>
        <FaqContainer faqs={faqs}></FaqContainer>
      </div>
    
  )
}

