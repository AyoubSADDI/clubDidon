import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPlannings,
} from "../componentsDash/redux/planning/planningActions";
import {
  fetchConferences,
} from "../componentsDash/redux/conference/conferenceActions";
import {
  fetchSorties,
} from "../componentsDash/redux/sortie/sortieActions";

import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import ReadMoreReact from 'read-more-react';

const Programme = () => {

  const planningData = useSelector((state) => state.planning);
  const conferenceData = useSelector((state) => state.conference);
  const sortieData = useSelector((state) => state.sortie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlannings());
    dispatch(fetchConferences());
    dispatch(fetchSorties());
  }, []);

  const planning_container = planningData.plannings.map((planning) => (

  <tr>
    <td>{planning.Date}</td>
    <td>{planning.titre}</td>
    <td>{planning.description}</td>
  </tr>
    ));

    const conference_container = conferenceData.conferences.map((conference) => (

      <div className="col-xl-4 col-lg-4 col-md-4">
      <div className="home-blog-single mb-30">
        <div className="blog-img-cap">
          <div className="blog-img">
          <img src={conference.imageUrl}
                     alt="" />
            <ul>
              <li>By Admin-{conference.Date}</li>
            </ul>
          </div>
          <div className="blog-cap">
            <h3><a href="blog_details.html">{conference.titre}</a></h3>
            <ReadMoreReact text={conference.description}
            min="60"
            ideal="70"
            max="80"
            readMoreText="-read more"/>             
           <a href="/blogDetails" className="more-btn">Details</a><br></br>       
          </div>
        </div>
      </div>
    </div>
        ));

        const sortie_container = sortieData.sorties.map((sortie) => (

          <div className="col-xl-4 col-lg-4 col-md-4">
          <div className="home-blog-single mb-30">
            <div className="blog-img-cap">
              <div className="blog-img">
              <img src={sortie.imageUrl}
                         alt="" />
                <ul>
                  <li>By Admin-{sortie.Date}</li>
                </ul>
              </div>
              <div className="blog-cap">
                <h3><a href="blog_details.html">{sortie.titre}</a></h3>
                <ReadMoreReact text={sortie.description}
                min="60"
                ideal="70"
                max="80"
                readMoreText="-read more"/>             
               <a href="/blogDetails" className="more-btn">Details</a><br></br>       
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
              <img src="assets/img/logo/11icon.png" alt="looding" />
            </div>
          </div>
        </div>
      </div>
      <Header />

      <div className="slider-area19 ">
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
                      steps={["_Programme", 1000, "_Program", 1000]}
                    />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="planning" className="about-details pt-150 mb-3 bodyBg">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap">
                <h4>Planning Annuel</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-1 container bodyBg">
          <table
            className="table table-striped "
            style={{ backgroundColor: "white" }}
          >
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Evénement</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
            {planning_container}
            </tbody>
          </table>
        </div>{" "}
      </div>
      <div className="bodyBg">
        <div id="conf" className="about-details mb-5 pt-150 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap">
                  <h4>Conférences à Venir</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area bodyBg">
          <div className="">
            <div className="row">        
             { conference_container}
            </div>
          </div>
        </div>
      </div>
      <div className="bodyBg">
        <div id="conf" className="about-details mb-5 pt-150 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap">
                  <h4>Conférences Passées</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area bodyBg">
          <div className="">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/confirance/conf1.jpg" alt="" />
                      <ul>
                        <li>By Admin - October 27, 2020</li>
                      </ul>
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          16 Easy Ideas to Use in Everyday
                        </a>
                      </h3>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magnua Quis ipsum
                        suspendisse ultrices gra.
                      </p>
                      <a href="blog_details.html" className="more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/confirance/conf2.jpg" alt="" />
                      <ul>
                        <li>By Admin - October 27, 2020</li>
                      </ul>
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          16 Easy Ideas to Use in Everyday
                        </a>
                      </h3>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magnua Quis ipsum
                        suspendisse ultrices gra.
                      </p>
                      <a href="blog_details.html" className="more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/confirance/conf1.jpg" alt="" />
                      <ul>
                        <li>By Admin - October 27, 2020</li>
                      </ul>
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          16 Easy Ideas to Use in Everyday
                        </a>
                      </h3>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magnua Quis ipsum
                        suspendisse ultrices gra.
                      </p>
                      <a href="blog_details.html" className="more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyBg">
        {/* Blog Area End */}
        <div id="sorties" className="about-details pt-150 mb-5 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap ">
                  <h4>Sorties à Venir</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area">
          <div className="">
            <div className="row">            
             {sortie_container}
            </div>
          </div>
        </div>
      </div>
      <div className="bodyBg">
        {/* Blog Area End */}
        <div id="sorties" className="about-details pt-150 mb-5 bodyBg">
          <div className="container">
            <div className="row">
              <div className="offset-xl-1 col-lg-8">
                <div className="about-details-cap ">
                  <h4>Sorties Passées</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area">
          <div className="">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/Sorties/s1.jpg" alt="" />
                      <ul>
                        <li>By Admin - October 27, 2020</li>
                      </ul>
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          16 Easy Ideas to Use in Everyday
                        </a>
                      </h3>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magnua Quis ipsum
                        suspendisse ultrices gra.
                      </p>
                      <a href="blog_details.html" className="more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/Sorties/s1.jpg" alt="" />
                      <ul>
                        <li>By Admin - October 27, 2020</li>
                      </ul>
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          16 Easy Ideas to Use in Everyday
                        </a>
                      </h3>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magnua Quis ipsum
                        suspendisse ultrices gra.
                      </p>
                      <a href="blog_details.html" className="more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/Sorties/s3.jpg" alt="" />
                      <ul>
                        <li>By Admin - October 27, 2020</li>
                      </ul>
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          16 Easy Ideas to Use in Everyday
                        </a>
                      </h3>
                      <p>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magnua Quis ipsum
                        suspendisse ultrices gra.
                      </p>
                      <a href="blog_details.html" className="more-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End */}
      <Footer />
    </div>
  );
};

export default Programme;
