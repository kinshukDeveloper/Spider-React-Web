import React from 'react';

const icons = ["instagram", "facebook", "twitter", "instagram", "twitter"];

export default function SocialMedia() {
  return (
    <section id="social-media">
      <div className="container text-center">
        <p>FIND US ON SOCIAL MEDIA</p>
        <div className="social-icons">
          {icons.map((icon, i) => (
            <a href="#" key={i}>
              <img src={`/images/${icon}.png`} alt={icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}