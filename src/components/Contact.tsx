import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode, SiFiverr } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:shaik.junaid0910@gmail.com" data-cursor="disable">
                shaik.junaid0910@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917569537832" data-cursor="disable">
                +91 75695 37832
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <div className="contact-social-flex">
              <a
                href="https://github.com/Junaid0910"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                <FaGithub className="social-icon" />
                <span className="social-text">Github</span>
                <MdArrowOutward className="social-arrow" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-junaid-pasha"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                <FaLinkedinIn className="social-icon" />
                <span className="social-text">Linkedin</span>
                <MdArrowOutward className="social-arrow" />
              </a>
              <a
                href="https://leetcode.com/u/junaid0910/"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                <SiLeetcode className="social-icon" />
                <span className="social-text">LeetCode</span>
                <MdArrowOutward className="social-arrow" />
              </a>
              <a
                href="https://www.fiverr.com/s/6YkyzxR"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                <SiFiverr className="social-icon" />
                <span className="social-text">Fiverr</span>
                <MdArrowOutward className="social-arrow" />
              </a>
              <a
                href="https://www.instagram.com/neurotic_zx_/"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                <FaInstagram className="social-icon" />
                <span className="social-text">Instagram</span>
                <MdArrowOutward className="social-arrow" />
              </a>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shaik Junaid Pasha</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
