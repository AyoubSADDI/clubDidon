import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMedias } from "../componentsDash/redux/media/mediaActions";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import moment from "moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Media = () => {
  const mediaData = useSelector((state) => state.media);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedias());
  }, []);
  const clockevent = (newDate) => {
    return moment(new Date(newDate)).format("DD/MM/YYYY");
  };

  const media_container = mediaData.medias.reverse().map((media) => (
    <div>
      <div id="Web">
      <LazyLoadImage id="ACBIRSA" src="assets/img/media/didonbirsaa.png" alt="" />
        <div id="GP4">
        <LazyLoadImage id="IMG" src={media.imageUrl} alt="" />
        </div>
        <div id="ARTC">
          <span>{media.contenu}</span>
          <br></br>
          <a href={media.urlMagazin} hidden={media.urlMagazin ===""}>Lien magazin</a>
        </div>
        <div id="Gp_5">
          <svg className="Ele_1"></svg>
        </div>
        <div id="AB">
          <span>{media.titre} </span>
        </div>
        <div id="DATE12">
          <span>{clockevent(media.Date)}</span>
        </div>
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
        <div className="slider-area1919">
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
                          " Media",
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

        {media_container}
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
export default Media;
