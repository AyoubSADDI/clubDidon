import React from "react";

const Header = () => {
  const tokenn = JSON.parse(localStorage.getItem("login"));
  const token = tokenn.token

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
                                    alt=""
                                  />
                                </a>
                              </div>
                            </li>

                            <li>
                              <a href="/apropos">A propos</a>
                            </li>
                            <li>
                              <a href="/organisation">Organisation</a>
                            </li>

                            <li>
                              <a href="/actualiteArticle">Actualités </a>
                              <ul className="submenu">
                                <li>
                                  <a href="/actualiteArticle">Article </a>
                                </li>
                                <li>
                                  <a href="/actualiteConference">Conférence</a>
                                </li>
                                <li>
                                  <a href="/actualiteEvent">Événement</a>
                                </li>
                                <li>
                                  <a href="/actualiteSortie">Sortie</a>
                                </li>
                                <li>
                                  <a href="/actualiteProjet">
                                    Projet Numérique
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/programme">Activités </a>
                            </li>
                            <li>
                              <a href="/patrimoine">Patrimoine Numérique </a>
                            </li>
                            <li>
                              <a href="/planification">Programme</a>
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
