import React from 'react';

export default function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-md-6">
            <h1 className="text-white promo-title">Best Spider Man Ever</h1>
            <p className="text-white lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora similique aperiam cupiditate ex alias vel quas dicta labore.
            </p>
            <a href="#">
              <img className="play-btn" src="/images/pngwing.com.png" alt="play button" /> Watch Movies
            </a>
            <div className="row">
              <div className="col-md">
                <marquee className="marquee" behavior="scroll" direction="right">
                  This is the best ever spider man franchise.
                </marquee>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6">
            <img
              className="img-fluid mb-3"
              src="/images/pngwing.com (3).png"
              alt="Spider-Man"
            />
          </div>
        </div>
      </div>

      {/* Bottom Curve SVG */}
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
    </section>
  );
}
