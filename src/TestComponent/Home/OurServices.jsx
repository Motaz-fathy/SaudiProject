
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const OurServices = () => {
  const services = [
    {
      title: "بوابة تواصل",
      logo: "/path-to-logo.svg",
    },
    {
      title: "بوابة بيانات",
      logo: "/path-to-logo.svg",
    },
    {
      title: "الدليل التفاعلي",
      logo: "/path-to-logo.svg",
    },
    {
      title: "مكتبة البرامج",
      logo: "/path-to-logo.svg",
    },
    {
      title: "الدليل التفاعلي",
      logo: "/path-to-logo.svg",
    },
  ];

  return (
    <div className=" mx-auto py-12">
      <h2 className="text-center  text-white px-4 py-2 rounded-lg w-fit mx-auto text-4xl font-bold  flex items-center justify-center gap-2 rtl">
        <span>خدماتنا</span>
      </h2>
      <div className="  bg-lightGreen h-[8px]  w-32 mx-auto mb-12 rounded-full" />


      <div className="relative px-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="py-2">
              <div className="bg-white p-4 rounded-lg shadow-md  h-full mx-1">
                <div className="flex flex-col items-center">
                  <div className="bg-emerald-600 w-full h-24 flex items-center  justify-center">
                    <img
                      src={service.logo}
                      alt="logo"
                      className="w-16 h-16 "
                      width={64}
                      height={64}
                    />
                  </div>
                  <h3 className="text-sm mt-4 mb-3 text-center">
                    {service.title}
                  </h3>
                  <button className="bg-emerald-600 text-sm text-white px-4 py-2 rounded-lg">
                    تصفح الخدمة
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
