import { FAQ } from "./FAQ";


export function FaqContainer({faqs = []}){
    return (
        <>
            
            {faqs.map( (faq, i)=> {
                return (<FAQ key={i} {...faq} /> ) 
            })}
            
        </>
    );
}