import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render([...Array[4]].map(() => { return (<App />) }), document.getElementById("root"));
// [...Array(4)].map(() => <Counter />)
ReactDOM.render([...Array(4)].map(() => { return <App /> }), document.getElementById("root"));