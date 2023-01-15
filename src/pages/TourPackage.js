import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

const TourPackage = () => {
    return <>
         <Header />

         <main class="main" id="main">
      <section
        class="section about-hero"
        style={{backgroundImage: 'url(./media/bg-about2.jpg)' }}
        id="hero"
      >
        <h1 class="hero__title">Tour Package</h1>
      </section>

      <section class="section tour container">
        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/img-7.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Burj Al Arab</h5>
              <span class="tour__data-subtitle">Dubai</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-8.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Eiffel Tower</h5>
              <span class="tour__data-subtitle">Paris</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-3.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Colosseum</h5>
              <span class="tour__data-subtitle">Rome</span>
            </div>
            <Link to="/tour-package/detail-rome" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-4.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Golden Bridge</h5>
              <span class="tour__data-subtitle">New York</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-9.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Pyramids</h5>
              <span class="tour__data-subtitle">Egypt</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-10.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Cappadocia</h5>
              <span class="tour__data-subtitle">Turkey</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
        </div>
      </section>
    </main>

         <Footer />
    </>
}

export default TourPackage;