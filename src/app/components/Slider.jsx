'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
    const [defaultImage, setDefaultImage] = useState({});

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: imgGirl,
        }));
    };


    const CustomPrevArrow = (props) => {
        return (
            <button {...props} className="custom-prev-arrow">
                Prev
            </button>
        );
    };

    const CustomNextArrow = (props) => {
        return (
            <button {...props} className="custom-next-arrow">
                Next
            </button>
        );
    };


    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        autoplay: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplaySpeed: 2000,
        customPaging: (i) => (
            <div className="custom-dot" key={i}>
                {/* You can customize dot appearance here */}
            </div>
        ),
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





    return (
        <div className='container' style={{ overflow: 'hidden' }} >
            <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                <div className="students-expressed-single-item hover-style">
                    <div className="inner-border">
                        <div className="d-sm-flex d-md-block d-lg-flex">
                            <div className="flex-shrink-0 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                                <img src="/assets/images/user/user-8.jpg" alt="user-8" />
                            </div>
                            <div className="flex-grow-1 ms-sm-4 ms-md-0 ms-lg-4">
                                <h3>Life-changing Learning Platform!</h3>
                                <p className='slider-para' style={{lineHeight:'27px'}}>Medipedia has transformed my medical education journey. The interactive quizzes and comprehensive resources have not only boosted my confidence but also deepened my understanding of complex medical topics. Highly recommended!</p>
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
                                <h3>Exceptional Resource for Medical Students</h3>
                                <p className='slider-para' style={{lineHeight:'27px'}}>
                                    I cannot recommend Medipedia enough! The 24/7 support, user-friendly interface, and vast question bank have been instrumental in my exam preparation. This platform truly goes above and beyond to support medical students on their educational journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <br></br>
        </div>
    );
}

export default App;