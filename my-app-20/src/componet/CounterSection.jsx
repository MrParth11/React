import React, { useState, useEffect } from 'react';

const CounterSection = () => {
  const [worksCompleted, setWorksCompleted] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);

  // Function to animate counter incrementally
  const animateCounter = (start, end, duration, setStateFunction) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setStateFunction(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    animateCounter(0, 450, 1000, setWorksCompleted);
    animateCounter(0, 25, 1000, setYearsOfExperience);
    animateCounter(0, 550, 1000, setTotalClients);
    animateCounter(0, 48, 1000, setAwardsWon);
  }, []);

  return (
    <div className="section-counter paralax-mf bg-image" style={{ backgroundImage: "url(assets/img/counters-bg.jpg)" }}>
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-check"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter">{worksCompleted}</p>
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-journal-richtext"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter">{yearsOfExperience}</p>
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-people"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter">{totalClients}</p>
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-award"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter">{awardsWon}</p>
                <span className="counter-text">AWARD WON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
