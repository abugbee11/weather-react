import { SpinnerCircular } from 'spinners-react';
import './App.css';
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
<h1>Hello, World!!!</h1>
<Weather city="Los Angeles"/>
<SpinnerCircular />
      </header>
    </div>
  );
}

export default App;
