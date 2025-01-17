import React from "react";
import Container from "../extra/Container";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BiLogoWhatsappSquare } from "react-icons/bi";



const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-[#161038] to-[#691bce] text-white">
      <Container>
        <footer className="py-12">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between gap-8 items-start">
            {/* About Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-3xl font-extrabold mb-4">DevSpring</h2>
              <p className="text-gray-300 leading-relaxed">
                Building smarter, faster, and more innovative web solutions.
                Join us in transforming ideas into impactful digital
                experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hr.devspring@gmail.com"
                    className="text-gray-300 flex items-center gap-2 hover:text-white transition-all duration-300"
                  >
                    <i className="fas fa-envelope"></i> hr.devspring@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-phone"></i>
                  <span className="text-gray-300 hover:text-white transition-all duration-300">
                    +880 1770 560 025
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="text-gray-300 hover:text-white transition-all duration-300">
                    Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DevSpring. Crafted with ❤️ for
              developers by developers.
            </p>
            

            <div className="flex gap-4">
              <a
                href="https://facebook.com/profile.php?id=61565617242986"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                <i className="fab fa-facebook fa-lg"><FaSquareFacebook />
                </i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                <i className="fab fa-twitter fa-lg"><FaTwitterSquare />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/groups/14523833/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                <i className="fab fa-linkedin fa-lg"><FaLinkedin />
                </i>
              </a>
              <a
                href="https://www.messenger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                <i className="fab fa-facebook-messenger fa-lg"><FaFacebookMessenger />
                </i>
              </a>
              <a
                href="https://wa.me/<+8801770560025>"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                <i className="fab fa-whatsapp fa-lg"><BiLogoWhatsappSquare />
                </i>
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
