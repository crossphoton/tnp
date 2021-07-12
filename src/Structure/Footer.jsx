import React from "react";
import "../SASS/_social.scss";
import "./_footer.scss";
import Logo from "../images/logo/logo.png";
import { address, Contacts, FooterLinks } from "../Content/footerInfo";
// import Brochure from "../Brochure.pdf";

function Footer() {
    return (
        <div className='main'>
            <footer>
                <div className='footer'>
                    <div className='logoSpace footerItems'>
                        <img src={Logo} alt='Logo' className='logoF' />
                    </div>
          <div className="address footerItems">
            <h3 className="footer-title">Address</h3>
            <div className="contentCards">
              <div>Temporary Campus</div>
              <div>{address}</div>
              <div className="map">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.4501724340257!2d77.36376861384535!3d16.248682338922013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d17abbd87b87%3A0x28afde55f519a10b!2sIndian%20Institute%20of%20Information%20Technology%2C%20Raichur!5e0!3m2!1sen!2sin!4v1626109545024!5m2!1sen!2sin"
                  title="map"
                  className="mapI"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>

                    <div className='footerItems'>
                        <h3 className='footer-title'>Quick Links</h3>
                        <ul className='quickLinks'>
                            {FooterLinks.map((link, id) => {
                                return (
                                    <ul key={id} className='list'>
                                        <li
                                            key={link.id}
                                            className='fas fa-chevron-right rightIcon'></li>
                                        <a href={link.link}>{link.name}</a>
                                    </ul>
                                );
                            })}
                        </ul>
                    </div>

                    <div className=' footerItems'>
                        <h3 className='footer-title contactUs'>Conatct Us</h3>

                        {Contacts.map((item, id) => {
                            return (
                                <div key={id} className='contentCards'>
                                    <div>{item.name}</div>
                                    <a
                                        className='phoneNum'
                                        href={`mailto:${item.email}`}>
                                        <i
                                            className='fas fa-envelope'
                                            aria-hidden='true'></i>{" "}
                                        : {item.email}
                                    </a>
                                    <a
                                        className='phoneNum'
                                        href={`tel: ${item.phoneNum}`}>
                                        <i
                                            className='fa fa-phone'
                                            aria-hidden='true'></i>{" "}
                                        : {item.phoneNum}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='copyright '>
                        <div>
                            © 2021{" "}
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://www.iiitr.ac.in/'>
                                {" "}
                                Indian Institute of Information Technology,
                                Raichur{" "}
                            </a>
                        </div>
                    </div>

                    {/* <div className="col-md-6">
                        <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                            <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                            <li key="1" id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="https://www.iiitr.ac.in/">Support</a></li>
                            <li key="2" id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="https://www.iiitr.ac.in/">Contact Us</a></li>
                            <li  key="3" id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="https://www.iiitr.ac.in/">Email Us</a></li>
                            </ul>
                        </nav>
                    </div> */}

                    {/* <div className="col-md-3">

                    <div className="footer-socials">

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-instagram fa-lg instagram" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-facebook-f facebook" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-twitter twitter" ></i>
                            </div>

                            <div className="socialIcon "  >
                                <svg height="3vw" width="3vw">
                                    <circle cx="1.5vw" cy="1.5vw" r="1.2vmax" stroke="white" strokeWidth="2" fill="none"></circle>
                                </svg>
                                <i className="fab fa-lg fa-youtube youtube" ></i>
                            </div>

                    </div>
                    </div> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
