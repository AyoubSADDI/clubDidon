import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSorties,
  DeleteSortie,
  AddSortie,
  UpdateSortie,
} from "./redux/sortie/sortieActions";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Sortie = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem("login"));
  const userName = loginFromStorage.userId;

  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    history.push("/login");
  };

  const [show, setShow] = useState(false);

  const initialSortieState = {
    _id: "",
    userName: "",
    titre: "",
    Date: "",
    imageUrl: "",
    description: "",
    descriptionDetail: "",
    lieux: "",
  };

  const [sortie, setSortie] = useState(initialSortieState);
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [sortieDetails, setSortieDetails] = useState(initialSortieState);

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
    console.log(event.target.files[0]);
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
    console.log(base64EncodedImage);
    sortie.imageUrl = base64EncodedImage;
  };

  const onAdd = (e) => {
    e.preventDefault();
    console.log("submitting : ", e);
    if (!previewSource) return;
    uploadImage(previewSource);
    const loginFromStorage = JSON.parse(localStorage.getItem("login"));
    const userId = loginFromStorage.userId;
    console.log(userId);
    sortie.userName = userId;
    dispatch(AddSortie(sortie));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    console.log("sortie : ", sortie);
    console.log("submitting : ", e);
    if (previewSource) uploadImage(previewSource);
    dispatch(UpdateSortie(sortie));
  };

  const sortieData = useSelector((state) => state.sortie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSorties());
  }, []);

  const sortie_container = sortieData.sorties.reverse().map((sortie) => (
    <tr key={sortie._id}>
      <td>
        <h4>{sortie.titre}</h4>
        <p>{sortie.lieux} </p>
        <p>{sortie.descriptionDetail}</p>
      </td>
      <td> {sortie.description}</td>
      <td>{sortie.Date}</td>
      <td>
        <img
          src={sortie.imageUrl}
          width="100"
          height="100"
          name="Sortie-Image"
          alt="Sortie"
        />{" "}
      </td>
      <td>{sortie.userName}</td>
      <td>
      <a
          href="#"
          className="btn btn-danger btn-sm btn-block mt-2"
          onClick={() => dispatch(DeleteSortie(sortie._id),notifyDelete())}
        >
          <i className="fas fa-trash" />{" "}
        </a>
        <a
          href="#"
          className="btn btn-primary btn-sm btn-block"
          data-toggle="modal"
          data-target="#modal_add_Sortie"
          onClick={() => setSortie(sortie)}
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
                      <img
                        src="assets/img/logo/logo4.jpg"
                        width="180"
                        height="50" alt=""
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
                          <b style={{ color: "red" }}>Sorties</b>
                        </li>
                        <li className="list-inline-item dropdown notif">
                          <a
                            className="nav-link dropdown-toggle nav-user"
                            data-toggle="dropdown"
                            href="#"
                            aria-haspopup="false"
                            aria-expanded="false"
                          >
                            <img
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
                              className="fas fa-user-plus"
                              aria-hidden="true"
                            />{" "}
                            Ajouter nouveau Sortie
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
                                    Ajouter Nouveau Sortie{" "}
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
                                        <label>Titre</label>
                                        <input
                                          className="form-control"
                                          name="titre"
                                          type="text"
                                          value={sortie.titre}
                                          onChange={(e) => {
                                            const newSortieObj = {
                                              ...sortie,
                                              titre: e.target.value,
                                            };
                                            setSortie(newSortieObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label>Date</label>
                                        <input
                                          className="form-control"
                                          name="Date"
                                          type="date"
                                          value={sortie.Date}
                                          onChange={(e) => {
                                            const newSortieObj = {
                                              ...sortie,
                                              Date: e.target.value,
                                            };
                                            setSortie(newSortieObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label>Lieux</label>
                                      <input
                                        className="form-control"
                                        name="lieux"
                                        type="text"
                                        value={sortie.lieux}
                                        onChange={(e) => {
                                          const newSortieObj = {
                                            ...sortie,
                                            lieux: e.target.value,
                                          };
                                          setSortie(newSortieObj);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-lg-12">
                                      <div className="form-group">
                                        <label>Description</label>
                                        <input
                                          className="form-control"
                                          name="Description"
                                          type="text"
                                          value={sortie.description}
                                          onChange={(e) => {
                                            const newSortieObj = {
                                              ...sortie,
                                              description: e.target.value,
                                            };
                                            setSortie(newSortieObj);
                                          }}
                                        />{" "}
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                    <div class="form-group">
                                      <label>Description Détaillé</label>
                                      <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="58"
                                        value={sortie.descriptionDetail}
                                        onChange={(e) => {
                                          const newSortieObj = {
                                            ...sortie,
                                            descriptionDetail: e.target.value,
                                          };
                                          setSortie(newSortieObj);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label>Image</label>
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
                                    Mettre à jour le Sortie{" "}
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
                                        <label>Titre</label>
                                        <input
                                         className="form-control"
                                         name="titre"
                                         type="text"
                                         value={sortie.titre}
                                         onChange={(e) => {
                                           const newSortieObj = {
                                             ...sortie,
                                             titre: e.target.value,
                                           };
                                           setSortie(newSortieObj);
                                         }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label>Date</label>
                                        <input
                                         className="form-control"
                                         name="Date"
                                         type="date"
                                         value={sortie.Date}
                                         onChange={(e) => {
                                           const newSortieObj = {
                                             ...sortie,
                                             Date: e.target.value,
                                           };
                                           setSortie(newSortieObj);
                                         }}
                                        />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label>Lieux</label>
                                      <input
                                        className="form-control"
                                        name="lieux"
                                        type="text"
                                        value={sortie.lieux}
                                        onChange={(e) => {
                                          const newSortieObj = {
                                            ...sortie,
                                            lieux: e.target.value,
                                          };
                                          setSortie(newSortieObj);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div class="col-lg-12">
                                      <div className="form-group">
                                        <label>Description</label>
                                        <input
                                          className="form-control"
                                          name="Description"
                                          type="text"
                                          value={sortie.description}
                                          onChange={(e) => {
                                            const newSortieObj = {
                                              ...sortie,
                                              description: e.target.value,
                                            };
                                            setSortie(newSortieObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="row"></div>
                                    <div class="form-group">
                                      <label>Description Détaillé</label>
                                      <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="58"
                                        value={sortie.descriptionDetail}
                                        onChange={(e) => {
                                          const newSortieObj = {
                                            ...sortie,
                                            descriptionDetail: e.target.value,
                                          };
                                          setSortie(newSortieObj);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label>Image</label>
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
                                    Mettre à jour
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <h3>
                          {" "}
                          <i className="fas fa-plane-departure" />
                          Toutes les Sorties
                        </h3>
                      </div>
                      {/* end card-header */}
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th style={{ minWidth: 200 }}>
                                  Conference Details
                                </th>
                                <th style={{ minWidth: 100 }}>Description</th>
                                <th style={{ width: 100 }}>Date</th>
                                <th style={{ minWidth: 100 }}>Image</th>
                                <th style={{ minWidth: 50 }}>Utilisateur</th>
                                <th style={{ minWidth: 50 }}>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                            {sortie_container}
                              </tbody>
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

export default Sortie;
