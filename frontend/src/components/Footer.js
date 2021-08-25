import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
    {/*? Footer Start* data-background="assets/img/gallery/footer_bg.jpg"*/}
    <div className="footer-area section-bg " data-background="assets/img/gallery/photo.jpg">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
              <div className="single-footer-caption mb-50">
                {/* logo */}
                <div className="footer-logo">
                  <a href="index.html"><img src="assets/img/logo/icon1.png" width="150" height="120"alt="" /></a>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p className="info1">Receive updates and latest news direct from Simply enter.</p>
                  </div>
                </div>
                <div className="footer-number">
                  <h4><span>+216 </span>53087334</h4>
                  <p>clubdidon@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Location </h4>
                  <ul>
                    <li><a href="#">Advanced</a></li>
                    <li><a href="#"> Management</a></li>
                    <li><a href="#">Corporate</a></li>
                    <li><a href="#">Customer</a></li>
                    <li><a href="#">Information</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Explore</h4>
                  <ul>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Proparties</a></li>
                    <li><a href="#">Licenses</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Emplacement</h4>
                  <div className="footer-pera">
                    <p className="info1">Maison des associations de Sidi Bou Said .</p>
                  </div>
                </div>
                {/* Form */}
                {/* <div className="footer-form">
                  <div id="mc_embed_signup">
                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate="true">
                      <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" />
                      <div className="form-icon">
                        <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                          SIGN UP
                        </button>
                      </div>
                      <div className="mt-10 info" />
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-9 col-lg-8">
              <div className="footer-copy-right">
                <p>
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">AYOUB saddi</a>
    </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              {/* Footer Social */}
              <div className="footer-social f-right">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="https://www.facebook.com/groups/clubdidon/"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fas fa-globe" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </footer>
        </div>
    )
}

export default Footer
