import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEvents,
} from "../componentsDash/redux/event/eventActions";
import Header from './Header'
import Footer from './Footer'
import ReadMoreReact from 'read-more-react';
import Typical from 'react-typical'
import moment from 'moment';



const Event = () => {

  const date_create= moment().format("DD-MM-YYYY hh:mm:ss")
  const eventData = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  console.log("*******"+new Date().toString())
  //let accessAllowed = (age > 18) ? true : false;
  const eventAvenir_container = eventData.events.map((event) => (
    
  (new Date(event.Date).valueOf() > new Date().valueOf() ) ?
  <div className="col-xl-4 col-lg-4 col-md-4" >
  <div className="home-blog-single mb-30">
    <div className="blog-img-cap">
      <div className="blog-img">
      <img src={event.imageUrl}
                 alt="" />
        <ul>
          <li>By Admin-{event.Date}</li>
        </ul>
      </div>
      <div className="blog-cap">
        <h3><a href="blog_details.html">{event.titre}</a></h3>
        <ReadMoreReact text={event.description}
        min="60"
        ideal="70"
        max="80"
        readMoreText="-read more"/>             
       <a href="/blogDetails" className="more-btn">Details</a><br></br>

     
       <a href="https://www.facebook.com/groups/clubdidon/" className="more-btn">Reserver Par <i className="fab fa-facebook-f" /></a>
   
      </div>
     
    </div> 
    
  </div>
</div>

:""
));

const eventPasses_container = eventData.events.map((event) => (
    
  (new Date(event.Date).valueOf() < new Date().valueOf() ) ?
  <div className="col-xl-4 col-lg-4 col-md-4" >
  <div className="home-blog-single mb-30">
    <div className="blog-img-cap">
      <div className="blog-img">
      <img src={event.imageUrl}
                 alt="" />
        <ul>
          <li>By Admin-{event.Date}</li>
        </ul>
      </div>
      <div className="blog-cap">
        <h3><a href="blog_details.html">{event.titre}</a></h3>
        <ReadMoreReact text={event.description}
        min="60"
        ideal="70"
        max="80"
        readMoreText="-read more"/>             
       <a href="/blogDetails" className="more-btn">Details</a><br></br>

     
       <a href="https://www.facebook.com/groups/clubdidon/" className="more-btn">Reserver Par <i className="fab fa-facebook-f" /></a>
   
      </div>
     
    </div> 
    
  </div>
</div>

:""
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
            {/* {new Date().toLocaleString() + ''} */}
           
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
         {eventAvenir_container}
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
         {eventPasses_container}
        </div>
      </div>
    </div></div>
    {/* Blog Area End */}
    <Footer/>
        </div>
    )
}

export default Event
