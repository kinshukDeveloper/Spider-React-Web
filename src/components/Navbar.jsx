import React from 'react';

export default function Navbar() {
  return (
    <section id="nav-bar">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <img src="/images/pngwing.com (4).png" className="brand-logo" alt="logo" />
          </a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {["HOME", "SERVICES", "ABOUT", "TESTIMONIALS", "CONTACT"].map((item, i) => (
                <li className="nav-item" key={i}>
                  <a className="nav-link text-white" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}