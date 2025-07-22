import React from 'react';

export default function Banner() {
  return (
    <section
      id="banner"
      className="bg-dark text-white position-relative overflow-hidden h-screen-full"
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* === Left Column === */}
          <div className="col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
            <h1 className="promo-title mb-3">Best Spider-Man Ever</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              similique aperiam cupiditate ex alias vel quas dicta labore.
            </p>

            <a
              href="#"
              className="btn btn-danger d-inline-flex align-items-center mb-4"
            >
              <img
                src="/images/pngwing.com.png"
                alt="Play"
                className="mr-2"
                style={{ height: '30px' }}
              />
              Watch Movies
            </a>

            <div className="scrolling-marquee bg-secondary rounded px-3 py-1">
              <div className="marquee-text">
                This is the best ever Spider-Man franchise.
              </div>
            </div>
          </div>

          {/* === Right Column === */}
          <div className="col-12 col-md-6 text-center">
            <img
              className="img-fluid"
              src="/images/pngwing.com (3).png"
              alt="Spider-Man"
              style={{
                maxHeight: '350px',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>

      {/* === Bottom Curve SVG === */}
      <div
        className="position-absolute w-100"
        style={{ bottom: 0, left: 0, zIndex: 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,234.7C672,235,768,181,
             864,165.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,
             1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320,
             192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
