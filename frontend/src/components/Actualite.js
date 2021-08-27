import React from "react";
import Header from './Header'
import Footer from './Footer'
import Typical from 'react-typical'

const About = () => {

 

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
 <Header/>
  <main>
    <div className="slider-area2">
      <div className="slider-height2 hero-overly2 d-flex align-items-center">
        <div className="">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 text-right">    
                <h2>Bienvenue à
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  '_Actualité',1000,'_actuality',1000,
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
           
              <h4>Conférence</h4>
              <p >L’association Didon de Carthage vise à mettre au point une stratégie d’avenir afin de mieux impulser l’action associative en tant que facteur de promotion du patrimoine, du tourisme et de la culture en Tunisie. 

Il s’agit d’une jeune association qui a pour principal objectif de jouer, avec ses partenaires, le rôle de médiateur culturel qui consiste à favoriser les liens entre l’objet culturel et les visiteurs en utilisant les nouvelles technologies.


              </p>
              <p id="mission"> En effet, en plus des conférences et des sorties organisées dans les sites archéologiques, l’association « Didon de Carthage » souhaite élargir ses champs d’action et son rôle d’expertise, d’étude et de recherche en matière de pratiques numériques technologiques avec de nouveaux supports et usages – auprès du grand public et des professionnels. 

Dans ce nouveau contexte numérique, notre association projette de réaliser des projets 3D autour de l’art visuel, qui feront l’objet tout au long de l’année d’expositions, de débats, d’événements, et se présenteront également comme un véritable support pour la conservation et la valorisation du patrimoine Tunisien et plus particulièrement du patrimoine de Carthage.  Nous espérons que ces projets rencontreront un vif succès auprès des adhérents mais aussi de l’ensemble des citoyens et particulièrement des jeunes Tunisiens. 
</p>
            </div >
            <div className="about-details-cap mb-50 pt-5">
              <h4 >Evénement</h4>
              <p>Dans ses statuts, l’association Didon de Carthage a pour objectifs de : 

              </p>
              <p id="activité"> 
              -Mettre en valeur le patrimoine Carthaginois  <br></br>

-Organiser des manifestations nationales et internationales des séminaires, des conférences, des tables rondes et des ateliers sur la civilisation Carthaginoise punique ainsi que les autres civilisations  <br></br>

-Rassembler les associations travaillant dans le même domaine culturel historique <br></br>

-Faire connaître au grand public les richesses et les particularités des sites archéologiques dans toute la Tunisie  <br></br>

-Organiser des manifestations culturelles et artistiques sur le site de Carthage-Sidi Bou Saîd et toute la banlieue nord  <br></br>

-Lier des relations culturelles et scientifiques avec des organisations similaires à l’intérieur et à l'extérieur du pays <br></br>

-Travailler sur la Renaissance de la civilisation Carthaginoise  <br></br>

-Introduire les nouvelles technologies pour la mise en valeur du patrimoine de Carthage et de toute la Tunisie  
<br></br>
-Valoriser le Rôle et la légende de la Reine Elyssa (Didon) Fondatrice de Carthage ainsi que les femmes Carthaginoises (et Tunisiennes) de l'époque punique jusqu'à nos jours 



              </p>
            </div> 
            <div className="about-details-cap mb-50 pt-5">
              <h4 >Sortie</h4>
              <p>
	L’association Didon de Carthage est une organisation non gouvernementale fondée en 2014 par deux jeunes femmes tunisiennes passionnées de l’histoire de Carthage Mme Eryj Ben Sassi et Mlle Inès Hassoumi.

              </p>
              <p id="activité"> L’association est inscrite officiellement au JORT en 2017. Elle est gérée par un groupe de passionnés, d’experts et d’amateurs dans le domaine du patrimoine, de l’archéologie et de l’histoire. Il s’agit d’une association apolitique et areligieuse qui a pour but de valoriser le patrimoine Tunisien et plus particulièrement le patrimoine Carthaginois.</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </main>
 <Footer/>
  <div id="back-top">
    <a title="Go to Top" href="#"><i className="fas fa-level-up-alt" /></a>
  </div>
</div>

    )
}

export default About
