import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./AboutMe.css";
import profileImg from "../assets/images/image3.JPG";

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-white">About Me</h2>
          <p className="text-white-50">A little insight about who I am</p>
        </div>

        <Carousel
          indicators={true}
          interval={5000}
          nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
          prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
          className="aboutme-carousel"
        >
          {/* Slide 1 */}
          <Carousel.Item>
            <div className="row align-items-center">
              {/* Teksti */}
              <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                <div className="aboutme-box">
                  <p>
                    I’m a passionate software developer with experience in
                    building scalable, secure, and user-friendly applications.
                    I specialize in Laravel, Vue.js, and React, always focusing
                    on clean code, performance, and delivering value to users.
                  </p>
                  <h5 className="fw-bold mb-0">Your Name</h5>
                  <small className="text-muted">Full Stack Developer</small>
                </div>
              </div>
              {/* Fotoja */}
              <div className="col-lg-5 col-md-12 text-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="aboutme-img rounded-circle shadow"
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                <div className="aboutme-box">
                  <p>
                    I have a proven track record of delivering high-quality
                    software solutions, collaborating with teams, and adapting
                    to modern development methodologies to ensure efficiency and
                    success.
                  </p>
                  <h5 className="fw-bold mb-0">Your Name</h5>
                  <small className="text-muted">Full Stack Developer</small>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 text-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="aboutme-img rounded-circle shadow"
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                <div className="aboutme-box">
                  <p>
                    My passion for coding is matched only by my drive to learn
                    new technologies, improve processes, and create impactful
                    digital experiences that solve real-world problems.
                  </p>
                  <h5 className="fw-bold mb-0">Your Name</h5>
                  <small className="text-muted">Full Stack Developer</small>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 text-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="aboutme-img rounded-circle shadow"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default AboutMe;
