import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class Header extends Component {
  render() {
    // Define carousel items
    const items = [
      <img style={{ width: '100%'}} src="img/carousel-1.jpg" alt="" />,
      <img style={{ width: '100%'}} src="img/carousel-2.jpg" alt="" />
    ];

    return (
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
            <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
          </div>
          <div className="col-md-6 animated fadeIn ">
        
            <AliceCarousel className="owl-carousel-item"
              items ={items}
              responsive={{
                0: { items: 1 },
              }}
              autoPlay
              autoPlayInterval={3000} 
              infinite
              controlsStrategy="responsive"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;