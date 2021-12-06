import React from "react";
import Header from "./Header";

const Index = () => {
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
        {/* slider Area Start*/}
        <div className="slider-area">
          <video
            autoPlay
            loop
            muted
            className="slider-area999"
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src="assets/video/video.mp4" type="video/mp4"></source>
          </video>

          <div className="slider-active">
            {/* Single Slider */}

            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        Bienvenue au Club Didon de Carthage
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        Chers Carthaginois vous êtes sur le site du club Didon
                        de Carthage. Nous sommes une association culturelle
                        officiellement inscrite au Jort Tunisien. Notre
                        principale vocation est l'ouverture de l'accès à la
                        culture  et la valorisation du patrimoine
                        de Carthage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      {/* <span data-animation="fadeInLeft" data-delay=".1s"></span> */}
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        Evènements Culturels
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        Notre association organise chaque année des événements
                        qui visent à rapprocher le grand public de la culture
                        Carthaginoise punique, romaine et byzantine à chaque
                        fois dans un site archéologique différent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      {/* <span data-animation="fadeInLeft" data-delay=".1s"></span> */}
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        Colloques, Conférences et Débats
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        Notre association cherche à faire connaitre l'histoire
                        de Carthage en invitant des scientifiques, des
                        conférenciers de renommée et des académiciens pour les
                        rapprocher du grand public.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        Loisirs, Visites et Sorties Culturelles
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        Notre association organise le premier dimanche du mois
                        des sorties culturelles dans les différents sites
                        archéologiques sur tout le territoire tunisien. Nous
                        visons à faire connaitre dans chaque sortie le
                        patrimoine matériel et immatériel ainsi que les produits
                        du terroir de chaque région.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-8">
                    <div className="hero__caption">
                      <h1 data-animation="fadeInLeft" data-delay=".5s">
                        Projets Culturels Numériques
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        L'association cherche à travers ces projets à développer
                        l'axe médiation afin de créer un lien plus fort entre le
                        visiteur et le patrimoine Tunisien. Il s'agit de
                        soutenir des projets innovants dont l’objet est le
                        développement de supports numériques permettant un
                        rapport augmenté à une création ou à un élément
                        patrimonial (ex. : applications, web-apps, dispositifs de
                        réalité virtuelle et augmentée)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider Area End*/}
      </main>
    </div>
  );
};

export default Index;
