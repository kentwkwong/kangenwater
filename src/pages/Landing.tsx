import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="Landing">
      <div className="content-wrapper">
        {/* Video Section */}
        <div className="video-section">
          <div className="responsive-video">
            <iframe
              src="https://www.youtube.com/embed/1ZYbU82GVz4?si=dPmP82tg9XCT8cr8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <br />
        <br />
        {/* Introduction Section */}
        <div className="introduction">
          <h1>Welcome to Our Landing Page</h1>
          <p>
            We are excited to introduce our services to you. Our platform is
            designed to help you achieve your goals with ease and efficiency.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
