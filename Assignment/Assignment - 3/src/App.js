import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
