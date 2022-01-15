import React, { useEffect } from "react";
import SideBar from './SideBar'
import {useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'


const Index = () =>{
  const loginFromStorage = JSON.parse(localStorage.getItem('login'))
  const userName = loginFromStorage.userId

  const history = useHistory()
  const onLogout = (e) => {
    e.preventDefault()
      localStorage.removeItem('login')
      history.push('/login')
  }
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
    return(
      <div className="bodyBg">
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
                  <i className="fa fa-home" />
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
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-danger">
                  <i className="far fa-user float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Utilisateurs</h6>
                  <h1 className="m-b-20 text-white counter">6</h1>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-purple">
                  <i className="fas fa-download float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Events</h6>
                  <h1 className="m-b-20 text-white counter">23</h1>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-warning">
                  <i className="fas fa-shopping-cart float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Sorties</h6>
                  <h1 className="m-b-20 text-white counter">45</h1>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-info">
                  <i className="far fa-envelope float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Adhésions</h6>
                  <h1 className="m-b-20 text-white counter">58</h1>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><i className="fas fa-chart-bar" /> Chart 1</h3>
                  </div>
                  <div className="card-body">
                    <canvas id="comboBarLineChart" />
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                {/* end card*/}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><i className="fas fa-chart-bar" /> Chart 2</h3>
                  </div>
                  <div className="card-body">
                    <canvas id="barChart" />
                  </div>
                  <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
                {/* end card*/}
              </div>
            </div>
            {/* end row */}
          
            {/* end row*/}
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
export default Index
