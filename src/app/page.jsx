import Slider from "./components/Slider";
import Header from "./components/Header";
import Username from "./components/Username";
import FAQ from "./components/FAQ";

export const metadata = {
  title: "Medipedia",
};

export default function Home() {

  return (
    <>
      <Header></Header>
      <section className="different-courses-section pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="different-single-item hover-style bg-ecf2fc">
                <div className="inner-border">
                  <img src="assets/images/icon/book-2.svg" alt="book-2" />
                  <h3>Student Support Hub</h3>
                  <p style={{ textAlign: 'center' }} >Access a comprehensive support system providing guidance, resources, and assistance for academic and professional growth.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="different-single-item hover-style">
                <div className="inner-border">
                  <img src="assets/images/icon/mobile.svg" alt="learning" />
                  <h3 >Interactive Learning Modules</h3>
                  <p style={{ textAlign: 'center' }}>Engage with dynamic learning modules tailored to enhance understanding and retention through interactive exercises and quizzes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="different-single-item hover-style">
                <div className="inner-border">
                  <img src="assets/images/icon/support-2.svg" alt="support-2" />
                  <h3>24/7 Support Available</h3>
                  <p style={{ textAlign: 'center' }} >Count on uninterrupted support with our 24/7 availability, ensuring prompt assistance and guidance whenever you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about-us-area">
        <div className="container mw-1470">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-content text-center text-lg-start m-md-auto">
                <h2>
                  Empowering Medical Minds
                </h2>
                <p>

                Master intricate medical concepts with our immersive learning experiences, meticulously crafted to deepen your understanding and elevate your proficiency in the dynamic world of medicine. Embark on this transformative journey, harnessing cutting-edge technology and expert insights to achieve unparalleled expertise. Empower your career, make a lasting impact in healthcare, and stay ahead with our continuously updated, comprehensive, and innovative approach to medical education.</p></div>
            </div>
            <div className="col-lg-6">
              <div className="mt-4 mt-lg-0 position-relative z-1 text-center">
                <img src="assets/images/ai.webp" alt="about-img" />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <a
                    href=""
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <FAQ></FAQ>

    <br></br>
      <br></br>
      <br></br>
      <br></br>


      <section className="students-expressed-section pb-75 bg-img">
        <div className="container mw-1470">
          <div className="main-section-title">
            <h2>
              Our Customer Reviews
            </h2>
          </div>
        </div>
        <Slider></Slider>
      </section>


      <section
        className="e-Teacher-section bg-img"
        data-background="./assets/images/e-teacher-bg.jpg"
        style={{ backgroundImage: 'url("./assets/images/e-teacher-bg.jpg")' }}
      >
        <div className="container mw-1470">
          <div className="row align-items-center">
            <div className="col-lg-6" data-cues="slideInLeft" data-disabled="true">
              <div
                className="e-teacher-content mt-0 pt-75 pb-75"
                data-cue="slideInLeft"
                data-show="true"
                style={{
                  animationName: "slideInLeft",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <h2>Mastering Medical Concepts</h2>
                <p style={{lineHeight:'27px'}}>
                  Embark on a journey to master intricate medical concepts through immersive learning experiences meticulously designed to deepen your understanding and elevate your proficiency in the dynamic world of medicine.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-cues="slideInRight" data-disabled="true">
              <div
                className="text-center"
                data-cue="slideInRight"
                data-show="true"
                style={{
                  animationName: "slideInRight",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <img className="img-fluid" src="assets/images/doctor.png" alt="e-teacher-img" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}
