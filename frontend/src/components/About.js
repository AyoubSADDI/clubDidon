import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPartenaires } from "../componentsDash/redux/partenaire/partenaireActions";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";

const About = () => {
  const partenaireData = useSelector((state) => state.partenaire);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPartenaires());
  }, []);

  const partenaire_container = partenaireData.partenaires
    .reverse()
    .map((partenaire) => (
      <div className="single-brand" key={partenaire._id}>
        <img src={partenaire.imageUrl} alt="" />
      </div>
    ));

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
        <div className="slider-area2">
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
                          " Propos",
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
        <div id="vision" className="about-details pt-150 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap mb-50">
                  <h4>Notre Vision</h4>
                  <p>
                    L’association Didon de Carthage vise à mettre au point une
                    stratégie d’avenir afin de mieux impulser l’action
                    associative en tant que facteur de promotion du patrimoine,
                    du tourisme et de la culture en Tunisie. Il s’agit d’une
                    jeune association qui a pour principal objectif de jouer,
                    avec ses partenaires, le rôle de médiateur culturel qui
                    consiste à favoriser les liens entre l’objet culturel et les
                    visiteurs en utilisant les nouvelles technologies.
                  </p>
                  <p id="mission">
                    {" "}
                    En effet, en plus des conférences et des sorties organisées
                    dans les sites archéologiques, l’association <br></br>«
                    Didon de Carthage » souhaite élargir ses champs d’action et
                    son rôle d’expertise, d’étude et de recherche en matière de
                    pratiques numériques technologiques avec de nouveaux
                    supports et usages – auprès du grand public et des
                    professionnels.
                  </p>
                  <br></br>
                  <p id="mission">
                    Dans ce nouveau contexte numérique, notre association
                    projette de réaliser des projets 3D autour de l’art visuel,
                    qui feront l’objet tout au long de l’année d’expositions, de
                    débats, d’événements, et se présenteront également comme un
                    véritable support pour la conservation et la valorisation du
                    patrimoine Tunisien et plus particulièrement du patrimoine
                    de Carthage. <br></br>
                  </p>{" "}
                  <p id="mission">
                    Nous espérons que ces projets rencontreront un vif succès
                    auprès des adhérents mais aussi de l’ensemble des citoyens
                    et particulièrement des jeunes Tunisiens.
                  </p>
                </div>
                <div className="about-details-cap mb-50 pt-5">
                  <h4>Notre Mission</h4>
                  <p>
                    Dans ses statuts, l’association Didon de Carthage a pour
                    objectifs de :
                  </p>
                  <p id="activité">
                    -Mettre en valeur le patrimoine Carthaginois. <br></br>
                    -Organiser des manifestations nationales et internationales
                    des séminaires, des conférences, des tables rondes et des
                    ateliers sur la civilisation Carthaginoise punique ainsi que
                    les autres civilisations. <br></br>
                    -Rassembler les associations travaillant dans le même
                    domaine culturel historique. <br></br>
                    -Faire connaître au grand public les richesses et les
                    particularités des sites archéologiques dans toute la
                    Tunisie. <br></br>
                    -Organiser des manifestations culturelles et artistiques sur
                    le site de Carthage-Sidi Bou Saîd et toute la banlieue nord.{" "}
                    <br></br>
                    -Lier des relations culturelles et scientifiques avec des
                    organisations similaires à l’intérieur et à l'extérieur du
                    pays. <br></br>
                    -Travailler sur la Renaissance de la civilisation
                    Carthaginoise. <br></br>
                    -Introduire les nouvelles technologies pour la mise en
                    valeur du patrimoine de Carthage et de toute la Tunisie.
                    <br></br>
                    -Valoriser le Rôle et la légende de la Reine Elyssa (Didon)
                    Fondatrice de Carthage ainsi que les femmes Carthaginoises
                    (et Tunisiennes) de l'époque punique jusqu'à nos jours.
                  </p>
                </div>
                <div className="about-details-cap mb-50 pt-5">
                  <h4>Notre Statut juridique</h4>
                  <p>
                    L’association Didon de Carthage est une organisation non
                    gouvernementale fondée en 2014 par deux jeunes femmes
                    tunisiennes passionnées de l’histoire de Carthage Mme Eryj
                    Ben Sassi et Mlle Inès Hassoumi.
                  </p>
                  <p id="activité">
                    {" "}
                    L’association est inscrite officiellement au JORT en 2017.
                    Elle est gérée par un groupe de passionnés, d’experts et
                    d’amateurs dans le domaine du patrimoine, de l’archéologie
                    et de l’histoire.<br></br>{" "}
                  </p>{" "}
                  <p id="activité">
                    Il s’agit d’une association apolitique et areligieuse qui a
                    pour but de valoriser le patrimoine Tunisien et plus
                    particulièrement le patrimoine Carthaginois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-details pt-5 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap">
                  <h4>Nos Activités</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*? Categories Area Start */}
        <div className="categories-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">{/* Section Tittle */}</div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Conférences </a>
                    </h5>
                    <p>
                      Organiser des manifestations nationales et internationales
                      des séminaires, des conférences, des tables rondes et des
                      ateliers sur la civilisation Carthaginoise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Excursions</a>
                    </h5>
                    <p>
                      Faire connaître au grand public les richesses et les
                      particularités des sites archéologiques dans toute la
                      Tunisie.
                    </p>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Evénements</a>
                    </h5>
                    <p id="charte">
                      Organiser des manifestations culturelles et artistiques
                      sur le site de Carthage-Sidi Bou Saîd et toute la banlieue
                      nord.
                    </p>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-details bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap pt-5">
                  <h4>Nos Partenaires</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-area pt-90 pb-140">
          <div className="row">{partenaire_container}</div>
        </div>
      </main>
      <Footer />
      <div id="back-top">
        <a title="Go to Top" href="#">
          <i className="fas fa-level-up-alt" />
        </a>
      </div>
    </div>
  );
};

export default About;
