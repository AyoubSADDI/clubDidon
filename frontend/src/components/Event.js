import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ReadMoreReact from 'read-more-react';
import Typical from 'react-typical'

const Event = () => {
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
    <div className="slider-area12">
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
                                        '_Les Événements',1000,'_The events',1000,
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
    
      {/* Want To work End */}
    {/* Blog Area Start */}
    <div className="bodyBg">
    <div id="Venir" className="about-details pt-150 mb-5 bodyBg">
      <div className="container">
        <div className="row">
          <div className="offset-xl-1 col-lg-8">
            <div className="about-details-cap">
              <h4>Evénements A Venir</h4>
             </div >
          </div>
        </div>
      </div>
    </div>
    <div className="home-blog-area ">
      <div className="">
        {/* Section Tittle */}
      
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/event/c1.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
                  min="60"
                  ideal="70"
                  max="80"
                  readMoreText="-read more"/>             
                 <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/c2.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>   
                  <a href="blog_details.html" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/c2.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>                 
              <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* Blog Area End */}
 {/* Blog Area Start */}
 <div className="bodyBg">
 <div className="about-details pt-150 mb-5 bodyBg">
      <div className="container bodyBg">
        <div className="row">
          <div className="offset-xl-1 col-lg-8">
            <div className="about-details-cap ">
              <h4 id="Passés">Evénements Passés</h4>
             </div >
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
                <img src="assets/img/event/POSTER1.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>               
                <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/POSTER2.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>                
               <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/POSTER3.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>                    
           <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/POSTER4.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>                    
           <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/POSTER5.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>                    
           <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                <img src="assets/img/event/POSTER6.jpg" alt="" />
                  <ul>
                    <li>By Admin   -   October 27, 2020</li>
                  </ul>
                </div>
                <div className="blog-cap">
                  <h3><a href="blog_details.html">16 Easy Ideas to Use in  Everyday</a></h3>
                  <ReadMoreReact text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra."
            min="60"
            ideal="70"
            max="80"
          readMoreText="-read more"/>                    
           <a href="/blogDetails" className="more-btn">Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
    {/* Blog Area End */}
    <Footer/>
        </div>
    )
}

export default Event
