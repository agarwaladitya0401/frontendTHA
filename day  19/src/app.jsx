import React, { useState } from "react";
import "./styles.css";


// console.log(box);

function App() {

    let [count, setCount] = useState(0);

    return (

        <div className="App">

            <h1>{count}</h1>
            <button onClick={() => (
                setCount(count + 1)
            )} >inc-me</button>
        </div >
    );
}

export default App;