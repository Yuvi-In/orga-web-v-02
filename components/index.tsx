"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "./hero";
import About from "./about";
import Outcomes from "./outcomes";
import Services from "./services";
import CallTo from "./callToAction";
import Portfolio from "./portfolio";

export default function Index() {
  useEffect(() => {
    // Add any client-side effects or subscriptions here
  }, []);

  return (
    <main className="h-full w-full">
      <Hero />
      <About />
      <Outcomes />
      <Services />
      <CallTo />
      <Portfolio />

      
      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-lg-5">
              <img src="/img/stats-img.png" alt="" className="img-fluid" />
            </div>

            <div className="col-lg-6">
              <h3 className="fw-bold fs-2 mb-3">
                We are honored to serve high-quality and distinguished products.
              </h3>
              <p>
                We are delighted to provide you with outstanding products that
                not only meet the highest quality standards but also elevate
                your experience. Our commitment to excellence is what sets us
                apart, and we invite you to discover the difference for
                yourself!
              </p>

              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-building-up"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="14"
                        data-purecounter-duration="1"
                        className="purecounter"
                        suppressHydrationWarning
                      >
                        0
                      </span>
                      <p>
                        <strong>Years of dedicated service </strong>
                        <span>
                          is a remarkable milestone worth celebrating.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}

                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-journal-richtext flex-shrink-0"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="1020"
                        data-purecounter-duration="1"
                        className="purecounter"
                        suppressHydrationWarning
                      >
                        0
                      </span>
                      <p>
                        <strong>We have accomplished </strong>{" "}
                        <span>a remarkable Projects under OneRoof!</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}

                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-people-fill"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="453"
                        data-purecounter-duration="1"
                        className="purecounter"
                        suppressHydrationWarning
                      >
                        0
                      </span>
                      <p>
                        <strong>Clients entrusting </strong>{" "}
                        <span>their partnership with us</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}

                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-bricks"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                        className="purecounter"
                        suppressHydrationWarning
                      >
                        0
                      </span>
                      <p>
                        <strong>Hard Workers</strong>{" "}
                        <span>
                          delivers precision, innovation, and quality products.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Stats Section */}

      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="section-title container" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <iframe
              style={{ border: 0, width: "100%", height: "270px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6703583098556!2d79.89598237591241!3d7.047967592954241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f74023bc0605%3A0xad198ecb82b0d132!2sOrgalaser%20Cutting!5e0!3m2!1sen!2slk!4v1733494252926!5m2!1sen!2slk"
              suppressHydrationWarning
            ></iframe>
          </div>
          {/* End Google Maps */}

          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>No: 61/1/B Station Road, Kandana, Sri Lanka, 11320</p>
                </div>
              </div>
              {/* End Info Item */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+94 11 223 6311</p>
                  <p>+94 11 223 6853</p>
                  <p>+94 71 652 0030</p>
                  <p>+94 71 947 1408</p>
                </div>
              </div>
              {/* End Info Item */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>orgalaser@gmail.com</p>
                  <p>orgalaser.hologram@gmail.com</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>

            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
      
    </main>
  );
}
