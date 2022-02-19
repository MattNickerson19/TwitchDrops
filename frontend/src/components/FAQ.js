import Accordion from "react-bootstrap/Accordion";


export function FAQ({question, answer}){

    return (
        <>
            <Accordion>
            <Accordion.Item eventKey="0" className="p-2 m-5 mx-auto bg-dark" style={{width: "85%"}}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body className="text-light">
                {answer}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
        
    )
}
