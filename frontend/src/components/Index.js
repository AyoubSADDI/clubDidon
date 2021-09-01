import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchActualites,
  DeleteActualite,
  AddActualite,
  UpdateActualite,
} from "../componentsDash/redux/actualite/actualiteActions";
import Header from './Header'
import video from './video/video.mp4'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

toast.configure()
const Index = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem("login"));
  const userName = loginFromStorage.userId;

  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    history.push("/login");
  };

  const initialActualiteState = {
    _id: "",
    userName: "",
    ptitre: "",
    dtitre: "",
    contenu: "",
  };

  const notifyAdd = () => {
    toast.success('Ajouter avec succès !',{
      position: toast.POSITION.TOP_RIGHT , 
      autoClose:6000
    })
    }
    
  const notifyDelete = () => {
    toast.success('Supprimer avec succès !',{
      position: toast.POSITION.TOP_RIGHT , 
      autoClose:6000
    })
    }
    
  const notifyUpdate = () => {
    toast.success('Mise à jour avec succès !',{
      position: toast.POSITION.TOP_RIGHT , 
      autoClose:6000
    })
    }

  const [actualite, setActualite] = useState(initialActualiteState);


  const actualiteData = useSelector((state) => state.actualite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActualites());
    console.log(actualiteData);
  }, []);

  const onAdd = (e) => {
    e.preventDefault();
    console.log("submitting : ", e);
    const loginFromStorage = JSON.parse(localStorage.getItem("login"));
    const userId = loginFromStorage.userId;
    console.log(userId);
    actualite.userName = userId;
    dispatch(AddActualite(actualite));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    console.log("actualite : ", actualite);
    console.log("submitting : ", e);
    dispatch(UpdateActualite(actualite));
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
      <Header />
      <main>
     
    {/* slider Area Start*/}
    <div className="slider-area">

    <video autoPlay loop muted className="slider-area999"
      style={{
       position:"absolute",
        width:"100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%, -50%)",
        zIndex:"-1"
        }}
        >
            <source src={video} type="video/mp4"></source>
        </video>

      <div className="slider-active">
        {/* Single Slider */}
      
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-8">
                <div className="hero__caption">
                 
                  <h1 data-animation="fadeInLeft" data-delay=".5s">Bienvenue au club Didon de Carthage</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">Chers Carthaginois vous êtes sur le site du club Didon de Carthage. Nous sommes une association culturelle officiellement inscrite au Jort Tunisien. Notre principale vocation est l'ouverture de l'accès à la culture au grand public et la valorisation du patrimoine de Carthage.</p>
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
                  <h1 data-animation="fadeInLeft" data-delay=".5s">Evènements culturels</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">Notre association organise chaque année des événements qui visent à rapprocher le grand public de la culture Carthaginoise   punique, romaine et byzantine à chaque fois dans un site archéologique différent.</p>
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
                  <h1 data-animation="fadeInLeft" data-delay=".5s">Colloques, conférences et débats</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">Notre association cherche à faire connaitre l'histoire de Carthage en invitant des scientifiques, des conférenciers de renommée et des académiciens pour les rapprocher du grand public.</p>
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
                  <h1 data-animation="fadeInLeft" data-delay=".5s">Loisirs, visites et sorties culturelles</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">Notre association organise le premier dimanche du mois des sorties culturelles dans les différents sites archéologiques sur tout le territoire tunisien. Nous visons à faire connaitre dans chaque sortie le patrimoine matériel et immatériel ainsi que les produits du terroir de chaque région.</p>
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
                  <h1 data-animation="fadeInLeft" data-delay=".5s">Projets culturels numériques</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">L'association cherche à travers ces projets à développer l'axe médiation afin de créer un lien plus fort entre le visiteur et le patrimoine Tunisien. Il s'agit de soutenir des projets innovants dont l’objet est le développement de supports numériques permettant un rapport augmenté à une création ou à un élément patrimonial (ex. : applications, web-apps, dispositifs réalité virtuelle et augmentée)</p>
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



      )
}

      export default Index
