import React from 'react';

export default function Navbar() {
  const navItems = ['HOME', 'SERVICES', 'ABOUT', 'TESTIMONIALS', 'CONTACT'];

  return (
    <header id="nav-bar" className="sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark py-2">
        <div className="container">
          {/* Brand Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="/images/pngwing.com (4).png"
              alt="logo"
              className="brand-logo"
              style={{ height: '40px' }}
            />
          </a>

          {/* Hamburger Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {navItems.map((item, i) => (
                <li className="nav-item" key={i}>
                  <a className="nav-link text-white" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
