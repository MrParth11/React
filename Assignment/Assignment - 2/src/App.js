import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from './logo.svg';
import './App.css';
import Big_header from './Big_header';
import Logo from "./Logo";
import img01 from '../src/liabrary/client-1.png'
import img02 from '../src/liabrary/client-2.png'
import img03 from '../src/liabrary/client-3.png'
import img04 from '../src/liabrary/client-4.png'
import img05 from '../src/liabrary/client-5.png'
import img06 from '../src/liabrary/client-6.png'
import About from "./About";
import Counter from "./Counter";
import Services from "./Services"
import Features from "./Features";
import features01 from '../src/liabrary/features-light-1.jpg'
import features02 from '../src/liabrary/features-light-2.jpg'
import features03 from '../src/liabrary/features-light-3.jpg'
import Pricing from "./Pricing";
import Team from "./Team";
import Call from "./Call";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Big_header/>
      <Logo/>
      <About/>
      <Counter/>
      <Services/>
      <Features/>
      <Pricing/>
      <Team/>
      <Call/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
