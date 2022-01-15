import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExecutifs,
  DeleteExecutif,
  AddExecutif,
  UpdateExecutif,
} from "./redux/executif/executifActions";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import jwt_decode from 'jwt-decode'

toast.configure()

const Executif = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem("login"));
  const userName = loginFromStorage.userId;

  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    history.push("/login");
  };

  const initialExecutifState = {
    _id: "",
    userName: "",
    name: "",
    role: "",
    imageUrl: "",
    description: "",
  };

  const [executif, setExecutif] = useState(initialExecutifState);
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [executifDetails, setExecutifDetails] = useState(initialExecutifState);

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
    executif.imageUrl = base64EncodedImage;
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
    const loginFromStorage = JSON.parse(localStorage.getItem("login"));
    const userId = loginFromStorage.userId;
    executif.userName = userId;
    dispatch(AddExecutif(executif));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (previewSource) uploadImage(previewSource);
    dispatch(UpdateExecutif(executif));
  };

  const executifData = useSelector((state) => state.executif);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExecutifs());
  }, []);
  useEffect(() => { 
    const login = JSON.parse(localStorage.getItem("login"));
    const token = login.token;
    const jwt_Token_decoded = jwt_decode(token);
    if (jwt_Token_decoded.exp * 1000 < Date.now()) {
     localStorage.clear();
     history.push("/login");
 }

}, []
);

  const event_container = executifData.executifs.reverse().map((executif) => (
    <tr key={executif._id}>
      <td>
        <h4>Nom et Prénom:{executif.name}</h4>
        <p>Rôle:{executif.role} </p>
        <p>Description:{executif.description}</p>
      </td>
      <td>
      <LazyLoadImage
          src={executif.imageUrl}
          width="100"
          height="100"
          name="executif-Image"
          alt="executif"
        />{" "}
      </td>
      <td>{executif.userName}</td>
      <td>
        <a
          href="#"
          className="btn btn-danger btn-sm btn-block mt-2"
          onClick={() => dispatch(DeleteExecutif(executif._id),notifyDelete())}
        >
          <i className="fas fa-trash" />{" "}
        </a>
        <a
          href="#"
          className="btn btn-primary btn-sm btn-block"
          data-toggle="modal"
          data-target="#modal_add_Sortie"
          onClick={() => setExecutif(executif)}
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
                          <b style={{ color: "red" }}>Executifs</b>
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
                              className="fas fa-user-plus"
                              aria-hidden="true"
                            />{" "}
                            Ajouter nouveau Exécutif
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
                                    Ajouter Nouveau Exécutif{" "}
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
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label>Nom et Prénom:</label>
                                        <input
                                          className="form-control"
                                          name="name"
                                          type="text"
                                          value={executif.name}
                                          onChange={(e) => {
                                            const newExecutifObj = {
                                              ...executif,
                                              name: e.target.value,
                                            };
                                            setExecutif(newExecutifObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label>Role:</label>
                                        <input
                                          className="form-control"
                                          name="role"
                                          type="text"
                                          value={executif.role}
                                          onChange={(e) => {
                                            const newExecutifObj = {
                                              ...executif,
                                              role: e.target.value,
                                            };
                                            setExecutif(newExecutifObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                
                                  <div className="row">
                                  
                                    <div className="form-group">
                                      <label>Description:</label>
                                      <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="67"
                                        value={executif.description}
                                        onChange={(e) => {
                                          const newExecutifObj = {
                                            ...executif,
                                            description: e.target.value,
                                          };
                                          setExecutif(newExecutifObj);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label>Image(443*360):</label>
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
                                    Mettre à jour le Exécutif{" "}
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
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label>Nom et Prénom:</label>
                                        <input
                                          className="form-control"
                                          name="name"
                                          type="text"
                                          value={executif.name}
                                          onChange={(e) => {
                                            const newExecutifObj = {
                                              ...executif,
                                              name: e.target.value,
                                            };
                                            setExecutif(newExecutifObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-group">
                                        <label>Role:</label>
                                        <input
                                          className="form-control"
                                          name="role"
                                          type="text"
                                          value={executif.role}
                                          onChange={(e) => {
                                            const newExecutifObj = {
                                              ...executif,
                                              role: e.target.value,
                                            };
                                            setExecutif(newExecutifObj);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                 
                                  <div className="row">
                                    <div className="form-group">
                                      <label>Description:</label>
                                      <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="67"
                                        value={executif.description}
                                        onChange={(e) => {
                                          const newExecutifObj = {
                                            ...executif,
                                            description: e.target.value,
                                          };
                                          setExecutif(newExecutifObj);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                  <label>Image(443*360):</label>
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
                          <i className="fas fa-users-cog"></i>                 
                                   Toutes les Exécutifs
                        </h3>
                      </div>
                      {/* end card-header */}
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th style={{ minWidth: 200 }}>
                                  Executif Details
                                </th>
                                <th style={{ minWidth: 100 }}>Image</th>
                                <th style={{ width: 100 }}>Utilisateur</th>
                                <th style={{ minWidth: 50 }}>Actions</th>
                              </tr>
                            </thead>
                            <tbody>{event_container}</tbody>
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

export default Executif;
