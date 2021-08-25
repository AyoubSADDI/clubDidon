import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";

const Patrimoine = () => {
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
        <div className="slider-area13">
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
                        steps={[
                          "_Patrimoine Digital",
                          1000,
                          "_Digital Heritage",
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
      <div className="bodyBg">
        <main id="zagh">
          {/* data-background="assets/img/gallery/section_bg02.jpg" */}
          <div className="support-company-area pt-100 pb-100 section-bg fix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="support-location-img">
                    <img src="assets/img/patrimoine/carth.jpg" alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="right-caption">
                    {/* Section Tittle */}
                    <div className="section-tittle section-tittle2 mb-50">
                      <span>Premier Projet digital</span>
                      <h2>Projet DourBia</h2>
                    </div>
                    <div className="support-caption">
                      <p className="pera-top">
                        Application pour la génération de circuits de visite à
                        Carthage : Application mobile Dourb’IA Mars 2020 (en
                        cours)
                      </p>
                      <p className="mb-65">
                        Dourb’IA consiste en la création d'un guide numérique
                        intelligent disponible en application mobile et web qui
                        propose des circuits thématiques et personnalisés
                        enrichis par un contenu historique et complétés
                        ultérieurement par une boutique en ligne et une
                        plateforme de réservation (pour les hôtels et les
                        restaurants limitrophes). Dourb’IA utilise les nouvelles
                        technologies pour améliorer la qualité de l’offre
                        touristique culturelle à Carthage à travers la création
                        de visites inédites, innovantes et sur mesure pour
                        mettre le visiteur au cœur de l’expérience de visite
                        d'un lieu choisi (sites archéologiques, musées, médinas,
                        ...).{" "}
                      </p>
                      <a href="about.html">
                        Visiter Notre Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <main id="carthage" className="bodyBg">
        {/* data-background="assets/img/gallery/section_bg02.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/patrimoine/zagh.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle2 mb-50">
                    <span>Deuxième Projet Digital</span>
                    <h2>Projet HawisBia </h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Application pour la génération de circuits de visite à
                      Zaghouan : Application web HawessBIA Février 2021 (en
                      cours)
                    </p>
                    <p className="mb-65">
                      Hawess BIA consiste à développer une application Web pour
                      guider les visiteurs en fonction de leurs préférences et
                      assurer des visites virtuelles dans le gouvernorat de
                      Zaghouan. L’application a pour but également de promouvoir
                      les services et les produits des artisans. Elle propose
                      des circuits thématiques à la ville de Zaghouan et des
                      circuits pour la visite des sites archéologiques sur tout
                      le gouvernorat. L’intelligence artificielle est utilisée
                      pour personnaliser la visite.{" "}
                    </p>
                    <a href="about.html">
                      Visiter Notre Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main id="carthage" className="bodyBg">
        {/* data-background="assets/img/gallery/section_bg02.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/patrimoine/zagh.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle2 mb-50">
                    <span>Troisième Projet Digital</span>
                    <h2>Amphithéâtre de Carthage en 3D</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Modélisation de l’Amphithéâtre de Carthage : maquette et
                      visite virtuelle en 3D Aout 2018
                    </p>
                    <p className="mb-65">
                      Il s’agit d’un workshop d’été organisé avec les étudiants
                      de l’ENAU afin de développer des compétences des étudiants
                      en matière de modélisation 3D avec des experts et des
                      enseignants. Le résultat obtenu nous a permis d’avoir la
                      maquette 3D et l’animation d’une visite en 3D de
                      l’amphithéâtre de Carthage conformément aux ressources
                      scientifiques trouvées sur le monument.
                    </p>
                    <a href="about.html">
                      Visiter Notre Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main id="carthage" className="bodyBg">
        {/* data-background="assets/img/gallery/section_bg02.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/patrimoine/zagh.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle2 mb-50">
                    <span>Quatrième Projet Digital</span>
                    <h2>Projet CarthaGo </h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Application pour la visite de Carthage : Application
                      mobile CarthaGo Aout – Octobre 2019
                    </p>
                    <p className="mb-65">
                      Il s’agit d’un projet de restitution archéologique 3D pour
                      valoriser, comprendre et médier la Carthage antique
                      réalisé dans le cadre de l’atelier d’été « Mnémosyne : 3D
                      [archéo-Carthage] ». L’objectif de ce projet est de créer
                      une application mobile qui permet aux visiteurs de
                      Carthage (toute cible confondue) de choisir un parcours et
                      de recevoir des informations pertinentes sur les monuments
                      tout au long de la visite.
                    </p>
                    <a href="about.html">
                      Visiter Notre Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main id="carthage" className="bodyBg">
        {/* data-background="assets/img/gallery/section_bg02.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/patrimoine/zagh.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle2 mb-50">
                    <span>cinquième Projet Digital</span>
                    <h2>Statues de Carthage en 3D</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Modélisation 3D de certaines statues du musée de Carthage
                      : maquette 3D via la technique de la photogrammétrie Aout
                      2018
                    </p>
                    <p className="mb-65">
                      Plusieurs membres de l’association ont suivi une formation
                      en photogrammétrie assurée par la société Iconem au mois
                      d’Aout 2018 au musée de Carthage. Durant cette formation,
                      les membres ont eu l’occasion de créer des objets et le
                      modèle 3D du quartier Hannibal de Carthage avec la
                      technique de la photogrammétrie.
                    </p>
                    <a href="about.html">
                      Visiter Notre Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main id="carthage" className="bodyBg">
        {/* data-background="assets/img/gallery/section_bg02.jpg" */}
        <div className="support-company-area pt-100 pb-100 section-bg fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/patrimoine/zagh.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle2 mb-50">
                    <span>sixième Projet Digital</span>
                    <h2>Application des Thermes d'Antonin</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Application mobile pour la visite des Thermes d’Antonin
                      Carthage : Application mobile appuyée par la technique de
                      la réalité augmentée Mars- Septembre 2017
                    </p>
                    <p className="mb-65">
                      Il s’agit d’un projet qui a pour but d’augmenter
                      l’attractivité du site des thermes d’Antonin de Carthage
                      via les techniques de la réalité virtuelle et de la
                      réalité augmentée. Il s’agit d’une application développée
                      sur Android qui permet au visiteur une immersion totale
                      dans un environnement 3D représentant le sous-sol des
                      thermes d’Antonin. Le visiteur sera équipé également d’un
                      catalogue en papier pour compléter sa visite via la
                      technique de la technique de la réalité augmentée. En
                      effet, cette technique permettra de visualiser des
                      éléments numériques (maquette 3D, animation 3D, video,…) à
                      partir des images cibles contenues dans le catalogue.
                    </p>
                    <a href="about.html">
                      Visiter Notre Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Patrimoine;
