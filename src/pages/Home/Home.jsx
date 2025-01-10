import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملفات CSS

import Services from "../../TestComponent/Home/Services";
import News from "../../TestComponent/Home/News";
import Statistics from "../../TestComponent/Home/Statistics";
import RelatedLinks from "../../TestComponent/Home/RelatedLinks";
import Footer from "../../TestComponent/Home/Footer";
import Publications from "../../TestComponent/Home/Publications";
import AddedForms from "../../TestComponent/Home/AddedForms";
import Header from "../../TestComponent/Header";
import OurServices from "../../TestComponent/Home/OurServices";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* إضافة fade-in-section لكل قسم */}
      <Header />
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Services />
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <News />
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <OurServices />
      </div>


      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <AddedForms />
      </div>
      <div data-aos="fade-right">
        <Publications />
      </div>
    
     
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Statistics />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <RelatedLinks />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
