import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPartenaires,
  DeletePartenaire,
  AddPartenaire,
  UpdatePartenaire,
} from "./redux/partenaire/partenaireActions";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import jwt_decode from 'jwt-decode'

toast.configure()

const Partenaire = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem("login"));
  const userName = loginFromStorage.userId;

  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    history.push("/login");
  };

  const initialPartenaireState = {
    _id: "",
    userName: "",
    imageUrl: "",
    imageUrle: "",
    nomP: "",
    proprieteLogo: "",
  };

  const [partenaire, setPartenaire] = useState(initialPartenaireState);
  const [fileInputState, setFileInputState] = useState("");
  const [search, SetSearch] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [previewSourcee, setPreviewSourcee] = useState("");
  const [fileInputStatee, setFileInputStatee] = useState("");


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

  const onFileChange = (event) => {
    // Update the state
    const file = event.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };
  const uploadImage = async (base64EncodedImage) => {
    partenaire.imageUrl = base64EncodedImage;
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
    const loginFromStorage = JSON.parse(localStorage.getItem("login"));
    const userId = loginFromStorage.userId;
    partenaire.userName = userId;
    dispatch(AddPartenaire(partenaire));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (previewSource) uploadImage(previewSource);
    dispatch(UpdatePartenaire(partenaire));
  };

  const partenaireData = useSelector((state) => state.partenaire);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPartenaires());
  }, []);
  useEffect(() => { 
    const login = JSON.parse(localStorage.getItem("login"));
    const token = login.token;
    const jwt_Token_decoded = jwt_decode(token);
    console.log("token"+jwt_Token_decoded.exp * 1000);
    console.log("Datee"+Date.now());
    if (jwt_Token_decoded.exp * 1000 < Date.now()) {
     localStorage.clear(); // this runs only when I refresh the page or reload on route change it dosent work
     history.push("/login");
 }

}, []
);

  const partenaire_container = partenaireData.partenaires.filter((partenaire) => {
    if (search === ""){
      return partenaire
    } else if (partenaire.nomP.toLowerCase().includes(search.toLowerCase())){
      return partenaire
    }
      }).reverse().map((partenaire) => (
    <tr key={partenaire._id}>
      <td>
       {partenaire.nomP}
      </td>
    
      <td>{partenaire.proprieteLogo}</td>
      <td>
      <LazyLoadImage
          src={partenaire.imageUrl}
          width="100"
          height="100"
          name="partenaire-Image"
          alt="partenaire"
        />{" "}
      </td>
    
      <td> {partenaire.userName}</td>
      <td>
        <a
          href="#"
          className="btn btn-danger btn-sm btn-block mt-2"
          onClick={() => dispatch(DeletePartenaire(partenaire._id),notifyDelete())}
        >
          <i className="fas fa-trash" />{" "}
        </a>
        <a
          href="#"
          className="btn btn-primary btn-sm btn-block"
          data-toggle="modal"
          data-target="#modal_add_Sortie"
          onClick={() => setPartenaire(partenaire)}
        >
          <i className="far fa-edit" />{" "}
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="body0">
      <div className="adminbody">
        <div id="main">
          {/* top bar navigation */}
          {/* End Navigation */}
          {/* Left Sidebar */}
          <SideBar />
          {/* End Sidebar */}
          <div className="content-page">
            {/* Start content */}
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="breadcrumb-holder">
                    <LazyLoadImage
                        src="assets/img/logo/logo4.jpg"
                        width="180"
                        height="50"
                        alt=""
                      />{" "}
                      <ol className="breadcrumb float-right">
                        <li className="breadcrumb-item">
                          <b style={{ fontSize: "22px", color: "black " }}>
                            {userName}
                          </b>
                        </li>
                        <li className="breadcrumb-item">
                          <b>Accueil</b>
                        </li>
                        <li className="breadcrumb-item active">
                          <b style={{ color: "red" }}>Partnaires</b>
                        </li>
                        <li className="list-inline-item dropdown notif">
                          <a
                            className="nav-link dropdown-toggle nav-user"
                            data-toggle="dropdown"
                            href="#"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                         <LazyLoadImage
                              src="assets/img/logo/woman.png"
                              alt="Profile image"
                              className="avatar-rounded"
                            />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                            {/* item*/}
                            <div className="dropdown-item noti-title">
                              <h5 className="text-overflow">
                                <small>Bonjour, {userName} </small>
                              </h5>
                            </div>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                              <i className="fas fa-user" />
                              <span>Accueil</span>
                            </a>
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item notify-item"
                              onClick={(e) => {
                                onLogout(e);
                              }}
                            >
                              <i className="fas fa-power-off" />
                              <span>Déconnexion</span>
                            </a>
                          </div>
                        </li>
                      </ol>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                {/* end row */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="card mb-3">
                      <div className="card-header">
                        <span className="pull-right">
                          <button
                            className="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#modal_add_user"
                          >
                            <i
                              className="fas fa-handshake"
                              aria-hidden="true"
                            />{" "}
                            Ajouter nouveau Partenaire
                          </button>
                        </span>
                        <div
                          className="modal fade custom-modal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="modal_add_user"
                          aria-hidden="true"
                          id="modal_add_user"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <form
                                action="#"
                                method="post"
                                encType="multipart/form-data"
                                onSubmit={(e) => {
                                  onAdd(e);
                                  notifyAdd();
                                }}
                              >
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Ajouter Nouveau Partenaire{" "}
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                  >
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label>Nom de Partenaire:</label>
                                        <input
                                          className="form-control"
                                          name="nomP"
                                          type="text"
                                          value={partenaire.nomP}
                                          onChange={(e) => {
                                            const newPartenaireObj = {
                                              ...partenaire,
                                              nomP: e.target.value,
                                            };
                                            setPartenaire(newPartenaireObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label>Logo(114*160):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl"
                                      className="from-input"
                                      value={fileInputState}
                                      onChange={onFileChange}
                                    />
                                  </div>
                                  {previewSource && (
                                    <img
                                      src={previewSource}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Ajouter
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/*2éme popUp*/}

                        <div
                          className="modal fade custom-modal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="modal_add_Sortie"
                          aria-hidden="true"
                          id="modal_add_Sortie"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <form
                                encType="multipart/form-data"
                                className="form"
                                onSubmit={(e) => {
                                  onUpdate(e);
                                  notifyUpdate();
                                }}
                              >
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Mettre à jour le Partenaire{" "}
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                  >
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label>Nom de Partenaire:</label>
                                        <input
                                          className="form-control"
                                          name="nomP"
                                          type="text"
                                          value={partenaire.nomP}
                                          onChange={(e) => {
                                            const newPartenaireObj = {
                                              ...partenaire,
                                              nomP: e.target.value,
                                            };
                                            setPartenaire(newPartenaireObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                               
                             
                                  <div className="form-group">
                                  <label>Logo(114*160):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl"
                                      className="from-input"
                                      value={fileInputState}
                                      onChange={onFileChange}
                                    />
                                  </div>
                                  {previewSource && (
                                    <img
                                      src={previewSource}
                                      alt="chosen"
                                      style={{ height: "100px" , width:"100px" }}
                                    />
                                  )}
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Mettre à jour
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <h3>
                          {" "}
                          <i className="fas fa-handshake" />
                          Toutes les Partenaires
                        </h3>
                        <label>Recherche Par Nom de Partenaire :</label>
                        <input className="recherche" type="text" id="name" name="name" required
                          minlength="4" maxlength="20" size="10"  onChange={event => {SetSearch(event.target.value)}}/>
                      </div>
                      {/* end card-header */}
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th style={{ minWidth: 50 }}>Nom de Partenaire</th>                              
                                <th style={{ minWidth: 50 }}>PropriéteLogo</th>
                                <th style={{ minWidth: 100 }}>Logo</th>
                                <th style={{ width: 50 }}>Utilisateur</th>
                                <th style={{ minWidth: 50 }}>Actions</th>
                              </tr>
                            </thead>
                            <tbody>{partenaire_container}</tbody>
                          </table>
                        </div>
                      </div>
                      {/* end card-body */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* END container-fluid */}
            </div>
            {/* END content */}
          </div>
          {/* END content-page */}
        </div>
      </div>
    </div>
  );
};

export default Partenaire;
