import React from 'react'
import SideBar from './SideBar'
import {useHistory } from 'react-router-dom'


const Index = () =>{
  const loginFromStorage = JSON.parse(localStorage.getItem('login'))
  const userName = loginFromStorage.userId

  const history = useHistory()
  const onLogout = (e) => {
    e.preventDefault()
      localStorage.removeItem('login')
      history.push('/login')
  }
    return(
      <div className="bodyBg">
  <div classname="adminbody">
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
                  <h6 className="text-white text-uppercase m-b-20">Users</h6>
                  <h1 className="m-b-20 text-white counter">487</h1>
                  <span className="text-white">12 Today</span>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-purple">
                  <i className="fas fa-download float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Downloads</h6>
                  <h1 className="m-b-20 text-white counter">290</h1>
                  <span className="text-white">12 Today</span>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-warning">
                  <i className="fas fa-shopping-cart float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Orders</h6>
                  <h1 className="m-b-20 text-white counter">320</h1>
                  <span className="text-white">25 Today</span>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card-box noradius noborder bg-info">
                  <i className="far fa-envelope float-right text-white" />
                  <h6 className="text-white text-uppercase m-b-20">Messages</h6>
                  <h1 className="m-b-20 text-white counter">58</h1>
                  <span className="text-white">5 New</span>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><i className="fas fa-chart-bar" /> Chart 1</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non luctus metus. Vivamus fermentum ultricies orci sit amet sollicitudin.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non luctus metus. Vivamus fermentum ultricies orci sit amet sollicitudin.
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
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><i className="fas fa-history" /> Tasks progress</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="card-body">
                    <p className="font-600 mb-1">Task completed <span className="text-info pull-right"><b>100%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 1 <span className="text-primary pull-right"><b>95%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-primary" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={95}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 2 <span className="text-primary pull-right"><b>88%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-primary" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={88}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 3 <span className="text-info pull-right"><b>75%</b></span>
                    </p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-info" role="progressbar" style={{width: '78%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={75}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 4 <span className="text-info pull-right"><b>70%</b></span>
                    </p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-info" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={70}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 5 <span className="text-warning pull-right"><b>68%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-warning" role="progressbar" style={{width: '68%'}} aria-valuenow={68} aria-valuemin={0} aria-valuemax={68}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 6 <span className="text-warning pull-right"><b>65%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-warning" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={65}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 7 <span className="text-danger pull-right"><b>55%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-danger" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={55}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 8 <span className="text-danger pull-right"><b>40%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-danger" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={40}>
                      </div>
                    </div>
                    <div className="mb-3" />
                    <p className="font-600 mb-1">Task 9 <span className="text-danger pull-right"><b>20%</b></span></p>
                    <div className="progress">
                      <div className="progress-bar progress-xs bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={20}>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer small text-muted">Updated today at 11:59 PM</div>
                </div>
                {/* end card*/}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><i className="fas fa-envelope" /> Latest messages</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="card-body">
                    <div className="widget-messages nicescroll" style={{height: 550}}>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">John Doe</p>
                          <p className="message-item-msg">Hello. I want to buy your product</p>
                          <p className="message-item-date">11:50 PM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Ashton Cox</p>
                          <p className="message-item-msg">Great job for this task</p>
                          <p className="message-item-date">14:25 PM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Colleen Hurst</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">13:20 PM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Fiona Green</p>
                          <p className="message-item-msg">Nice to meet you</p>
                          <p className="message-item-date">15:45 PM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Donna Snider</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">15:45 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Garrett Winters</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">15:45 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Herrod Chandler</p>
                          <p className="message-item-msg">Hello! I'm available for this job</p>
                          <p className="message-item-date">15:45 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Jena Gaines</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">15:45 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Airi Satou</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">15:45 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Brielle Williamson</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">15:45 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Jena Gaines</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">16:30 AM</p>
                        </div>
                      </a>
                      <a href="#">
                        <div className="message-item">
                          <p className="message-item-user">Airi Satou</p>
                          <p className="message-item-msg">I have a new project for you</p>
                          <p className="message-item-date">18:55 AM</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="card-footer small text-muted">Updated today at 11:59 PM</div>
                </div>
                {/* end card*/}
              </div>
              
            </div>
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
