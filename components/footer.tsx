'use client'

import Link from 'next/link'
import { useEffect } from 'react'

declare global {
    interface Window {  
    dataLayer: any[];
        fbq: any;
        _fbq: any;
        gtag: any;
    }
}

const Footer = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') return;
    }, []);


    return (
      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">Orgalaser Group</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>No. 64/B/1/1</p>
                  <p>Station Road,</p>
                  <p>Kandana</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+94 11 223 6311</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>orgalaser@gmail.com</span>
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="https://api.whatsapp.com/send/?phone=94765281529&text&type=phone_number&app_absent=0">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/OrgalaserWedding1"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/orgalaser/"
                    target="_blank"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@wedding.orgalaser"
                    target="_blank"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#home"> Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#about"> About us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#services"> Services</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#services"> Laser Cutting & Engraving</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#services"> Wedding Invitations</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#services"> Hologram Labels</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link href="/#services"> CNC</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-center">
            <p>
              © <span>Copyright </span>{" "}
              <strong className="sitename px-1">ORGA_IT</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
            <div className="credits">
              Designed by{" "}
              <a
                href="https://www.facebook.com/Yuvindu1.induwara"
                target="_blank"
              >
                Yuvi_In
              </a>{" "}
              2025
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;