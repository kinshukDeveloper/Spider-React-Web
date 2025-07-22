import React from 'react';

const testimonials = [
  { img: "pngwing.com (3).png", name: "Spidey(Earth 6061)", role: "Co-founder at xyz" },
  { img: "pngwing.com (8).png", name: "Spidey(Earth 432)", role: "Director at xyz" }
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <h1 className="title text-center">WHAT CLIENTS SAY</h1>
        <div className="row offset-1">
          {testimonials.map(({ img, name, role }, i) => (
            <div className="col-md-5 testimonials" key={i}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
              <img src={`/images/${img}`} alt={name} />
              <p className="user-details">
                <b>{name}</b><br />{role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}