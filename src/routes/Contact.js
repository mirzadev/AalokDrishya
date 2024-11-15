import Navbar from "../components/NavbarItems/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactUs/contactForm";
import contactCoverPic from "../components/Assets/ContactUsPage/contactUsCoverPic.jpg";
import HeroOther from "../components/HeroSection/HeroOther";

function Contact() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-contact"
        heroImg={contactCoverPic}
        titleOther="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
