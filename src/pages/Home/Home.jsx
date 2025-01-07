import Navbar from "../../TestComponent/NavBar/Navbar";
import Hero from "../../TestComponent/Hero";
import Services from "../../TestComponent/Services";
import News from "../../TestComponent/News";
import Statistics from "../../TestComponent/Statistics";
import RelatedLinks from "../../TestComponent/RelatedLinks";
import Footer from "../../TestComponent/Footer";
import Publications from "../../TestComponent/Publications";
import AddedForms from "../../TestComponent/AddedForms";
const Home = () => {
  return (
    <div className=" w-full bg-green-900">
      <Navbar />
      <Hero />
      <Services />
      <AddedForms />
      <Publications />
      <News />
      <Statistics />
      <RelatedLinks />
      <Footer />
    </div>
  );
};

export default Home;
