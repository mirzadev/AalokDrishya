import Navbar from "../Component/NavbarItems/Navbar";
import HomeItems from "../Component/HomePage/HomeItems";
import FeaturedAlbum from "../Component/HomeFeature/FeaturedAlbum";
import Footer from "../Component/Footer/Footer";
import Carousel from "../Component/Carousel/CarouselFunc";
import "../Component/HomePage/HomeStyle.css";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HomeItems />
      <FeaturedAlbum />
      <Footer />
    </>
  );
}

export default Home;
