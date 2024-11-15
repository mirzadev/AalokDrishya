import Navbar from "../Component/NavbarItems/Navbar";
import HomeItems from "../Component/HomePage/HomeItems";
import FeaturedAlbum from "../Component/HomeFeature/FeaturedAlbum";
import Footer from "../Component/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <HomeItems />
      <FeaturedAlbum />
      <Footer />
    </>
  );
}

export default Home;
