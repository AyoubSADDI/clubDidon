import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActualites } from "../componentsDash/redux/actualite/actualiteActions";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import moment from "moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ActualiteArticle = () => {
 
  const actualiteData = useSelector((state) => state.actualite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActualites());
    console.log(actualiteData);
  }, []);

  const clockevent = (newDate) => {
    return moment(new Date(newDate)).format("DD/MM/YYYY");
  };
  const actualiteA_container = actualiteData.actualites
    .reverse()
    .map((actualite) =>
      actualite.categorie === "article" ? (
        <div>
          <div id="Web_1366__0">
          <LazyLoadImage id="ID1" src="assets/img/actualite/article/ID1.png" alt="" />
          <LazyLoadImage
              id="didon_birsa"
              src="assets/img/actualite/article/didon_birsa.png"
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
                  <div></div>
                </article>
              </div>
              <div id="ID2_aout_2021">
                <span>{clockevent(actualite.Date)}</span>
              </div>
              <div className="Description">
                <h2>Description</h2>
              </div>
              <div id="La_fte_de_carthage">
                <span>
                  {actualite.titre}
                  <br />
                </span>
              </div>
              <LazyLoadImage id="p11" src="assets/img/actualite/article/p11.png" alt="" />
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
            <LazyLoadImage src="assets/img/logo/11icon.png" alt="looding" />
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
                          " Actualités article",
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

        {actualiteA_container}
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

export default ActualiteArticle;
