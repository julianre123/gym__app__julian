import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/Everest images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [openServices, setOpenServices] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;
  const [openMobile, setOpenMobile] = useState(false);

  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        openServices && setOpenServices(false);
      }
    });
  }, [ref, openServices]);
  /* onClick={() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }} */
  return (
    <div>
      {mobile ? (
        <div className="header__mobile__relative">
          <div className="header">
            <div className="header__content">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <img src={logo} alt="" onClick={() => setOpenServices(false)} />
              </Link>
              <div
                className="header__mobile__icon"
                onClick={() => setOpenMobile(!openMobile)}
              >
                <MenuIcon fontSize="large" style={{ fill: "white" }} />
              </div>
            </div>
          </div>
          <div
            className="header__mobile__container"
            style={{
              transform: openMobile ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <ul>
              <li onClick={() => setOpenMobile(false)}>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setOpenMobile(false)}>
                <Link
                  to="/about"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About
                </Link>
              </li>
              <li onClick={() => setOpenMobile(false)}>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Services
                </Link>
              </li>
              <li onClick={() => setOpenMobile(false)}>
                <Link
                  to="/blog"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Blog
                </Link>
              </li>
              <li onClick={() => setOpenMobile(false)}>
                <Link
                  to="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="header__content">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img src={logo} alt="" onClick={() => setOpenServices(false)} />
            </Link>
            <ul>
              <li onClick={() => setOpenServices(false)}>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setOpenServices(false)}>
                <Link
                  to="/about"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About
                </Link>
              </li>
              <li onClick={() => setOpenServices(!openServices)}>
                <Link
                  style={{
                    backgroundColor: openServices ? "#8b8698" : "",
                    color: openServices ? "#fff" : "",
                  }}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Services
                </Link>
                {openServices && (
                  <ul className="open__services">
                    <li>
                      {" "}
                      <Link
                        to="services"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        All Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/Pilates Training"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Pilates Training
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/services/CrossFit Training"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        CrossFit Training
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/services/Fitness Training"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Fitness Training
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={() => setOpenServices(false)}>
                <Link
                  to="/blog"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Blog
                </Link>
              </li>
              <li onClick={() => setOpenServices(false)}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button onClick={() => setOpenServices(false)}>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                to="/contact"
              >
                Book Class
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
