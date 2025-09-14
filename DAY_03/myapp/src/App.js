import logo from './logo.svg';
import './App.css';

const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 28 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Mobile app with react 
        
        </p>
        <h3>Created By : Fathima Azha</h3>
         
        
      </header>
    </div>
  );
}

export default App;
