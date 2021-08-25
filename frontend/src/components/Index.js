import React from 'react'
import Header from './Header'
import video from './video/video.mp4'
const Index = () => {
  return (
    <div>
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
     
    {/* slider Area Start*/}
    <div className="slider-area">

    <video autoPlay loop muted className="slider-area999"
      style={{
       position:"absolute",
        width:"100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%, -50%)",
        zIndex:"-1"
        }}
        >
            <source src={video} type="video/mp4"></source>
        </video>

      <div className="slider-active">
        {/* Single Slider */}
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-8">
                <div className="hero__caption">
                  <span data-animation="fadeInLeft" data-delay=".1s">Committed to success</span>
                  <h1 data-animation="fadeInLeft" data-delay=".5s">We help to grow your business</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate<br /> velit esscillumlore eu quife nrulla parihatur.</p>
                </div>
              </div>
            </div>
          </div>          
        </div>
        {/* Single Slider */}
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-8">
                <div className="hero__caption">
                  <span data-animation="fadeInLeft" data-delay=".1s">Committed to success</span>
                  <h1 data-animation="fadeInLeft" data-delay=".5s">We help to grow your business</h1>
                  <p data-animation="fadeInLeft" data-delay=".9s">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate<br /> velit esscillumlore eu quife nrulla parihatur.</p>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
    {/* slider Area End*/}
    </main>
</div>

      )
}

      export default Index
