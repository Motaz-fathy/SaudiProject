import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      title: "المركز الإعلامي",
      description:
        "المركز الإعلامي للمركز الإعلامي للمركز الإعلامي للمركز الإعلامي",
    },
    {
      title: "عنوان آخر",
      description: "وصف آخر هنا",
    },
    // Add more slides as needed
  ];

  return (
    <div className=" w-full h-screen md:h-[30vh] lg:h-[60vh] z-0 ">
    

      {/* Content */}
      <div className="h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active !w-8",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
           className="w-full h-[500px]"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index} className="h-full flex flex-col items-center justify-center ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-white text-center max-w-2xl mx-auto">
                {slide.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
