import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExecutifs } from "../componentsDash/redux/executif/executifActions";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Organisation = () => {
  const bureauData = useSelector((state) => state.executif);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExecutifs());
  }, []);

  const bureau_container = bureauData.executifs.map((executif, index) => (
    <div className="support-company-area pt-100 pb-100 section-bg fix" key={index}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="support-location-img">
            <LazyLoadImage src={executif.imageUrl} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              {/* Section Tittle */}
              <div className="section-tittle section-tittle3 mb-50">
                <h2 >{executif.name} </h2>
                <span >{executif.role}</span>
              </div>
              <div className="support-caption1">
                <p className="pera-top">{executif.description}</p>
                <p className="mb-65"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
            <LazyLoadImage src="assets/img/logo/11icon.png" alt="looding" />
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
                        wrapper="a"
                        steps={[
                          " Organisation",
                          1000,
                          "  Club didon de Carthage",
                          1000,
                        ]}
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
                <LazyLoadImage
                    src="assets/img/organisation/fondatrices3.jpg"
                    width="1000px"
                    height="500px"
                    alt=""
                  />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#"></a>
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
                <LazyLoadImage src="assets/img/organisation/3.jpg" alt="" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Pr. Azedine Beschaouch </a>
                  </h3>
                  <span>
                    Ministre de la Culture en 2010, Représentant du directeur
                    général de l’UNESCO pour la sauvegarde des monuments
                    d’Angkor.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                <LazyLoadImage src="assets/img/organisation/1.jpg" alt="" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Pr. André Abitbol</a>
                  </h3>
                  <span>
                    Officier de l’Ordre National du Mérite Tunisien au titre de
                    la Culture, Chevalier dans l’Ordre des Palmes Académiques.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                <LazyLoadImage src="assets/img/organisation/5.jpg" alt="" />
                </div>
                <div className="team-caption">
                  <h3>
                    <a href="#">Mr. Jaloul Ayed</a>
                  </h3>
                  <span>
                    Ministre des finances en 2011, ancien Vice Président BMCE
                    Maroc et homme d’affaires.
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
                  Le bureau exécutif s’est réuni pour approbation du programme
                  d’activités pour la saison 2020/2021 et la création des
                  nouvelles commissions qui peuvent aider l’association a
                  réaliser ses objectifs et appuyer le travail des membres
                  fondateurs il a été décidé de créer les commissions sous
                  citées :{" "}
                </p>

                <p>
                  {" "}
                  1- La commission des relations publiques.<br></br>
                  2- La commission de la communication et de l’information.{" "}
                  <br></br>
                  3- La commission scientifique. <br></br>
                  4- La commission artistique.
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
      <main className="bodyBg">{bureau_container}</main>
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
                          fill="rgb(255, 168, 0)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        Il faut être fier d'avoir hérité de tout ce que le passé
                        avait de meilleur et de plus noble. Il ne faut pas
                        souiller son patrimoine en multipliant les erreurs
                        passées.{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                      <LazyLoadImage
                          src="assets/img/organisation/ghandi blanc.png"
                          alt=""
                        />
                      </div>
                      <div className="founder-text">
                        <span>Mohandas Karamchand Gandhi</span>
                        <p>Homme politique, Philosophe, Révolutionnaire</p>
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
                          fill="rgb(255, 168, 0)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        On aime ce qui nous a émerveillé, et on protège ce que
                        l'on aime{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                      <LazyLoadImage src="assets/img/organisation/PR.png" alt="" />
                      </div>
                      <div className="founder-text">
                        <span>Jacques-Yves Cousteau</span>
                        <p>
                          officier de la Marine nationale et explorateur
                          océanographique
                        </p>
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
                          fill="rgb(255, 168, 0)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        L'histoire est un grand présent, et pas seulement un
                        passé.{" "}
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                      <LazyLoadImage
                          src="assets/img/organisation/dsssssss.png"
                          alt=""
                        />
                      </div>
                      <div className="founder-text">
                        <span>Émile-Auguste Chartier</span>
                        <p>
                          philosophe, journaliste, essayiste et professeur de
                          philosophie français
                        </p>
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
                          fill="rgb(255, 168, 0)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        Celui qui entrerait dans Carthage tous les jours de sa
                        vie et s’occuperait seulement à y regarder, trouverait
                        chaque jour une nouvelle merveille qu’il n’aurait pas
                        remarquée auparavant.
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                      <LazyLoadImage src="assets/img/organisation/sa.png" alt="" />
                      </div>
                      <div className="founder-text">
                        <span>Al-Bakri </span>
                        <p>Géographe et historien arabe de l’Andalousie</p>
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
                          fill="rgb(255, 168, 0)"
                          d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                        />
                      </svg>
                      <p>
                        “Il y a deux choses dans un monument historique : son
                        usage et sa beauté. Son usage appartient au
                        propriétaire, sa beauté à tout le monde. C'est donc
                        dépasser son droit que de le détruire.”
                      </p>
                    </div>
                    {/* founder */}
                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                      <div className="founder-img">
                      <LazyLoadImage src="assets/img/organisation/pv4.png" alt="" />
                      </div>
                      <div className="founder-text">
                        <span>Victor Hugo</span>
                        <p>écrivain Français</p>
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
                <span className="counter">814</span>
                <p>av. J.-C</p>
                <br></br>
                <p>Fondation de Carthage par la reine Elyssa</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter text-center">
                <span className="counter">216</span>
                <p>av. J.-C</p> <br></br>
                <p>Bataille de Cannea du Général Hannibal Barca</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter text-center">
                <span className="counter">146</span>
                <p id="partener">av. J.-C</p>
                <br></br>
                <p id="partener">Construction des ports puniques</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter active text-center">
                <span className="counter">2828</span>
                <p>années</p>
                <br></br>
                <p>Création du club Didon de Carthage</p>
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
