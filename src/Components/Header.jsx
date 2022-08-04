// import React from "react";
import { useMediaQuery } from 'react-responsive'
import React, { useEffect, useState } from 'react'
import { useScreenFixedProvider } from '../context/ScreenFixedProvider'
import Navlogo from '../Assests/Images/Navbar/Logo.png'
import Map from '../Assests/Images/Navbar/Exclude.png'
// import { Navlogo } from '../Common/Icon'
const Header = () => {
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 })
    return isBeforeDesktop ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const handldeOverlayActive = () => {
    document.body.classList.toggle('active-nav-overlay')
  }
  const { showOverlay, setShowOverlay } = useScreenFixedProvider()
  const [scrollPosition, setScrollPosition] = useState(0)

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <section
        className="position-relative z-index-1   flex-column  w-100  py-3 navbar-wrapper"
        id="home"
      >
        <div className="navbar-wrapper w-100 position-relative z-5 header_bg">
          <Desktop>
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div className="cursor_pointer">
                  <img src={Navlogo} alt="" />
                </div>
                <div className="nav-list-items d-flex">
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#roadmap"
                      >
                        Home
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link text-nowrap font_lg fw_bold text-white"
                        href="#gallery"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#merch"
                      >
                        About
                      </a>
                    </li>
                    <li className="ms-4 ms-xl-5">
                      <a
                        className="text-decoration-none navbar-link font_lg fw_bold text-white"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex">
                <button className="nav-btn nav-login-btn me-3"> Login</button>
                <button className="nav-btn">Get Started</button>
              </div>
            </div>
          </Desktop>
          <BeforeDesktop>
            <div className="px-3 d-flex justify-content-between align-items-center py-4">
              <div className="nav-log cursor_pointer z-index_100">
                <img src={Navlogo} alt="" />
              </div>
              <div
                id="nav-icon1"
                className={`hamburger-menu`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className={`navbar-overlay `}>
              <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#roadmap"
                  >
                    Home
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#gallery"
                  >
                    Pricing
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#merch"
                  >
                    About
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none main_para color text-white sarabun"
                    href="#team"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <div className="d-flex">
                    <div>
                      <button className="nav-btn  "> Login</button>
                      <button className="nav-btn">Get Started</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </BeforeDesktop>
        </div>
        {/* hero-section / */}
        <div className="hero_section align-items-center flex-grow-1 ">
          <div className="row  ">
            <div className="container">
              <div className="position-relative text-center ">
                <h1 className="text-white main_heading ">Contact Us</h1>
                <img src={Map} alt="" className="position-absolute location" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
