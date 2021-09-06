import React from 'react'

const SideBar = () => {
 
    return (
        <div>
             <div className="left main-sidebar">
         <div className="sidebar-inner leftscroll">
          <div id="sidebar-menu">
            <ul>
            <li className="ml-4">
                  <img src='assets/img/logo/icon1.png' width="110" height="100" alt="" /> 
              </li>
              <li className="submenu">
                <a className="active" href='/indexDash'>
                  <i className="fas fa-bars" />
                  <span> Dashboard </span>
                </a>
              </li>
           
              <li className="submenu">
                <a id="tables" href='/adhesionDash'>
                  <i className="fas fa-users" />
                  <span> Adhesion </span>
                  <span className="menu-arrow" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatable.html">Data Tables</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a id="tables" href='/mediaDash'>
                  <i className="fas fa-photo-video" />
                  <span> Media </span>
                  <span className="menu-arrow" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatable.html">Data Tables</a>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <a id="tables" href='/planningDash'>
                  <i className="fas fa-ruler-combined" />
                  <span> Planning </span>
                  <span className="menu-arrow" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatable.html">Data Tables</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a id="tables" href='/actualiteDash'>
                  <i className="fas fa-newspaper" />
                  <span> Actualité</span>
                  <span className="menu-arrow" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatable.html">Data Tables</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a id="tables" href='/partenaireDash'>
                  <i className="fas fa-handshake" />
                  <span> Partenair</span>
                  <span className="menu-arrow" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatable.html">Data Tables</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a id="tables" href='/executifDash'>
                <i class="fas fa-users-cog"></i>
                  <span>Executif</span>
                  <span className="menu-arrow" />
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatable.html">Data Tables</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
        </div>
    )
}

export default SideBar
