import Card from './components/card';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Card food="pizza" cal="97" />
        <Card food="pani puri" cal="10" />
        <Card food="burger" cal="59" />
        <Card food="coke" cal="200" />
      </div>
    </div>
  );
}

export default App;
