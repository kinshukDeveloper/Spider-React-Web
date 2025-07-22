import React from 'react';

const testimonials = [
  {
    img: 'pngwing.com (3).png',
    name: 'Spidey (Earth 6061)',
    role: 'Co-founder at XYZ',
    text: 'Spider-Man was absolutely spectacular! Great attitude, insane agility, and saved our tech launch.'
  },
  {
    img: 'pngwing.com (8).png',
    name: 'Spidey (Earth 432)',
    role: 'Director at XYZ',
    text: 'With great power comes great testimonials. Truly the best hero-client experience I’ve had.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h1 className="title text-center mb-5">WHAT CLIENTS SAY</h1>
        <div className="row justify-content-center">
          {testimonials.map(({ img, name, role, text }, i) => (
            <div
              className="col-12 col-md-5 mb-4 mx-2 p-4 testimonials text-center text-md-left bg-white shadow-sm rounded"
              key={i}
            >
              <p className="mb-3">{text}</p>
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <img
                  src={`/images/${img}`}
                  alt={name}
                  className="rounded-circle"
                  style={{ height: '60px', width: '60px', objectFit: 'cover' }}
                />
                <div className="user-details text-left ml-3">
                  <strong>{name}</strong>
                  <br />
                  <small>{role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
