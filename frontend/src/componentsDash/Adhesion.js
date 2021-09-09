import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAdhesions,
  DeleteAdhesion,
  UpdateAdhesion,
} from "./redux/adhesion/adhesionActions";
import SideBar from './SideBar'
import {useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode'

toast.configure()


const Adhesion = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem('login'))
  const userName = loginFromStorage.userId

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
  const history = useHistory()
  const onLogout = (e) => {
    e.preventDefault()
      localStorage.removeItem('login')
      history.push('/login')
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
    paiement:"",
  };

  
  const [adhesion, setAdhesion] = useState(initialAdhesionState);
 

  const onUpdate = (e) => {
    e.preventDefault();
    dispatch(UpdateAdhesion(adhesion));
  };
  
  const adhesionData = useSelector((state) => state.adhesion);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdhesions());
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
  const adhesions_container = adhesionData.adhesions.reverse().map((adhesion) => (
    <tr key={adhesion._id}>
                            <td>
                          
                            <h4>Cin:  {adhesion.cin}</h4>
                            <p>Nom et Prénom: {adhesion.nom} {adhesion.prenom}</p>
                            <p>Date de Nais: {adhesion.dateNais}</p>
                            
                            </td>
                         
                            <td> 
                           {adhesion.societe}                  
                            </td>
                            <td> 
                             {adhesion.profession}                    
                            </td>
                            <td> 
                             {adhesion.telephone}                    
                            </td>
                            <td> 
                            {adhesion.email}                   
                            </td>
                            <td> 
                            {adhesion.adresse}                   
                            </td>
                            <td> 
                            {adhesion.createdAt}                   
                            </td>
                            <td> 
                            {adhesion.paiement}                   
                            </td>
                            <td> 
                               <a href="#" className="btn btn-danger btn-sm btn-block mt-2"  onClick={() => dispatch(DeleteAdhesion(adhesion._id),notifyDelete())}><i className="fas fa-trash" /> </a>
                               <a href="#" className="btn btn-success btn-sm btn-block mt-2" data-toggle="modal" data-target="#modal_add_user"   onClick={() => setAdhesion(adhesion)}><i className="fas fa-user-plus" /> </a>
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
      <SideBar/>
      {/* End Sidebar */}
      <div className="content-page">
        {/* Start content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-holder">
                <img src='assets/img/logo/logo4.jpg' width="180" height="50" />                  <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><b style={{fontSize:"22px" , color:"black "}}>{userName}</b></li>
                  <li className="breadcrumb-item"><b>Accueil</b></li> 
                  <li className="breadcrumb-item active"><b style={{color:"red"}}>Adhérents</b></li>
                  <li className="list-inline-item dropdown notif">
              <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
              <img src="assets/img/logo/woman.png" alt="Profile image" className="avatar-rounded" />
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
                  
                    <div className="modal fade custom-modal" tabIndex={-1} role="dialog" aria-labelledby="modal_add_user" aria-hidden="true" id="modal_add_user">
                      <div className="modal-dialog">
                        <div className="modal-content">
                        <form
                                encType="multipart/form-data"
                                className="form"
                                onSubmit={(e) => {
                                  onUpdate(e);
                                  notifyAdd();
                                }}
                              >
                            <div className="modal-header">
                              <h5 className="modal-title">Ajouter leur Historique de paiement</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                               
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Description de paiement</label>
                                    <textarea
                                        id="story"
                                        name="story"
                                        rows="10"
                                        cols="64"
                                        value={adhesion.paiement}
                                        onChange={(e) => {
                                          const newAdhesionObj = {
                                            ...adhesion,
                                            paiement: e.target.value,
                                          };
                                          setAdhesion(newAdhesionObj);
                                        }}
                                      ></textarea>                       
                                </div>
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
                    <h3>
                    <i className="fas fa-users" /> Toutes les Demandes  </h3>
                  </div>
                  {/* end card-header */}
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th style={{minWidth: 200}}>Adhesion Details</th>                          
                            <th style={{minWidth: 80}}>Société ou Etab</th>
                            <th style={{minWidth: 80}}>Profession</th>
                            <th style={{minWidth: 50}}>Téléphone</th>
                            <th style={{minWidth: 50}}>Email</th>
                            <th style={{minWidth: 80}}>Adresse</th>
                            <th style={{minWidth: 80}}>Créé à</th>
                            <th style={{minWidth: 80}}>Paiement</th>
                            <th style={{minWidth: 50}}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                         {adhesions_container}
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

export default Adhesion
