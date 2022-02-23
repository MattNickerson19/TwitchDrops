import Header from "./Header"
import DropCarousel from "./DropCarousel";

export function PreviousDrops({drops}){
    return(
        <>
            <Header />
            <div className="PreviousDrops-padding"></div>
            <DropCarousel drops={drops} keyword={'past'}/>    
        </>
    )    
}