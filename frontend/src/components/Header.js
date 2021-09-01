import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const token = JSON.parse(localStorage.getItem("login"));

  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    console.log("deconxxxxx");
    localStorage.removeItem("login");
    history.push("/login");
  };

  return (
    <div>
      <header>
        {/* Header Start */}
        <div className="header-area">
          <div className="main-header ">
            <div className="header-bottom  header-sticky">
              <div className="">
                <div className="row align-items-center">
                  <div className="col-md-12 col-md-12">
                    <div className="menu-wrapper  d-flex align-items-center">
                      {/* Main-menu */}
                      <div className="main-menu d-none d-lg-none">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <div>
                                <a href="/">
                                  <img
                                    src="assets/img/logo/logo4.jpg"
                                    width="180"
                                    height="50"
                                  />
                                </a>
                              </div>
                            </li>
                          
                            <li>
                              <a href="/apropos">A propos</a>
                              <ul className="submenu">
                                <li>
                                  <a href="/apropos">A propos</a>
                                </li>
                                <li>
                                  <a href="#vision">Notre vision</a>
                                </li>
                                <li>
                                  <a href="#mission">Notre mission</a>
                                </li>
                                <li>
                                  <a href="#activité">Nos activités</a>
                                </li>

                                <li>
                                  <a href="#charte">Charte éthique</a>
                                </li>
                                <li>
                                  <a href="#partener">Nos partenaires </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/organisation">Organisation</a>
                              <ul className="submenu">
                                <li>
                                  <a href="/organisation">Organisation</a>
                                </li>
                                <li>
                                  <a href="#fondatrices">Fondatrices</a>
                                </li>
                                <li>
                                  <a href="#presidents">Présidents d’honneur</a>
                                </li>
                                <li>
                                  <a href="#bureau">Bureau exécutif </a>
                                </li>
                                <li>
                                  <a href="#commissions">Commissions</a>
                                </li>
                              </ul>
                            </li>                      
                            <li>
                              <a href="/programme">Programme </a>
                              <ul className="submenu">
                                <li>
                                  <a href="/programme">Programme </a>
                                </li>
                              
                                <li>
                                  <a href="#conf">Evénement passés </a>
                                </li>
                              
                                <li>
                                  <a href="#conf">Conférences passées</a>
                                </li>
                               
                                <li>
                                  <a href="#sorties">Sorties passées</a>
                                </li>
                              </ul>
                            </li>
                           
                            <li>
                              <a href="/actualiteArticle">Actualités </a>
                              <ul className="submenu">
                                <li>
                                  <a href="/actualiteArticle">Article </a>
                                </li>
                                <li>
                                  <a href="/actualiteConference">Conference</a>
                                </li>
                                <li>
                                  <a href="/actualiteEvent">Événement</a>
                                </li>
                                <li>
                                  <a href="/blog/detId/">blog</a>
                                </li>
                                <li>
                                  <a href="/actualiteSortie">
                                    Sortie
                                  </a>
                                </li>
                                <li>
                                  <a href="/actualiteProjet">Projet Numérique</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/patrimoine">Patrimoine digital </a>
                            </li>
                            <li>
                              <a href="/planification">Planification</a>
                            </li>
                          
                            <li>
                              <a href="/media">Medias</a>
                            </li>
                            <li>
                              <a href="/adhesion">Adhésion</a>
                            </li>

                            <li>
                              <a href="/contact">Contact</a>
                            </li>
                            <li>{token && <a href="/indexDash">Dash</a>}</li>

                            <li>
                              {!token && (
                                <a href="/login">
                                  <img
                                    src="assets/img/logo/user-solid.svg"
                                    width="120"
                                    height="20"
                                    alt=""
                                  />{" "}
                                </a>
                              )}
                            </li>
                            {/* <li>
                            {token && (<a href='/login' onClick={(e) => {onLogout(e)}}>Déconnexion</a>)}
                            </li> */}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12">
                    <div className="mobile_menu d-block " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>
    </div>
  );
};

export default Header;
