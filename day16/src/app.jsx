import Card from "./components/card";
import "./styles.css";

let box = [];
for (let i = 0; i < 8; i++) {

    box.push(<Card />);
}
function app() {
    return (



        <div className="App">
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>
            <div className="col">
                {box}
            </div>

        </div>
    );
}

export default app;