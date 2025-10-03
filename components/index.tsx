"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "./hero";

export default function Index() {
  useEffect(() => {
    // Add any client-side effects or subscriptions here
  }, []);

  return (
      <main className="w-full bg-gray-50">
            <Hero />
            
        {/* /Clients Section */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6 order-lg-1 order-1" id="vision-box">
                <div className="vision-box-cover">
                  <img src="/img/lasrr.gif" className="img-fluid" alt="" />
                  <div
                    className="col-xl-3 col-md-6 aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="vision-box1">
                      <i className="bi bi-award"></i>
                      <h4>Our vision</h4>
                      <p>
                        Exploring the Transformative Power of Innovation in
                        Enhancing Craftsmanship and Fortifying Security.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="vision-box2">
                      <i className="bi bi-award"></i>
                      <h4>Our Mission</h4>
                      <p>
                        We are redefining security through advanced techniques
                        and strong protection for products and clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-lg-2 content order-2">
                <div className="text-container">
                  <h2>Welcome to Orgalaser Group.</h2>
                  <p className="fst-italic">
                    At <b>Orgalaser Group,</b> we combine innovation, precision,
                    and creativity across multiple industries to deliver
                    exceptional solutions that meet your needs. Our group
                    operates two leading ventures:
                  </p>
                  <h3>
                    Orgalaser Cutting Wedding Cards & Graphic Items Pvt. Ltd.
                  </h3>
                  <p>
                    Our creative arm focuses on premium wedding cards and
                    graphic design items. We bring elegance, personalization,
                    and modern design trends to life, ensuring your special
                    moments are celebrated with style and sophistication. From
                    bespoke invitations to custom-designed graphic products, we
                    turn your visions into tangible art.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        <b>Innovation:</b> Pushing boundaries with creative and
                        technological advancements.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        <b>Quality:</b> Delivering products that exceed
                        expectations through rigorous quality control.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        <b>Customer-Centricity:</b> Tailoring solutions to meet
                        unique client needs.
                      </span>
                    </li>
                  </ul>

                  <h3>Orgalaser Hologram Pvt. Ltd.</h3>
                  <p>
                    We specialize in security hologram labels and precision
                    laser cutting and engraving solutions, helping businesses
                    protect their products against counterfeiting while offering
                    advanced customization. Our company blends technology and
                    craftsmanship to create functional, secure, and innovative
                    solutions.
                  </p>

                  <p>
                    With a streamlined workflow across designing, production,
                    quality checking, and packing, both of our companies
                    guarantee{" "}
                    <b>precision, efficiency, and outstanding results.</b>
                    Whether you're looking to safeguard your business with
                    anti-counterfeit hologram labels or celebrate life's moments
                    with luxurious wedding cards, Orgalaser Group is your
                    trusted partner.
                  </p>
                  <p>
                    Join us as we bring technology, security, and creativity
                    together to create solutions that make a lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

        {/* Features Section */}
        <section id="features" className="features section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6 order-lg-1 order-2">
                <div
                  className="features-item d-flex ps-lg-3 pt-lg-0 ps-0 pt-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-shield-lock"></i>
                  <div>
                    <h4>Secure to your Brand</h4>
                    <p>
                      Enhance the protection of your brand to ensure its
                      integrity and reputation in the marketplace.
                    </p>
                  </div>
                </div>
                {/* End Features Item*/}

                <div
                  className="features-item d-flex ps-lg-3 mt-5 ps-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-graph-up-arrow"></i>
                  <div>
                    <h4>Increasing the value of the Product</h4>
                    <p>
                      Using hologram labels can subtly enhance the value of your
                      brand.
                    </p>
                  </div>
                </div>
                {/* End Features Item*/}

                <div
                  className="features-item d-flex ps-lg-3 mt-5 ps-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-crosshair"></i>
                  <div>
                    <h4>Your product effectively reaches the audience.</h4>
                    <p>
                      Consumers appreciate hologram labels because they help
                      them easily spot genuine products when shopping.
                    </p>
                  </div>
                </div>
                {/* End Features Item*/}

                <div
                  className="features-item d-flex ps-lg-3 mt-5 ps-0"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-person-fill-lock"></i>
                  <div>
                    <h4>Protect your Customers Trust.</h4>
                    <p>
                      Using hologram labels effectively helps build a strong
                      customer base by establishing trust with them.
                    </p>
                  </div>
                </div>
                {/* End Features Item*/}
              </div>

              <div className="col-lg-6 order-lg-2 content order-1">
                <h2 className="features-head">What are the outcomes</h2>
                <p className="fst-italic">
                  when you use holgram labels in your products...
                </p>
                <div
                  className="features-image col-lg-6 order-lg-1 order-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img src="/img/features-bg.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Features Section */}

        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="section-title container" data-aos="fade-up">
            <h2>Services</h2>
            <p>Check our Services</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-vector-pen"></i>
                  </div>
                  <a href="#services" className="stretched-link">
                    <h3>Laser Cutting & Engraving</h3>
                  </a>
                  <p>
                    Orgalaser Hologram Pvt. Ltd. offers precision laser cutting
                    and engraving for customized products. We ensure quick
                    turnaround times for wedding invitations, signage, gifts,
                    and prototypes. Trust us for your laser solutions.
                  </p>
                </div>
              </div>
              {/* End Service Item */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-nut"></i>
                  </div>
                  <a href="#services" className="stretched-link">
                    <h3>CNC</h3>
                  </a>
                  <p>
                    Orgalaser Hologram Pvt. Ltd. provides high-quality CNC
                    machining solutions, including cutting, milling, drilling,
                    prototyping, and custom manufacturing for various materials.
                  </p>
                </div>
              </div>
              {/* End Service Item */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-file-lock"></i>
                  </div>
                  <a href="#services" className="stretched-link">
                    <h3>Hologram Labels</h3>
                  </a>
                  <p>
                    Orgalaser Hologram Pvt. Ltd. provides secure, customizable
                    hologram labels to protect brands and products from
                    counterfeiting across various industries.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}

        {/* Call To Action Section */}
        <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
          <img src="/img/hero-bg.gif" className="call-to-action-bg" alt="" />

          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Follow Us On</h3>
                  <p>
                    Follow Orgalaser for cutting-edge innovations in laser
                    technology! We specialize in high-precision solutions that
                    drive efficiency, performance, and reliability. Stay
                    connected for the latest advancements, expert insights, and
                    exclusive updates from the world of laser engineering!
                  </p>
                  <a className="cta-btn" href="#contact">
                    Call To Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="section-title container" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Laser Cutting</li>
                <li data-filter=".filter-product">CNC</li>
                <li data-filter=".filter-branding">Hologram Labels</li>
              </ul>
              {/* End Portfolio Filters */}

              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
                suppressHydrationWarning
              >
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Wedding Invitations</h4>
                    <p>Celebrate love with a beautiful wedding invitation!</p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-1.jpg"
                      title="Wedding Invitations"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/laser-cutting/wedding-invitations.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item Wed*/}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Wood CNC</h4>
                    <p>Precision wood CNC cutting and engraving services.</p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-2.jpg"
                      title="Wood CNC"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/CNC/wood-cnc.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Stock Hologram Labels</h4>
                    <p>
                      Stock holograms offer a secure, cost-effective
                      anti-counterfeiting solution.
                    </p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-3.jpg"
                      title="Stoke Hologram"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/hologram"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Souvenirs and Handicrafts</h4>
                    <p>
                      Find unique handcrafted souvenirs that embody tradition
                      and artistry.
                    </p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-4.jpg"
                      title="Souvenirs and Handicrafts"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/laser-cutting/souvenirs-handicrafts.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item Sou*/}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Acrylic CNC Engraving</h4>
                    <p>
                      Precision wood Acrylic cutting and engraving services.
                    </p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-5.jpg"
                      title="Product 2"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/CNC/acrylic-cnc.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Customized Hologram Labels</h4>
                    <p>Custom holograms for brand authenticity.</p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-6.jpg"
                      title="Custome Hologram"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/hologram.htmlportfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Leather Cutting & Marking</h4>
                    <p>
                      We provide precise leather cutting and marking for
                      detailed, high-quality designs.
                    </p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-7.jpg"
                      title="App 3"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/laser-cutting/leather-craft.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item Lea*/}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Sign Boards</h4>
                    <p>
                      Boost brand visibility with sleek, durable acrylic signs.
                    </p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-8.jpg"
                      title="Product 3"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/CNC/sign-board.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}

                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
                  suppressHydrationWarning
                >
                  <img
                    src="/img/masonry-portfolio/masonry-portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Hologram Labels</h4>
                    <p>More Hologram Labels</p>
                    <a
                      href="/img/masonry-portfolio/masonry-portfolio-9.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    ></a>
                    <a
                      href="/hologram.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
              </div>
              {/* End Portfolio Container */}
            </div>
          </div>
        </section>
        {/* /Portfolio Section */}

        {/* Stats Section */}
        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <img src="/img/stats-img.png" alt="" className="img-fluid" />
              </div>

              <div className="col-lg-6">
                <h3 className="fw-bold fs-2 mb-3">
                  We are honored to serve high-quality and distinguished
                  products.
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
                            delivers precision, innovation, and quality
                            products.
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
