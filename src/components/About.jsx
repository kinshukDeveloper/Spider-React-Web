import React from 'react';

const powers = Array(7).fill("Believe in doing business with honesty");

export default function About() {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <h1 className="title mb-4 h3 h-md2 h-lg1">Powers of Spider Man</h1>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <img
              src="/images/pngwing.com (8).png"
              alt="spidey powers"
              className="img-fluid powers"
              style={{ maxHeight: '300px' }}
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-left">
            <p className="about-title text-center text-md-left h2 h-md2 h-lg1">Unleash the spidey</p>
            <hr />
            <ul className="list-unstyled">
              {powers.map((item, i) => (
                <li key={i} className="mb-2">
                  <span role="img" aria-label="web">🕸️</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-4 text-center">
            <img
              src="/images/pngwing.com (9).png"
              alt="spidey sense"
              className="img-fluid eye"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
