import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import { useState } from "react";
import DayJs from "react-dayjs";
import moment from "moment";

const Blog = (props) => {
  const [actualitedetail, setActualitedetail] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/actualite/" + props.match.params.id)
      .then((res) => res.json())
      .then((result) => {
        setActualitedetail(result);
      });
  });
  const clockevent = (newDate) => {
    return moment(new Date(newDate)).format("DD/MM/YYYY");
  };
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
      {/* Preloader Start */}
      <Header />
      <main>
        {/*? Hero Start */}
        <div className="slider-area202">
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
                        steps={[" Details", 1000]}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/*================Blog Area =================*/}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={actualitedetail.imageUrl}
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        {clockevent(actualitedetail.Date)}
                        <p>{actualitedetail.lieux}</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="blog_details.html">
                        <h2>{actualitedetail.titre}</h2>
                      </a>
                      <p>{actualitedetail.description}</p>
                      <br></br>
                      <p>{actualitedetail.descriptionDetail}</p>
                      <ul className="blog-info-link"></ul>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  {/* <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_1.png" alt="post" />
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3>From life was you fish...</h3>
                                                </a>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_2.png" alt="post" />
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3>The Amazing Hubble</h3>
                                                </a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_3.png" alt="post" />
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3>Astronomy Or Astrology</h3>
                                                </a>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_4.png" alt="post" />
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3>Asteroids telescope</h3>
                                                </a>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                    </aside> */}

                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Photos</h4>
                    <ul className="instagram_row flex-wrap">
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_5.png"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_6.png"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_7.png"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_8.png"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_9.png"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="assets/img/post/post_10.png"
                            alt
                          />
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================Blog Area =================*/}
      </main>
      <Footer />
      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i className="fas fa-level-up-alt" />
        </a>
      </div>
    </div>
  );
};

export default Blog;
