import { useState } from 'react';
import "./styles.css";



// console.log(box);

const Todo = ({ list, todo, index, setTodos }) => {


    return (

        <div >
            <h2 className="todo">{todo}</h2>
            <button onClick={(e) => {
                list = list.filter((el, i) =>
                    i !== index
                );

                setTodos(list);
            }} >delete</button>

        </div >
    );
};

function App() {

    let [todos, setTodos] = useState([]);
    // const [count, setCount] = useState(0);
    let [value, setVal] = useState("");

    // console.log(useState(0));

    return (

        <div className="container">
            <div className="App">
                <h1>Todo-List</h1>
                <input type="text" onChange={
                    (e) => {
                        value = e.target.value;
                        setVal(value);
                        console.log(value);
                    }
                } value={value}></input>
                <button onClick={
                    (e) => {
                        if (value === "") {
                            return;
                        }
                        todos = [...todos, value]
                        setTodos(todos);
                        setVal("");
                    }
                } >Add</button>

                {

                    todos.map((item, index) => (
                        <Todo list={todos} todo={item} key={index} index={index} setTodos={setTodos}></Todo>
                    ))
                }
            </div >
        </div>
    );
}

export default App;