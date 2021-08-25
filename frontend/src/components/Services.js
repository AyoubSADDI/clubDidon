import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Typical from 'react-typical'

const Services = () => {
    return (
        <div>
  
            <div className="body-bg">
                {/*? Preloader Start */}
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle" />
                            <div className="preloader-img pere-text">
                            <img src="assets/img/logo/11icon.png" alt="looding" />
                            </div>
                        </div>
                    </div>
                </div>
                <Header />
                <main>
                    {/*? Hero Start */}
                    <div className="slider-area2">
                        <div className="slider-height2 hero-overly2 d-flex align-items-center">
                            <div className="">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="hero-cap hero-cap2 text-right">
                                      
                                            
                                            <h2>Bienvenue à
                                        <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                        '_Nos services',1000,'_Our Services',1000,
                                        ]}
                                        />
                                        </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero End */}
                    {/*? Categories Area Start */}
                    <div className="categories-area section-padding30">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Section Tittle */}
                                    <div className="section-tittle mb-70">
                                        <span>Our Top Services</span>
                                        <h2>Our Best Services</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-cat text-center mb-50">
                                        <div className="cat-icon">
                                            <span className="flaticon-development" />
                                        </div>
                                        <div className="cat-cap">
                                            <h5><a href="services.html">Strategy Planning </a></h5>
                                            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-cat text-center mb-50">
                                        <div className="cat-icon">
                                            <span className="flaticon-result" />
                                        </div>
                                        <div className="cat-cap">
                                            <h5><a href="services.html">Insurance Service</a></h5>
                                            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-cat text-center mb-50">
                                        <div className="cat-icon">
                                            <span className="flaticon-team" />
                                        </div>
                                        <div className="cat-cap">
                                            <h5><a href="services.html">Audit &amp; Evaluation</a></h5>
                                            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-cat text-center mb-50">
                                        <div className="cat-icon">
                                            <span className="flaticon-result" />
                                        </div>
                                        <div className="cat-cap">
                                            <h5><a href="services.html">Insurance Service</a></h5>
                                            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-cat text-center mb-50">
                                        <div className="cat-icon">
                                            <span className="flaticon-team" />
                                        </div>
                                        <div className="cat-cap">
                                            <h5><a href="services.html">Audit &amp; Evaluation</a></h5>
                                            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-cat text-center mb-50">
                                        <div className="cat-icon">
                                            <span className="flaticon-development" />
                                        </div>
                                        <div className="cat-cap">
                                            <h5><a href="services.html">Strategy Planning </a></h5>
                                            <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Area End */}
                    {/* Brand Area Start */}
                    <div className="brand-area pb-140">
                        <div className="container">
                            <div className="brand-active brand-border pb-40">
                                <div className="single-brand">
                                    <img src="assets/img/gallery/brand1.png" alt />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/gallery/brand2.png" alt />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/gallery/brand3.png" alt />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/gallery/brand4.png" alt />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/gallery/brand2.png" alt />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/gallery/brand5.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Brand Area End */}
                </main>
                <Footer />
                {/* Scroll Up */}
                <div id="back-top">
                    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
                </div>
            </div>
        </div>

    )
}

export default Services
