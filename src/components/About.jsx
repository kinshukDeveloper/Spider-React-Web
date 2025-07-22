import React from 'react';

const powers = Array(7).fill("Believe in doing business with honesty");

export default function About() {
  return (
    <section id="about-us">
      <div className="container">
        <h1 className="title text-center">Powers of Spidey</h1>
        <div className="row">
          <div className="col-md-3">
            <img src="/images/pngwing.com (8).png" alt="powers" className="powers" />
          </div>
          <div className="col-md-5 about-us">
            <p className="about-title text-center">Unleash the spidey</p>
            <hr />
            <ul className="text-center" style={{ listStyle: 'none' }}>
              {powers.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="col-md-4">
            <img src="/images/pngwing.com (9).png" alt="eye" className="eye" />
          </div>
        </div>
      </div>
    </section>
  );
}