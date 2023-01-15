import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect} from "react";

const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  
    return <>
     <Header />
     <main class="main" id="main">
      <section
        class="section about-hero"
        style={{backgroundImage : 'url(/media/bg-about3.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">About Us</h1>
      </section>

      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/about-image3.jpg" alt="" />

          <div class="about__data">
            <h3 class="about__data-title">2009</h3>
            <p class="about__data-description">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Diam quis enim
             lobortis scelerisque fermentum dui faucibus. Dui nunc mattis enim ut
             tellus elementum sagittis vitae. Non nisi est sit amet. Non nisi est sit amet
             facilisis magna. A cras semper auctor neque. Et malesuada fames ac turpis
             egestas maecenas pharetra convallis posuere.
            </p>
            <p class="about__data-description">
            Volutpat ac tincidunt vitae semper. Nunc mattis enim ut tellus elementum sagittis vitae et leo.
            Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Sit 
            amet est placerat in egestas erat. Fringilla ut morbi tincidunt augue.
            </p>
          </div>
        </div>
      </section>
    </main>
     <Footer />

    </>
}


export default About;