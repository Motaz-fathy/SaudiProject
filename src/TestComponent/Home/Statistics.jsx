import  { useEffect, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملفات CSS

const Statistics = () => {
  const [startCount1, setStartCount1] = useState(false);
  const [startCount2, setStartCount2] = useState(false);
  const [startCount3, setStartCount3] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 20,
      once: false, 
    });

    const handleAOSAnimation = () => {
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((el) => {
        if (el.dataset.aos === "fade-up" && el.getBoundingClientRect().top < window.innerHeight) {
          if (el.id === "counter1") setStartCount1(true);
          if (el.id === "counter2") setStartCount2(true);
          if (el.id === "counter3") setStartCount3(true);
        }
      });
    };

    window.addEventListener("scroll", handleAOSAnimation);
    return () => {
      window.removeEventListener("scroll", handleAOSAnimation);
    };
  }, []);

  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white" data-aos="fade-up">
          البوابة في أرقام
        </h2>
        <div
          data-aos="fade-up"
          className="bg-lightGreen h-[8px] w-32 mx-auto mb-12 mt-4 rounded-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* العنصر الأول */}
          <div id="counter1" data-aos="fade-up">
            <div className="text-4xl font-bold mb-2">
              {startCount1 && (
                <CountUp
                  start={0}
                  end={532}
                  duration={2.75}
                />
              )}
              +
            </div>
            <p>زيارة يومية</p>
          </div>

          {/* العنصر الثاني */}
          <div id="counter2" data-aos="fade-up">
            <div className="text-4xl font-bold mb-2">
              {startCount2 && (
                <CountUp
                  start={0}
                  end={3000}
                  duration={2.75}
                />
              )}
              +
            </div>
            <p>مستخدم مسجل</p>
          </div>

          {/* العنصر الثالث */}
          <div id="counter3" data-aos="fade-up">
            <div className="text-4xl font-bold mb-2">
              {startCount3 && (
                <CountUp
                  start={0}
                  end={25}
                  duration={2.75}
                />
              )}
              خدمة
            </div>
            <p>خدمة متاحة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
