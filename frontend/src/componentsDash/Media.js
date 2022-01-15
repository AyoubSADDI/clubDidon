import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMedias,
  DeleteMedia,
  AddMedia,
  UpdateMedia,
} from "./redux/media/mediaActions";
import SideBar from './SideBar'
import {useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import jwt_decode from 'jwt-decode'

toast.configure()

const Media = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem('login'))
  const userName = loginFromStorage.userId

  const history = useHistory()
  const onLogout = (e) => {
    e.preventDefault()
      localStorage.removeItem('login')
      history.push('/login')
  }
  const clockevent=(newDate)=>{

    return  moment(new Date(newDate)).format("DD/MM/YYYY")
    }
  const initialMediaState = {
    _id: "",
    userName: "",
    titre: "",
    Date: "",
    imageUrl: "",
    imageUrle: "",
    contenu: "",
    urlMagazin: "",   
  };
  const [media, setMedia] = useState(initialMediaState);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [search, SetSearch] = useState("");


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
        media.imageUrl = base64EncodedImage;
      };
      

      const onAdd = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
        const loginFromStorage = JSON.parse(localStorage.getItem("login"));
        const userId = loginFromStorage.userId;
        media.userName = userId;
        dispatch(AddMedia(media));
      };
      const onUpdate = (e) => {
        e.preventDefault();
        if (previewSource) uploadImage(previewSource);
        dispatch(UpdateMedia(media));
      };
      const mediaData = useSelector((state) => state.media);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchMedias());
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
      const media_container = mediaData.medias.filter((media) => {
        if (search === ""){
          return media
        } else if (media.Date.toLowerCase().includes(search.toLowerCase())){
          return media
        }
          }).reverse().map((media) => (
        <tr key={media._id}>
          <td>
            <h4>Titre: {media.titre}</h4>
            <p>Créé par: {media.userName} </p>
            <p>Date: {clockevent(media.Date)} </p>
            <p>Contenu: {media.contenu}</p>
          </td>
          <td> {media.urlMagazin}</td>
         
          <td>
          <LazyLoadImage
              src={media.imageUrl}
              width="100"
              height="100"
              name="media-Image"
              alt="media"
            />{" "}
          </td>
          <td>
            <a
              href="#"
              className="btn btn-danger btn-sm btn-block mt-2"
              onClick={() => dispatch(DeleteMedia(media._id),notifyDelete())}
            >
              <i className="fas fa-trash" />{" "}
            </a>
            <a
              href="#"
              className="btn btn-primary btn-sm btn-block"
              data-toggle="modal"
              data-target="#modal_add_user02"
              onClick={() => setMedia(media)}
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
      <SideBar/>
      {/* End Sidebar */}
      <div className="content-page">
        {/* Start content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-holder">
                <LazyLoadImage src='assets/img/logo/logo4.jpg' width="180" height="50" />                  <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><b style={{fontSize:"22px" , color:"black "}}>{userName}</b></li>
                  <li className="breadcrumb-item"><b>Accueil</b></li> 
                  <li className="breadcrumb-item active"><b style={{color:"red"}}>Medias</b></li>
                  <li className="list-inline-item dropdown notif">
              <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
              <LazyLoadImage src="assets/img/logo/woman.png" alt="Profile image" className="avatar-rounded" />
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
                <a href="#" className="dropdown-item notify-item" onClick={(e) => {onLogout(e)}}>
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
                      <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal_add_user">
                        <i className="fas fa-photo-video" aria-hidden="true" /> Ajouter Nouveau Media</button>
                    </span>
                    <div className="modal fade custom-modal" tabIndex={-1} role="dialog" aria-labelledby="modal_add_user" aria-hidden="true" id="modal_add_user">
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
                              <h5 className="modal-title">Ajouter Nouveau Media</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Titre:</label>
                                    <input
                                          className="form-control"
                                          name="titre"
                                          type="text"
                                          value={media.titre}
                                          onChange={(e) => {
                                            const newMediaObj = {
                                              ...media,
                                              titre: e.target.value,
                                            };
                                            setMedia(newMediaObj);
                                          }}
                                        />                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Date:</label>
                                    <input
                                          className="form-control"
                                          name="Date"
                                          type="date"
                                          value={media.Date}
                                          onChange={(e) => {
                                            const newMediaObj = {
                                              ...media,
                                              Date: e.target.value,
                                            };
                                            setMedia(newMediaObj);
                                          }}
                                        />                                  </div>
                                </div>
                              </div>
                            
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>url Magazin:</label>
                                    <input
                                          className="form-control"
                                          name="urlMagazin"
                                          type="text"
                                          value={media.urlMagazin}
                                          onChange={(e) => {
                                            const newMediaObj = {
                                              ...media,
                                              urlMagazin: e.target.value,
                                            };
                                            setMedia(newMediaObj);
                                          }}
                                        />    
                                  </div>
                                </div>
                               
                              </div>
                              <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Contenu:</label>
                                    <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="62"
                                        value={media.contenu}
                                        onChange={(e) => {
                                          const newMediaObj = {
                                            ...media,
                                            contenu: e.target.value,
                                          };
                                          setMedia(newMediaObj);
                                        }}
                                      ></textarea>                                  </div>
                                </div>
                            
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Image(1382*1024):</label>
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
                          </div>

                         
                            </div>
                            <div className="modal-footer">
                              <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* 2éme popUp */}
                    <div className="modal fade custom-modal" tabIndex={-1} role="dialog" aria-labelledby="modal_add_user02" aria-hidden="true" id="modal_add_user02">
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
                              <h5 className="modal-title">    Mettre à jour le Media{" "}</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Titre:</label>
                                    <input
                                          className="form-control"
                                          name="titre"
                                          type="text"
                                          value={media.titre}
                                          onChange={(e) => {
                                            const newMediaObj = {
                                              ...media,
                                              titre: e.target.value,
                                            };
                                            setMedia(newMediaObj);
                                          }}
                                        />                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Date:</label>
                                    <input
                                          className="form-control"
                                          name="Date"
                                          type="date"
                                          value={media.Date}
                                          onChange={(e) => {
                                            const newMediaObj = {
                                              ...media,
                                              Date: e.target.value,
                                            };
                                            setMedia(newMediaObj);
                                          }}
                                        />                                  </div>
                                </div>
                              </div>
                             
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>url Magazin:</label>
                                    <input
                                          className="form-control"
                                          name="urlMagazin"
                                          type="text"
                                          value={media.urlMagazin}
                                          onChange={(e) => {
                                            const newMediaObj = {
                                              ...media,
                                              urlMagazin: e.target.value,
                                            };
                                            setMedia(newMediaObj);
                                          }}
                                        />    
                                  </div>
                                </div>
                               
                              </div>
                              <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Contenu:</label>
                                    <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="62"
                                        value={media.contenu}
                                        onChange={(e) => {
                                          const newMediaObj = {
                                            ...media,
                                            contenu: e.target.value,
                                          };
                                          setMedia(newMediaObj);
                                        }}
                                      ></textarea>                                  </div>
                                </div>
                            
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                  <label>Image(1382*1024):</label>
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
                          </div>
                            </div>
                            <div className="modal-footer">
                              <button type="submit" className="btn btn-primary">Mettre à jour</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>



                    <h3>
                      <i  className="fas fa-photo-video" /> Toutes les Médias</h3>
                      <label>Recherche Par Jour :</label>
                        <input className="recherche" type="text" id="name" name="name" required
                          minLength="4" maxLength="20" size="10"  onChange={event => {SetSearch(event.target.value)}}/>
                  </div>
                  {/* end card-header */}
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th style={{minWidth: 300}}>Media details</th>
                            <th style={{width: 120}}>url Magazin</th>
                            <th style={{width: 120}}>Image</th>
                            <th style={{minWidth: 10}}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {media_container}
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

    )
}

export default Media
