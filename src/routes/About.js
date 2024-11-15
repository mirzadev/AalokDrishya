import Navbar from "../components/NavbarItems/Navbar";
import Footer from "../components/Footer/Footer";
import aboutCoverPic from "../components/Assets/aboutPage/aboutUsCoverPic.jpg";
import Overview from "../components/Overview/Overview";
import AboutUs from "../components/AboutUs/AboutUs";
import HeroOther from "../components/HeroSection/HeroOther";
function About() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-about"
        heroImg={aboutCoverPic}
        titleOther="About Karigor"
        btnClass="hide"
      />
      <Overview />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
