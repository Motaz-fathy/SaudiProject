import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

const structureData = [
  {
    id: 1,
    logo: "/images/logo1.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل الاستراتيجي"
  },
  {
    id: 2,
    logo: "/path-to-logo2.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  },
  {
    id: 3,
    logo: "/images/logo3.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  },
  {
    id: 4,
    logo: "/images/logo4.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  },
  {
    id: 5,
    logo: "/images/logo5.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  },
  {
    id: 6,
    logo: "/images/logo6.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  },
  {
    id: 7,
    logo: "/images/logo7.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  },
  {
    id: 8,
    logo: "/images/logo8.png",
    description:
      "تولى مسؤولية التوجيه الاستراتيجي لتطوير السياسات والاستراتيجيات والخطط المركزية وكذلك القواعد والمعايير على مستوى التميز وتمكين وإدارة التواصل"
  }
];

const SystemArch = () => {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-center text-white ">
        الهيكل التنظيمي
      </h2>
      <div className="  bg-lightGreen h-[8px]  w-32 mx-auto mb-12 mt-4 rounded-full" />

      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        dir="rtl"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1000}
        loop={true}
        effect="slide"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className="organizational-slider"
      >
        {structureData.map(item =>
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl">
              {/* Logo Circle */}
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500" />
                <div className="absolute inset-1 rounded-full bg-white">
                  <img
                    src={item.logo}
                    alt="Department Logo"
                    className="rounded-full object-contain p-4"
                  />
                </div>
              </div>
              {/* Description */}
              <p className="text-center text-gray-600 mb-2 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>

              {/* Button */}
              <button className="px-6 py-2 border-2 border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-colors duration-300">
                إقرأ المزيد
              </button>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SystemArch;
