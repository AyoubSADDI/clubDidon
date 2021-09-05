import React, { useEffect, useState } from "react";
import {
  fetchAdhesions,
  AddAdhesion,
} from "../componentsDash/redux/adhesion/adhesionActions";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Adhesion = () => {

  const notify = () => {
  toast.success('Envoyer avec succès !',{
    position: toast.POSITION.TOP_RIGHT , 
    autoClose:6000
  })
  }

  const initialAdhesionState = {
    _id: "",
    nom: "",
    prenom: "",
    dateNais: "",
    cin: "",
    societe: "",
    profession: "",
    telephone: "",
    email: "",
    adresse: "",
    createdAt:"",
  };

  const [adhesion, setAdhesion] = useState(initialAdhesionState);

  const adhesionData = useSelector((state) => state.adhesion);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdhesions());
    console.log(adhesionData);
  }, []);

  const onAdd = (e) => {
    e.preventDefault();
    console.log("submitting : ", e);
    dispatch(AddAdhesion(adhesion));
  
  };

  return (
    <div className="bodyBg">
      {/* Preloader Start */}
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
        <div className="slider-area16">
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
                          ' Adhésion',1000,'  Club didon de Carthage',1000,
                         
                        ]}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* ================ contact section start ================= */}
        <section className="contact-section">
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Remplir votre Adhésion</h2>
              </div>
              <div className="col-lg-8">
                <form
                  className="form-contact contact_form"
                  onSubmit={(e) => {
                    onAdd(e);
                    notify();
                  }}
                >
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="nom"
                          type="text"
                          placeholder="Nom"
                          value={adhesion.nom}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              nom: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="prenom"
                          type="text"
                          placeholder="Prénom"
                          value={adhesion.prenom}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              prenom: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="dateNais"
                          type="text"
                          placeholder="Date de Naissance"
                          value={adhesion.dateNais}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              dateNais: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="cin"
                          type="number"
                          placeholder="Cin"
                          value={adhesion.cin}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              cin: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="sotcite"
                          type="text"
                          placeholder="Société_Etablissement"
                          value={adhesion.societe}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              societe: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="prof"
                          type="text"
                          placeholder="Profession"
                          value={adhesion.profession}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              profession: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="tele"
                          type="number"
                          placeholder="Télephone"
                          value={adhesion.telephone}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              telephone: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          type="text"
                          placeholder="Email"
                          value={adhesion.email}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              email: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="add"
                          type="text"
                          placeholder="Adresse"
                          value={adhesion.adresse}
                          onChange={(e) => {
                            const newAdhesionObj = {
                              ...adhesion,
                              adresse: e.target.value,
                            };
                            setAdhesion(newAdhesionObj);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      className="button button-contactForm boxed-btn"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ================ contact section end ================= */}
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

export default Adhesion;
