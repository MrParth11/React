import React from 'react';

import { BiBriefcase, BiCardChecklist, BiBarChart, BiBinoculars, BiBrightnessHigh, BiCalendar4Week } from 'react-icons/bi';
// Import necessary icons

const Services = () => {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <ServiceItem icon={<BiBriefcase />} title="Web Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." />
          <ServiceItem icon={<BiCardChecklist />} title="Web Development" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." />
          <ServiceItem icon={<BiBarChart />} title="Photography" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." />
          <ServiceItem icon={<BiBinoculars />} title="Responsive Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." />
          <ServiceItem icon={<BiBrightnessHigh />} title="Graphic Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." />
          <ServiceItem icon={<BiCalendar4Week />} title="Marketing Services" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident." />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="service-box">
        <div className="service-ico">
          <span className="ico-circle">{icon}</span>
        </div>
        <div className="service-content">
          <h2 className="s-title">{title}</h2>
          <p className="s-description text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
