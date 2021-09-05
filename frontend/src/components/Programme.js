import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchActualites,
} from "../componentsDash/redux/actualite/actualiteActions";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import ReadMoreReact from 'read-more-react';
import moment from 'moment'

const Programme = () => {

const clockevent=(newDate)=>{

return  moment(new Date(newDate)).format("DD/MM/YYYY")
}

  

  const actualiteData = useSelector((state) => state.actualite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActualites());
    console.log(actualiteData);
  }, []);
  const eventPasse_container = actualiteData.actualites.reverse().map((actualite) => (

   
    (actualite.categorie === "evenement"  && new Date(actualite.Date).valueOf() < new Date().valueOf() ) ?
    <div className="col-xl-4 col-lg-4 col-md-4" >
    <div className="home-blog-single mb-30">
      <div className="blog-img-cap">
        <div className="blog-img">
        <img src={actualite.imageUrl}
                   alt="" />
          <ul>
         
           
            <li>{clockevent(actualite.Date)} </li>
          </ul>
        </div>
        <div className="blog-cap">
          <h3><a href={"/"+actualite._id}>{actualite.titre}</a></h3>
          <ReadMoreReact text={actualite.description}
          min="60"
          ideal="70"
          max="80"
          readMoreText="-Lire la suite"/>       <br></br>          
  
       
         <a href={actualite.fbUrl} className="more-btn">Reserver Par <i className="fab fa-facebook-f" /></a>
     
        </div>
       
      </div> 
      
    </div>
  </div>
  
  :""
  ));
  const ConfPasses_container = actualiteData.actualites.reverse().map((actualite) => (
    
    (actualite.categorie === "conference"  && new Date(actualite.Date).valueOf() < new Date().valueOf() ) ?
    <div className="col-xl-4 col-lg-4 col-md-4" >
    <div className="home-blog-single mb-30">
      <div className="blog-img-cap">
        <div className="blog-img">
        <img src={actualite.imageUrl}
                   alt="" />
          <ul>
          <li>{clockevent(actualite.Date)} </li>
          </ul>
        </div>
        <div className="blog-cap">
          <h3><a href={"/"+actualite._id}>{actualite.titre}</a></h3>
          <ReadMoreReact text={actualite.description}
          min="60"
          ideal="70"
          max="80"
          readMoreText="-Lire la suite"/>   
          <br></br>          
  
       
         <a href={actualite.fbUrl} className="more-btn">Reserver Par <i className="fab fa-facebook-f" /></a>
     
        </div>
       
      </div> 
      
    </div>
  </div>
  
  :""
  ));
  
  

    const sortiePass_container = actualiteData.actualites.reverse().map((actualite) => (
      (actualite.categorie === "sortie" && new Date(actualite.Date).valueOf() < new Date().valueOf() ) ?
      <div className="col-xl-4 col-lg-4 col-md-4">
      <div className="home-blog-single mb-30">
        <div className="blog-img-cap">
          <div className="blog-img">
          <img src={actualite.imageUrl}
                     alt="" />
            <ul>
            <li>{clockevent(actualite.Date)} </li>

            </ul>
          </div>
          <div className="blog-cap">
            <h3><a href={"/"+actualite._id}>{actualite.titre}</a></h3>
            <ReadMoreReact text={actualite.description}
            min="60"
            ideal="70"
            max="80"
            readMoreText="-Lire la suite"/>      <br></br>           
           <a href={actualite.fbUrl} className="more-btn">Reserver Par <i className="fab fa-facebook-f" /></a>
      
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
      <Header />

      <div className="slider-area12 ">
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
                        " Activités", 1000, "  Club didon de Carthage", 1000
                      ]}
                    />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     

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
     {eventPasse_container}
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
            {ConfPasses_container}
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
            {sortiePass_container}      
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
