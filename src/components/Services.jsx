import React from 'react';

const services = [
  { img: "left.png", title: "spidey games" },
  { img: "center.png", title: "spidey toys" },
  { img: "right.png", title: "spidey movies" }
];

export default function Services() {
  return (
    <section id="service">
      <div className="container text-center">
        <h1 className="title">SPIDEY PRODUCTS</h1>
        <div className="row text-center">
          {services.map(({ img, title }, i) => (
            <div className="col-md-4 services" key={i}>
              <img src={`/images/${img}`} className="service-img img-fluid" alt={title} />
              <h4>{title}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mb-5">All Services</button>
      </div>
    </section>
  );
}