import React from 'react';

const icons = ['instagram', 'facebook', 'twitter'];

export default function SocialMedia() {
  return (
    <section id="social-media" className="py-5 ">
      <div className="container text-center">
        <p className="lead font-weight-bold mb-4">FIND US ON SOCIAL MEDIA</p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          {icons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="social-icon-link"
              aria-label={`Find us on ${icon}`}
            >
              <img
                src={`/images/${icon}.png`}
                alt={`${icon} icon`}
                className="social-icon-img"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
