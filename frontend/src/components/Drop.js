
export function Drop({item_name, unlock_condition, streamer_name, item_icon, itemDefID}){

    return (
        <>
            <h1>Name: {item_name}</h1>
            <h1>Watch Time: {unlock_condition}</h1>
            <h1>Streamer: {streamer_name}</h1>
            <a><img src={item_icon}/></a>
        </>
        
    )
}