
import Accordion from "react-bootstrap/Accordion";

export function FAQ({question, answer}){

    return (
        <>
            <Accordion >
            <Accordion.Item eventKey="0" className="p-2 m-3 mx-auto" style={{width: "85%"}}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>
                {answer}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
        
    )
}