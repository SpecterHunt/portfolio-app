import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ayush Tripathi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ayush-tripathi-0865a41ab"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/ayush__tr/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/AyushTr41476651"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Ayush Tripathi 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
