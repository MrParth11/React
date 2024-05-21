import img from './tourist.webp';
// import img from './bg-hero.jpg';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import About_tour from './About_tour';
import picture from './about.jpg'
import Service from './Service';
import Destination from './Destination';
import destination from './destination-1.jpg'
import destination_2 from './destination-2.jpg'
import destination_3 from './destination-3.jpg'
import destination_4 from './destination-4.jpg'
import Package from './Package';
import Booking from './Booking';
import Footer from './Footer';
// import package_1 from './package-1.jpg'
// import package_2 from './package-2.jpg'
// import package_3 from './package-3.jpg'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About_tour/>
      <Service/>
      <Destination/>
      <Package/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;
