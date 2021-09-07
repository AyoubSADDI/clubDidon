import React, { useEffect, useState } from "react";
import {
  fetchActualites,
  DeleteActualite,
  AddActualite,
  UpdateActualite,
} from "./redux/actualite/actualiteActions";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment'

toast.configure();

const Actualite = () => {
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
    titre: "",
    Date: "",
    categorie: "",
    lieux:"",
    imageUrl:"",
    fbUrl:"",
    description:"",
    descriptionDetail:"",
    webSite:"",
    imageUrl1:"",
    imageUrl2:"",
    imageUrl3:"",
    imageUrl4:"",
    imageUrl5:"",
    imageUrl6:"",

  };

  const notifyAdd = () => {
    toast.success("Ajouter avec succès !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000,
    });
  };
  const clockevent=(newDate)=>{

    return  moment(new Date(newDate)).format("DD/MM/YYYY")
    }
  const notifyDelete = () => {
    toast.success("Supprimer avec succès !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000,
    });
  };

  const notifyUpdate = () => {
    toast.success("Mise à jour avec succès !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000,
    });
  };

  const [actualite, setActualite] = useState(initialActualiteState);
  const [categorieState, setCategorieState] = useState(false);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [search, SetSearch] = useState("");
  const [conf, setConf] = useState(false);
  const [event, setEvent] = useState(false);
  const [article, setArticle] = useState(false);
  const [sortie, setSortie] = useState(false);
  const [projet, setProjet] = useState(false);
  const [fileInputState1, setFileInputState1] = useState("");
  const [previewSource1, setPreviewSource1] = useState("");
  const [fileInputState2, setFileInputState2] = useState("");
  const [previewSource2, setPreviewSource2] = useState("");
  const [fileInputState3, setFileInputState3] = useState("");
  const [previewSource3, setPreviewSource3] = useState("");
  const [fileInputState4, setFileInputState4] = useState("");
  const [previewSource4, setPreviewSource4] = useState("");
  const [fileInputState5, setFileInputState5] = useState("");
  const [previewSource5, setPreviewSource5] = useState("");
  const [fileInputState6, setFileInputState6] = useState("");
  const [previewSource6, setPreviewSource6] = useState("");


// test
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
    actualite.imageUrl = base64EncodedImage;
  };
  // test1
  const onFileChange1 = (event) => {
    // Update the state
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile1(file);
  };
  const previewFile1 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource1(reader.result);
    };
  };
  const uploadImage1 = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    actualite.imageUrl1 = base64EncodedImage;
  };
  // test2
  const onFileChange2 = (event) => {
    // Update the state
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile2(file);
  };
  const previewFile2 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource2(reader.result);
    };
  };
  const uploadImage2 = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    actualite.imageUrl2 = base64EncodedImage;
  };
  // test3
  const onFileChange3 = (event) => {
    // Update the state
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    previewFile3(file);
  };
  const previewFile3 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource3(reader.result);
    };
  };
  const uploadImage3 = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    actualite.imageUrl3 = base64EncodedImage;
  };

// test4
const onFileChange4 = (event) => {
  // Update the state
  const file = event.target.files[0];
  console.log(event.target.files[0]);
  previewFile4(file);
};
const previewFile4 = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreviewSource4(reader.result);
  };
};
const uploadImage4 = async (base64EncodedImage) => {
  console.log(base64EncodedImage);
  actualite.imageUrl4 = base64EncodedImage;
};
// test5
const onFileChange5 = (event) => {
  // Update the state
  const file = event.target.files[0];
  console.log(event.target.files[0]);
  previewFile5(file);
};
const previewFile5 = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreviewSource5(reader.result);
  };
};
const uploadImage5 = async (base64EncodedImage) => {
  console.log(base64EncodedImage);
  actualite.imageUrl5 = base64EncodedImage;
};

