import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAdhesions,
  DeleteAdhesion,
} from "./redux/adhesion/adhesionActions";
import SideBar from './SideBar'
import {useHistory } from 'react-router-dom'

const Adhesion = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem('login'))
  const userName = loginFromStorage.userId

  const history = useHistory()
  const onLogout = (e) => {
    e.preventDefault()
      localStorage.removeItem('login')
      history.push('/login')
  }

  // const initialAdhesionState = {
  //   _id: "",
  //   nom: "",
  //   prenom: "",
  //   dateNais: "",
  //   cin: "",
  //   societe: "",
  //   profession: "",
  //   telephone: "",
  //   email: "",
  //   adresse: "",
  // };

  
  // const [adhesion, setAdhesion] = useState(initialAdhesionState);
 

  // const onUpdate = (e) => {
  //   e.preventDefault();
  //   console.log("event : ", adhesion);
  //   console.log("submitting : ", e);
  //   dispatch(UpdateAdhesion(adhesion));
  // };

  const adhesionData = useSelector((state) => state.adhesion);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdhesions());
  }, []);

  const adhesions_container = adhesionData.adhesions.reverse().map((adhesion) => (
    <tr key={adhesion._id}>
                            <td>
                           {adhesion.nom}
                            </td>
                            <td>{adhesion.prenom}</td>
                            <td> 
                             {adhesion.dateNais}                   
                            </td>
                            <td> 
                             {adhesion.cin}
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
                               <a href="#" className="btn btn-danger btn-sm btn-block mt-2"  onClick={() => dispatch(DeleteAdhesion(adhesion._id))}><i className="fas fa-trash" /> </a>
                               <a href="#" className="btn btn-success btn-sm btn-block mt-2" data-toggle="modal" data-target="#modal_add_user"><i className="fas fa-user-plus" /> </a>
                               <a href="#" className="btn btn-info btn-sm btn-block mt-2" ><i className="fas fa-file-archive"  /> </a>
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
                          <form action="#" method="post" encType="multipart/form-data">
                            <div className="modal-header">
                              <h5 className="modal-title">Ajouter Dans l'historique</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Date début paiment</label>
                                    <input className="form-control" name="début" type="date" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Date fin paiment</label>
                                    <input className="form-control" name="fin" type="date" required />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary">Ajouter</button>
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
                            <th style={{minWidth: 50}}>Prénom</th>
                            <th style={{width: 50}}>Nom</th>
                            <th style={{minWidth: 50}}>Date de Naissance</th>
                            <th style={{minWidth: 50}}>Cin</th>
                            <th style={{minWidth: 80}}>Société ou Etab</th>
                            <th style={{minWidth: 80}}>Profession</th>
                            <th style={{minWidth: 50}}>Téléphone</th>
                            <th style={{minWidth: 50}}>Email</th>
                            <th style={{minWidth: 80}}>Adresse</th>
                            <th style={{minWidth: 80}}>Créé à</th>
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
