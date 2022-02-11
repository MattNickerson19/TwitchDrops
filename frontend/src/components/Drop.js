
export function Drop({name, timeRequired, streamerName, image, itemDefID}){

    return (
        <>
            <h1>Name: {name}</h1>
            <h1>Watch Time: {timeRequired}</h1>
            <h1>Streamer: {streamerName}</h1>
            <img src={image}/>
        </>
        
    )
}