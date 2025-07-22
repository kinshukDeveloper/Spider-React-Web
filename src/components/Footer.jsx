import React from 'react';

export default function Footer() {
  const contactInfo = [
    { icon: 'fa-map-marker', text: 'World Trade Centre, Bangalore' },
    { icon: 'fa-phone', text: '+1 123456789' },
    { icon: 'fa-envelope', text: 'meials@gmail.com' }
  ];

  return (
    <section id="footer">
      {/* Top Curve SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,224C672,235,768,181,864,149.3C960,117,1056,107,
             1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,
             864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <div className="container">
        <div className="row">
          {/* About Box */}
          <div className="col-md-4 footer-box">
            <img src="/images/pngwing.com (4).png" className="brand-logo" alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum libero. Totam possimus iure
              blanditiis, similique maxime enim voluptate.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 footer-box">
            <p><b>Contact Us</b></p>
            {contactInfo.map((item, index) => (
              <p key={index}>
                <span className={`fa ${item.icon}`}></span> {item.text}
              </p>
            ))}
          </div>

          {/* Newsletter */}
          <div className="col-md-4 footer-box">
            <p><b>SUBSCRIBE NEWSLETTER</b></p>
            <input type="email" className="form-control" placeholder="Your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>

        <hr />
        <p className="copyright">
          Website crafted by <strong>Kinshuk Majoka</strong>
        </p>
      </div>
    </section>
  );
}