// test6
const onFileChange6 = (event) => {
  // Update the state
  const file = event.target.files[0];
  console.log(event.target.files[0]);
  previewFile6(file);
};
const previewFile6= (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreviewSource6(reader.result);
  };
};
const uploadImage6 = async (base64EncodedImage) => {
  console.log(base64EncodedImage);
  actualite.imageUrl6 = base64EncodedImage;
};


  const actualiteData = useSelector((state) => state.actualite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActualites());
  
  }, []);

  const onAdd = (e) => {
    e.preventDefault();
    console.log("submitting : ", e);
    const loginFromStorage = JSON.parse(localStorage.getItem("login"));
    const userId = loginFromStorage.userId;
    actualite.userName = userId;
    if (!previewSource) return  dispatch(AddActualite(actualite));
    uploadImage(previewSource);uploadImage1(previewSource1);uploadImage2(previewSource2);uploadImage3(previewSource3);uploadImage4(previewSource4);uploadImage5(previewSource5);uploadImage6(previewSource6);
    dispatch(AddActualite(actualite));
  };
 
  const onUpdate = (e) => {
    e.preventDefault();
    console.log("actualite : ", actualite);
    console.log("submitting : ", e);
    if (previewSource) uploadImage(previewSource);uploadImage1(previewSource1);uploadImage2(previewSource2);uploadImage3(previewSource3);uploadImage4(previewSource4);uploadImage5(previewSource5);uploadImage6(previewSource6);
    dispatch(UpdateActualite(actualite));
  };

  const actualite_container = actualiteData.actualites.filter((actualite) => {
if (search === ""){
  return actualite
} else if (actualite.categorie.toLowerCase().includes(search.toLowerCase())){
  return actualite
}
  }).reverse().map((actualite) => (
    <tr key={actualite._id}>
      <td>     
        <h4>Categorie:{actualite.categorie}</h4>
        <p>Titre: {actualite.titre}</p>
        <p>Lieux: {actualite.lieux} </p>
        <p>Date: {clockevent(actualite.Date)}</p>
        <p>Ajouter par:{actualite.userName}</p>
        <p>Description: {actualite.description}</p>
        <p>Contenu: {actualite.descriptionDetail}</p>
        
      </td>
    
      <td>
        Affiche:
        <img
          src={actualite.imageUrl}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
        Image 1:
           <img hidden={!actualite.imageUrl1}
          src={actualite.imageUrl1}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
        Image 2:
          <img hidden={!actualite.imageUrl2}
          src={actualite.imageUrl2}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
        Image 3:
          <img hidden={!actualite.imageUrl3}
          src={actualite.imageUrl3}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
        Image 4:
          <img hidden={!actualite.imageUrl4}
          src={actualite.imageUrl4}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
        Image 5:
          <img hidden={!actualite.imageUrl5}
          src={actualite.imageUrl5}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
        Image 6:
          <img hidden={!actualite.imageUrl6}
          src={actualite.imageUrl6}
          width="100"
          height="100"
          name="actualite-Image"
          alt="actualite"
        />{" "}
      </td>
      <td>Facebook_Url:{actualite.fbUrl}<br></br><br></br> Site_Web:{actualite.webSite}</td>
     
      <td>
        <a
          href="#"
          className="btn btn-danger btn-sm btn-block mt-2"
          onClick={() => dispatch(DeleteActualite(actualite._id),notifyDelete())}
        >
          <i className="fas fa-trash" />{" "}
        </a>
        <a
          href="#"
          className="btn btn-primary btn-sm btn-block"
          data-toggle="modal"
          data-target="#modal_add_Sortie"
          onClick={() => setActualite(actualite)}
        >
          <i className="far fa-edit" />{" "}
        </a>
      </td>
    </tr>
  ));

  return (
    <div>
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
                        height="50"
                      />
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
                          <b style={{ color: "red" }}>Actualites</b>
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
                              className="fas fa-newspaper"
                              aria-hidden="true"
                            />{" "}
                            Ajouter Nouveau Actualités
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
                                encType="multipart/form-data"
                                className="form"
                                onSubmit={(e) => {
                                  onAdd(e);
                                  notifyAdd();
                                }}
                              >
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Ajouter Nouveau Actualite{" "}
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
                                <div className="row ml-2">
                                <label>Categorie:</label>
                                  <br></br>
                                  </div>
                                <div className="row ml-2">
                               
                                <div class="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="conference"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                        setConf(true);
                                        setArticle(false);
                                        setProjet(false);
                                        setSortie(false);
                                        setEvent(false);
                                      }}
                                      checked={
                                        actualite.categorie === "conference"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Conférence
                                    </label>
                                  </div>

                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="evenement"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                        setEvent(true);
                                        setConf(false);
                                        setArticle(false);
                                        setProjet(false);
                                        setSortie(false);
                                        
                                      }}
                                      checked={
                                        actualite.categorie === "evenement"
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      Evénement
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="sortie"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                        setSortie(true);
                                        setConf(false);
                                        setArticle(false);
                                        setProjet(false);
                                        setEvent(false);
                                      }}
                                      checked={actualite.categorie === "sortie"}
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      Sortie
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="projet"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                        setProjet(true);
                                        setConf(false);
                                        setArticle(false);
                                        setSortie(false);
                                        setEvent(false);
                                      }}
                                      checked={
                                        actualite.categorie === "projet"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Projet Numérique
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="article"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                        setArticle(true);
                                        setConf(false);
                                        setProjet(false);
                                        setSortie(false);
                                        setEvent(false);

                                      }}
                                      checked={
                                        actualite.categorie === "article"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Article
                                    </label>
                                  </div>
                                  </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group" >
                                        <label>Titre:</label>
                                        <input
                                          className="form-control"
                                          name="titre"
                                          type="text"
                                          value={actualite.titre}
                                          onChange={(e) => {
                                            const newActualiteObj = {
                                              ...actualite,
                                              titre: e.target.value,
                                            };
                                            setActualite(newActualiteObj);
                                          }}
                                        />{" "}
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label>Date:</label>
                                        <input
                                          className="form-control"
                                          name="Date"
                                          type="date"
                                          value={actualite.Date}
                                          onChange={(e) => {
                                            const newActualiteObj = {
                                              ...actualite,
                                              Date: e.target.value,
                                            };
                                            setActualite(newActualiteObj);
                                          }}
                                        />{" "}
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div class="form-group" hidden={article}>
                                      <label>Lieux:</label>
                                      <input
                                        className="form-control"
                                        name="lieux"
                                        type="text"
                                        value={actualite.lieux}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            lieux: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  </div>
                                  <div className="modal-body">
                                  <div className="row">
                                  <div className="col-lg-6">
                                    <div class="form-group" hidden={article}>
                                      <label>Page Facebook Url:</label>
                                      <input
                                        className="form-control"
                                        name="fbUrl"
                                        type="text"
                                        value={actualite.fbUrl}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            fbUrl: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div class="form-group" hidden={article || conf || event || sortie} >
                                      <label>Lien Site web:</label>
                                      <input
                                        className="form-control"
                                        name="webSite"
                                        type="text"
                                        value={actualite.webSite}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            webSite: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                    </div>
                                   
                                    </div>
                                    </div>
                                 
                                    <div class="form-group">
                                      <label>Description:</label>
                                      <input
                                        className="form-control"
                                        name="description"
                                        type="text"
                                        value={actualite.description}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            description: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                  <div className="row">
                                    <div class="col-lg-12"></div>
                                    <div className="row"></div>
                                    <div class="form-group">
                                      <label>Contenu:</label>
                                      <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="67"
                                        value={actualite.descriptionDetail}
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            descriptionDetail: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="modal-body">
                                  <div className="row">
                                  <div className="col-lg-4">
                                  <div className="form-group" hidden={article}>
                                    <label>Affiche(712*534):</label>
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
                                   <div className="col-lg-4">
                                  <div className="form-group">
                                  <label>Image1(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl1"
                                      className="from-input"
                                      value={fileInputState1}
                                      onChange={onFileChange1}
                                    />
                                  </div>
                                  {previewSource1 && (
                                    <img
                                      src={previewSource1}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                  </div>
                                   <div className="col-lg-4">

                                    <div className="form-group">
                                  <label>Image2(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl2"
                                      className="from-input"
                                      value={fileInputState2}
                                      onChange={onFileChange2}
                                    />
                                  </div>
                                  {previewSource2 && (
                                    <img
                                      src={previewSource2}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                  </div>  </div>  </div>
                                  
                                  <div className="modal-body">
                                  <div className="row">
                                  <div className="col-lg-4">
                                  <div className="form-group" hidden={article}>
                                    <label>Affiche3(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl3"
                                      className="from-input"
                                      value={fileInputState3}
                                      onChange={onFileChange3}
                                    />
                                  </div>
                                  {previewSource3 && (
                                    <img
                                      src={previewSource3}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                   </div>
                                   <div className="col-lg-4">
                                  <div className="form-group" hidden={article}>
                                  <label>Image4(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl4"
                                      className="from-input"
                                      value={fileInputState4}
                                      onChange={onFileChange4}
                                    />
                                  </div>
                                  {previewSource4 && (
                                    <img
                                      src={previewSource4}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                  </div>
                                   <div className="col-lg-4">

                                    <div className="form-group" hidden={article}>
                                  <label>Image5(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl5"
                                      className="from-input"
                                      value={fileInputState5}
                                      onChange={onFileChange5}
                                    />
                                  </div>
                                  {previewSource5&& (
                                    <img
                                      src={previewSource5}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                  </div>  </div>  </div>
                                      <div className="form-group" hidden={article}>
                                  <label>Image6(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl6"
                                      className="from-input"
                                      value={fileInputState6}
                                      onChange={onFileChange6}
                                    />
                                  </div>
                                  {previewSource6 && (
                                    <img
                                      src={previewSource6}
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
                                  Mettre à jour l'actualités{" "}
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

                                <label>Categorie:</label>
                                  <br></br>
                                <div className="row ml-2">
                                
                                 
                                  <div class="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="conference"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                      }}
                                      checked={
                                        actualite.categorie === "conference"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Conférence
                                    </label>
                                  </div>

                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="evenement"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                      }}
                                      checked={
                                        actualite.categorie === "evenement"
                                      }
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      Evénement
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="sortie"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                      }}
                                      checked={actualite.categorie === "sortie"}
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexRadioDefault2"
                                    >
                                      Sortie
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="projet"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                      }}
                                      checked={
                                        actualite.categorie === "projet"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Projet Numérique
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      value="article"
                                      onChange={(e) => {
                                        const newActualiteObj = {
                                          ...actualite,
                                          categorie: e.target.value,
                                        };
                                        setActualite(newActualiteObj);
                                      }}
                                      checked={
                                        actualite.categorie === "article"
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexRadioDefault1"
                                    >
                                      Article
                                    </label>
                                  </div>
                                  </div>
                                  <div className="modal-body">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group" >
                                        <label>Titre:</label>
                                        <input
                                          className="form-control"
                                          name="titre"
                                          type="text"
                                          value={actualite.titre}
                                          onChange={(e) => {
                                            const newActualiteObj = {
                                              ...actualite,
                                              titre: e.target.value,
                                            };
                                            setActualite(newActualiteObj);
                                          }}
                                        />{" "}
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label>Date:</label>
                                        <input
                                          className="form-control"
                                          name="Date"
                                          type="date"
                                          value={actualite.Date}
                                          onChange={(e) => {
                                            const newActualiteObj = {
                                              ...actualite,
                                              Date: e.target.value,
                                            };
                                            setActualite(newActualiteObj);
                                          }}
                                        />{" "}
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div class="form-group" hidden={article}>
                                      <label>Lieux:</label>
                                      <input
                                        className="form-control"
                                        name="lieux"
                                        type="text"
                                        value={actualite.lieux}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            lieux: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  </div>
                                  <div className="modal-body">
                                  <div className="row">
                                  <div className="col-lg-6">
                                    <div class="form-group" hidden={article}>
                                      <label>Page Facebook Url:</label>
                                      <input
                                        className="form-control"
                                        name="fbUrl"
                                        type="text"
                                        value={actualite.fbUrl}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            fbUrl: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div class="form-group" hidden={article || conf || sortie || event}>
                                      <label>Lien Site web:</label>
                                      <input
                                        className="form-control"
                                        name="webSite"
                                        type="text"
                                        value={actualite.webSite}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            webSite: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                    </div>
                                   
                                    </div>
                                    </div>
                                    <div class="form-group">
                                      <label>Description:</label>
                                      <input
                                        className="form-control"
                                        name="description"
                                        type="text"
                                        value={actualite.description}                                      
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            description: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      />
                                    </div>
                                  <div className="row">
                                    <div class="col-lg-12"></div>
                                    <div className="row"></div>
                                    <div class="form-group">
                                      <label>Contenu:</label>
                                      <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="67"
                                        value={actualite.descriptionDetail}
                                        onChange={(e) => {
                                          const newActualiteObj = {
                                            ...actualite,
                                            descriptionDetail: e.target.value,
                                          };
                                          setActualite(newActualiteObj);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                  <label>Affiche(712*534):</label>
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
                                   <div className="form-group">
                                  <label>Image1(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl1"
                                      className="from-input"
                                      value={fileInputState1}
                                      onChange={onFileChange1}
                                    />
                                  </div>
                                  {previewSource1 && (
                                    <img
                                      src={previewSource1}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                      <div className="form-group">
                                  <label>Image2(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl2"
                                      className="from-input"
                                      value={fileInputState2}
                                      onChange={onFileChange2}
                                    />
                                  </div>
                                  {previewSource2 && (
                                    <img
                                      src={previewSource2}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                      <div className="form-group">
                                  <label>Image3(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl3"
                                      className="from-input"
                                      value={fileInputState3}
                                      onChange={onFileChange3}
                                    />
                                  </div>
                                  {previewSource3 && (
                                    <img
                                      src={previewSource3}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                      <div className="form-group">
                                  <label>Image4(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl4"
                                      className="from-input"
                                      value={fileInputState4}
                                      onChange={onFileChange4}
                                    />
                                  </div>
                                  {previewSource4 && (
                                    <img
                                      src={previewSource4}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                      <div className="form-group">
                                  <label>Image5(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl5"
                                      className="from-input"
                                      value={fileInputState5}
                                      onChange={onFileChange5}
                                    />
                                  </div>
                                  {previewSource5 && (
                                    <img
                                      src={previewSource5}
                                      alt="chosen"
                                      style={{ height: "100px" }}
                                    />
                                  )}
                                      <div className="form-group">
                                  <label>Image6(712*534):</label>
                                    <br />
                                    <input
                                      type="file"
                                      name="imageUrl6"
                                      className="from-input"
                                      value={fileInputState6}
                                      onChange={onFileChange6}
                                    />
                                  </div>
                                  {previewSource6 && (
                                    <img
                                      src={previewSource6}
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
                          <i className="fas fa-newspaper" /> Toutes les
                          Actualites
                        </h3>
                        <label>Recherche Par Catégorie:</label>
                        <input className="recherche" type="text" id="name" name="name" required
                          minlength="4" maxlength="20" size="10"  onChange={event => {SetSearch(event.target.value)}}/>
                      </div>
                      {/* end card-header */}
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                              <th style={{ minWidth: 200 }}>
                                  Actualite Details
                                </th>
                                <th style={{ minWidth: 100 }}>Image</th>
                                <th style={{ minWidth: 100 }}>Liens</th>
                                <th style={{ minWidth: 50 }}>Actions</th>
                              </tr>
                            </thead>
                            <tbody>{actualite_container}</tbody>
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

export default Actualite;
