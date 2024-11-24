import Navbar from "../Component/NavbarItems/Navbar";
import HomeItems from "../Component/HomePage/HomeItems";
import FeaturedAlbum from "../Component/HomeFeature/FeaturedAlbum";
import Footer from "../Component/Footer/Footer";
// import Carousel from "../Component/CorouselItems/Carousel";
import Carousel1 from "../Component/Carousel/CarouselFunc";
// import slides from "../Component/CorouselItems/CarouselMenu";
import "../Component/HomePage/HomeStyle.css";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel1 />
      <HomeItems />
      <FeaturedAlbum />
      <Footer />
    </>
  );
}

export default Home;
