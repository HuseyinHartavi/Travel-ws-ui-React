import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function HomePage(){

  const getStarted = () =>{
    window.scrollTo({
      top: 725,
      behavior: 'smooth'
    });
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  })

    return(
        <>
        <Header />
        <main class="main" id="main">
      <section class="section hero" 
      style={{backgroundImage: "url(../media/bg-new.jpg"}}
      >
        <h1 class="hero__title">
          Explore the World <br />
          just one Click
        </h1>

        <button onClick={getStarted} class="button button-hero">Get Started</button>
      </section>

      <section class="section tour container">
        <h3 class="section-title">Popular Tours</h3>

        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/img-7.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Burj Al Arab</h5>
              <span class="tour__data-subtitle">Dubai</span>
            </div>
            <Link to="/tour-package/:tourPackageId" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-8.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Eiffel Tower</h5>
              <span class="tour__data-subtitle">Paris</span>
            </div>
            <Link to="/tour-package/:tourPackageId" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-3.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Colosseum</h5>
              <span class="tour__data-subtitle">Rome</span>
            </div>
            <Link to="/tour-package/detail-rome" class="tour__link"></Link>
          </div>
        </div>
      </section>
        </main>
        <Footer />
    
        </>
    )
}