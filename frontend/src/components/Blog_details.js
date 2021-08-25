import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Typical from 'react-typical'

const Blog_details = () => {
    return (
        <div>
            &lt;&gt;
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
          
            <Header/>
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
                                        '_Détails',1000,'_Details',1000,
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
                {/*================Blog Area =================*/}
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="feature-img">
                                        <img className="img-fluid" src="assets/img/blog/single_blog_1.png" alt />
                                    </div>
                                    <div className="blog_details">
                                        <h2>Second divided from form fish beast made every of seas
                                            all gathered us saying he our
                                        </h2>
                                    
                                        <p className="excert">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower to actually sit through a
                                            self-imposed MCSE training. who has the willpower to actually
                                        </p>
                                        <div className="quote-wrapper">
                                            <div className="quotes">
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                                should have to spend money on boot camp when you can get the MCSE study materials yourself at
                                                a fraction of the camp price. However, who has the willpower to actually sit through a
                                                self-imposed MCSE training.
                                            </div>
                                        </div>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower to actually sit through a
                                            self-imposed MCSE training. who has the willpower to actually
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                  
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================ Blog Area end =================*/}
            </main>
          <Footer/>
            {/* Scroll Up */}
            <div id="back-top">
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
            </div>
        </div>

    )
}

export default Blog_details
