import React from 'react';

const services = [
  { img: 'left.png', title: 'spidey games' },
  { img: 'center.png', title: 'spidey toys' },
  { img: 'right.png', title: 'spidey movies' }
];

export default function Services() {
  return (
    <section id="service" className="py-5">
      <div className="container text-center">
        <h1 className="title mb-4 h3 h-md2 h-lg1">SPIDEY PRODUCTS</h1>

        <div className="row">
          {services.map(({ img, title }, index) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm py-4 px-3">
                <img
                  src={`/images/${img}`}
                  className="service-img mx-auto mb-3"
                  alt={title}
                  style={{
                    maxHeight: '100px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title text-uppercase mb-2">{title}</h4>
                  <p className="card-text text-muted small">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eaque fuga veritatis dolorum impedit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-4 px-4 py-2">All Services</button>
      </div>
    </section>
  );
}
