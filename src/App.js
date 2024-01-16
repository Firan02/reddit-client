import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title2 = 'Reddit - React App';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>{title2}</p>
      </div>
    </div>
  );
}

export default App;
