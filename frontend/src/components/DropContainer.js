import { Drop } from "./Drop";


export function DropContainer({drops = []}){
    return (
        <>
            {drops.map( (drop)=> {
                return (<Drop key={drop.item_name} {...drop} /> ) 
            })}
        </>
    );
}