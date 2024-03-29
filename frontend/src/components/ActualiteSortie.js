import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActualites } from "../componentsDash/redux/actualite/actualiteActions";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import moment from "moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ActualiteSortie = () => {
  const actualiteData = useSelector((state) => state.actualite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActualites());
  }, []);
  const clockevent = (newDate) => {
    return moment(new Date(newDate)).format("DD/MM/YYYY");
  };
  const actualiteS_container = actualiteData.actualites
    .reverse()
    .map((actualite) =>
      actualite.categorie === "sortie" &&
      new Date(actualite.Date).valueOf() > new Date().valueOf() ? (
        <div>
          <div id="Web_1366__0">
          <LazyLoadImage
 id="l12x" src="assets/img/actualite/sortie/l12x.png" alt="" />
                <LazyLoadImage
 id="ID1" src="assets/img/actualite/sortie/ID1.png" alt="" />
               <LazyLoadImage

              id="didon_birsa"
              src="assets/img/actualite/sortie/SORTIE.jpg"
              alt=""
            />
            <section>
              <div className="DESCRIPTION">
                <article className="article">
                  <p style={{ color: "white" }}>{actualite.description}</p>
                  <br></br>
                  <p style={{ color: "white" }}>
                    {actualite.descriptionDetail}
                  </p>
                  <div>
                    {" "}
                    <a href={actualite.fbUrl} className="lien" hidden={actualite.fbUrl ===""}>
                      Lien Facebook...
                    </a>
                  </div>
                </article>
              </div>
              <div id="ID2_aout_2021">
                <span>{clockevent(actualite.Date)}</span>
              </div>
              <div className="Description">
                <h2>Description</h2>
              </div>
              <div id="Lieux">
                <h2>Lieux : {actualite.lieux}</h2>
              </div>
              <div id="La_fte_de_carthage">
                <span>
                  {actualite.titre}
                  <br />
                </span>
              </div>
              <LazyLoadImage

                id="__________Facebook_et_1_page_s"
                src={actualite.imageUrl}
                alt=""
              />
                  <LazyLoadImage

                id="p11"
                src="assets/img/actualite/sortie/Tanittt.png"
                alt=""
              />
            </section>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br> <br></br> <br></br>
        </div>
      ) : (
        ""
      )
    );

  return (
    <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
            <LazyLoadImage
 src="assets/img/logo/11icon.png" alt="looding" />
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main>
        <div className="slider-area19">
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
                          " Actualités sorties",
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
        {actualiteS_container}
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

export default ActualiteSortie;
