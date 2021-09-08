import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
  return (
    <div>
      <footer>
        {/*? Footer Start* data-background="assets/img/gallery/footer_bg.jpg"*/}
        <div
          className="footer-area section-bg "
          data-background="assets/img/footer/Énée_Didon_par_Pierre-Narcisse_Guérin.jpg"
        >
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    {/* logo */}
                    <div className="footer-logo">
                      <a href="index.html">
                      <LazyLoadImage

                          src="assets/img/logo/icon1.png"
                          width="150"
                          height="120"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">
                        Montrer ce qui existe, ce qui n'existe plus et ce qui existera.
                        </p>
                      </div>
                    </div>
                    <div className="footer-number">
                      <h4>
                        <span>+216 </span>53087334
                      </h4>
                      <br></br>
                      <h4>
                        <span>+216 </span>24525690
                      </h4>
                      <p>clubdidon@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Menu </h4>
                      <ul>
                        <li>
                          <a href="/apropos">A Propos</a>
                        </li>
                        <li>
                          <a href="/organisation"> Organisation</a>
                        </li>
                        <li>
                          <a href="/programme">Activités</a>
                        </li>
                        <li>
                          <a href="/patrimoine">Patrimoine Numérique</a>
                        </li>
                        <li>
                          <a href="/planification">Programme</a>
                        </li>
                        <li>
                          <a href="/media">Medias</a>
                        </li>
                        <li>
                          <a href="/adhesion">Adhésion</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Emplacement</h4>
                      <div className="footer-pera">
                        <p className="info1">
                          Maison des associations de Sidi Bou Said .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright © All rights reserved | This template is made
                      with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        AYOUB saddi
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* Footer Social */}
                  <div className="footer-social f-right">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/groups/clubdidon/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </footer>
    </div>
  );
};

export default Footer;
