import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";

const Organisation = () => {
  return (
    <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/11icon.png" alt="looding" />
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main>
        <div className="slider-area14">
          <div className="slider-height2 hero-overly2 d-flex align-items-center">
            <div className="">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-right">
                    <h2>
                      Bienvenue à
                      <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={["_Organisation", 1000, "_Organization", 1000]}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="fondatrices" className="about-details pt-150 bodyBg">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap ">
                <h4>Les Fondatrices</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-area ">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-12 col-md-10">
              <div className="section-tittle mb-70"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="single-team mb-30 ml-5">
                <div className="">
                  <img
                    src="assets/img/gallery/fondatrices3.jpg"
                    width="1000px"
                    height="500px"
                    alt=""
                  />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Ines Hassoumi</a>
                  </h3>
                  {/* <span >UX Designer</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="presidents" className="about-details pad pt-150 bodyBg">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap ">
                <h4>Présidents D'honneur</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-area ">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src="assets/img/gallery/IMG andre.jpg" alt="" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Pr. André Abitbol</a>
                  </h3>
                  <span>
                    Officier de l’Ordre National du Mérite Tunisien au titre de
                    la Culture, Chevalier dans l’Ordre des Palmes Académiques
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src="assets/img/gallery/IMGazedine.jpg" alt="" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Pr. Azedine Beschaouch </a>
                  </h3>
                  <span>
                    Ministre de la Culture en 2010, Représentant du directeur
                    général de l’UNESCO pour la sauvegarde des monuments
                    d’Angkor
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src="assets/img/gallery/IMG jaloL.jpg" alt="" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Mr. Jaloul Ayed</a>
                  </h3>
                  <span>
                    Ministre des finances en 2011, ancien Vice Président BMCE
                    Maroc et homme d’affaires                                                    
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="commissions" className="about-details pad pt-150 bodyBg">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap mb-50">
                <h4>Commissions</h4>
                <p>
                  Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                  udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus. Risus commodo viverra sebfd dho
                  eiusmod tempor maecenas accumsan lacus.
                </p>
                <p>
                  {" "}
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas
                  accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bureau" className="about-details pad pt-150 bodyBg">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap  ">
                <h4>Bureau Exécutif</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="bodyBg">
        {/* data-background="/assets/img/organisation/bl.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/gallery/présidente1.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle3 mb-50">
                    <h2>Eryj Ben Sassi</h2>
                    <span>Présidente</span>
                  </div>
                  <div className="support-caption1">
                    <p className="pera-top">
                      Urbaniste à l'Institut Supérieur des Technologies de
                      l'Environnement de l'Urbanisme et du Bâtiment
                    </p>
                    <p className="mb-65">*****************************</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="bodyBg">
        {/* data-background="/assets/img/organisation/bl.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/gallery/vice_presidente1.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle3 mb-50">
                    <h2>Ines Hassoumi</h2>
                    <span>Vice Présidente </span>
                  </div>
                  <div className="support-caption1">
                    <p className="pera-top">
                      Docteur en informatique à l'Institut Supérieur de Gestion
                      de Tunis et à l'université de Paris VI{" "}
                    </p>
                    <p className="mb-65">**************************.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="bodyBg">
        {/* data-background="/assets/img/organisation/bl.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/gallery/secertaire generale.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle3 mb-50">
                    <h2>Nahawend Makni </h2>
                    <span>Secrétaire générale </span>
                  </div>
                  <div className="support-caption1">
                    <p className="pera-top">
                      Architecte à l'Ecole Nationale d'Architecture et
                      d'Urbanisme de Tunis{" "}
                    </p>
                    <p className="mb-65">**************************.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* data-background="assets/img/gallery/section_bg04.jpg" */}
      {/*? Testimonial Start */}
      <div className="testimonial-area testimonial-padding ">
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-9">
              <div className="h1-testimonial-active">
                {/* Single Testimonial */}
                <div className="single-testimonial text-center">
                  {/* Testimonial Content */}
                  <div className="testimonial-caption ">
                    <div className="testimonial-top-cap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="67px"
                        height="49px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(240, 78, 60)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis por incididunt ut
                        labore et dolore mas.{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                        <img
                          src="assets/img/gallery/Homepage_testi.png"
                          alt=""
                        />
                      </div>
                      <div className="founder-text">
                        <span>Jessya Inn</span>
                        <p>Chif Photographer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Testimonial */}
                <div className="single-testimonial text-center">
                  {/* Testimonial Content */}
                  <div className="testimonial-caption ">
                    <div className="testimonial-top-cap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="67px"
                        height="49px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(240, 78, 60)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis por incididunt ut
                        labore et dolore mas.{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                        <img
                          src="assets/img/gallery/Homepage_testi.png"
                          alt=""
                        />
                      </div>
                      <div className="founder-text">
                        <span>Jessya Inn</span>
                        <p>Chif Photographer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      <div className="count-down-area pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter text-center">
                <span className="counter">8705</span>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter active text-center">
                <span className="counter">480</span>
                <p> Active Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter text-center">
                <span className="counter">626</span>
                <p>Cups of Coffee</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter text-center">
                <span className="counter">9774</span>
                <p id="partener">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Organisation;
