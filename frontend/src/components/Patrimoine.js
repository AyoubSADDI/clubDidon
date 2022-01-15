import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import { fetchActualites } from "../componentsDash/redux/actualite/actualiteActions";
import moment from 'moment'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Patrimoine = () => {
 
  const clockevent=(newDate)=>{

    return  moment(new Date(newDate)).format("DD/MM/YYYY")
    }
  const actualiteData = useSelector((state) => state.actualite);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActualites());
  }, []);
  const actualiteP_container = actualiteData.actualites
    .reverse()
    .map((actualite) =>
      actualite.categorie === "projet" &&
      new Date(actualite.Date).valueOf() < new Date().valueOf() ? (
        <main id="zagh" className="bodyBg">
          <div className="support-company-area pt-100 pb-100 section-bg fix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="support-location-img">
                  <LazyLoadImage
                   src={actualite.imageUrl} alt="club, didon, carthage, histoire, patrimoine, visite, association, sauvegarde, restauration" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="right-caption">
                    {/* Section Tittle */}
                    <div className="section-tittle section-tittle2 mb-50">
                      <span>{clockevent(actualite.Date)}</span>
                      <h2>{actualite.titre}</h2>
                    </div>
                    <div className="support-caption">
                      <p className="pera-top">{actualite.description}</p>
                      <p className="mb-65">{actualite.descriptionDetail} </p>
                      <a href={actualite.webSite} hidden={actualite.webSite ===""}>Visiter Notre Site</a>
                      <a href={actualite.fbUrl} hidden={actualite.fbUrl ===""}>Visiter Notre Page FB</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
              src="assets/img/logo/11icon.png" alt="club, didon, carthage, histoire, patrimoine, visite, association, sauvegarde, restauration" />
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
                        wrapper="a"
                        steps={[
                          " Patrimoine Digital",
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
      {actualiteP_container} 
      <Footer />
    </div>
  );
};

export default Patrimoine;
