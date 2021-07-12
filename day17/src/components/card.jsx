import '../card.css'

const card = (props) => {

    return (
        <div className="card">
            <h1>{props.food}</h1>
            <p>You are in-taking {props.cal} calories, Be wise !!</p>
        </div>
    )
}

export default card;