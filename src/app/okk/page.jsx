'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className='achieved-section' style={{ overflow: 'hidden' }} >
      <Slider {...settings}>


        
          <div className="students-expressed-single-item hover-style">
            <div className="inner-border">
              <div className="d-sm-flex d-md-block d-lg-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                  <img src="/assets/images/user/user-8.jpg" alt="user-8" />
                </div>
                <div className="flex-grow-1 ms-sm-4 ms-md-0 ms-lg-4">
                  <h3>They Provide Also Ethically!</h3>
                  <p>
                    During this era, online learning unexpectedly occur increased. The
                    single person relay on the polimar internet to learning to happend !
                  </p>
                  <h4>Xwad Daud</h4>
                  <span>e-Tutor Moral Online, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
     

          <div className="students-expressed-single-item hover-style">
            <div className="inner-border">
              <div className="d-sm-flex d-md-block d-lg-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                  <img src="/assets/images/user/user-8.jpg" alt="user-8" />
                </div>
                <div className="flex-grow-1 ms-sm-4 ms-md-0 ms-lg-4">
                  <h3>They Provide Also Ethically!</h3>
                  <p>
                    During this era, online learning unexpectedly occur increased. The
                    single person relay on the polimar internet to learning to happend !
                  </p>
                  <h4>Xwad Daud</h4>
                  <span>e-Tutor Moral Online, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
     


          <div className="students-expressed-single-item hover-style">
            <div className="inner-border">
              <div className="d-sm-flex d-md-block d-lg-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                  <img src="/assets/images/user/user-8.jpg" alt="user-8" />
                </div>
                <div className="flex-grow-1 ms-sm-4 ms-md-0 ms-lg-4">
                  <h3>They Provide Also Ethically!</h3>
                  <p>
                    During this era, online learning unexpectedly occur increased. The
                    single person relay on the polimar internet to learning to happend !
                  </p>
                  <h4>Xwad Daud</h4>
                  <span>e-Tutor Moral Online, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
     


          <div className="students-expressed-single-item hover-style">
            <div className="inner-border">
              <div className="d-sm-flex d-md-block d-lg-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                  <img src="/assets/images/user/user-8.jpg" alt="user-8" />
                </div>
                <div className="flex-grow-1 ms-sm-4 ms-md-0 ms-lg-4">
                  <h3>They Provide Also Ethically!</h3>
                  <p>
                    During this era, online learning unexpectedly occur increased. The
                    single person relay on the polimar internet to learning to happend !
                  </p>
                  <h4>Xwad Daud</h4>
                  <span>e-Tutor Moral Online, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
     

          <div className="students-expressed-single-item hover-style">
            <div className="inner-border">
              <div className="d-sm-flex d-md-block d-lg-flex">
                <div className="flex-shrink-0 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                  <img src="/assets/images/user/user-8.jpg" alt="user-8" />
                </div>
                <div className="flex-grow-1 ms-sm-4 ms-md-0 ms-lg-4">
                  <h3>They Provide Also Ethically!</h3>
                  <p>
                    During this era, online learning unexpectedly occur increased. The
                    single person relay on the polimar internet to learning to happend !
                  </p>
                  <h4>Xwad Daud</h4>
                  <span>e-Tutor Moral Online, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
     



      </Slider>
    </div>
  );
}

export default App;