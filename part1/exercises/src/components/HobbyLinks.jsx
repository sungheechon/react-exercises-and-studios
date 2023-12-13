

const HobbyLinks = () => {
    let hobbyLinks = ["https://www.fountainpennetwork.com/forum/", "https://www.sushmahegde.com"];
    return (
        <div>
            <h3>My Hobbies:</h3>
            <p><a href={hobbyLinks[0]}>Fountain Pens</a></p>
            <p><a href={hobbyLinks[1]}>Watercolor</a></p>
        </div>
    )
}


export default HobbyLinks;