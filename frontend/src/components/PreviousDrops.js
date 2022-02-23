import Header from "./Header"
import DropCarousel from "./DropCarousel";

export function PreviousDrops({drops}){

    const dropBox = drops.filter(drop => drop.drop_status === 'past');
    
    return(
        <>
            <Header />
            <div className="PreviousDrops-padding"></div>
            {dropBox.map(drop =>{
                return (<DropCarousel 
                        key={drop.name} 
                        title={drop.name}
                        drops={drop.drops} 
                        start_date={drop.start_date}
                        end_date={drop.end_date}/>)
            })}
                
        </>
    )    
}