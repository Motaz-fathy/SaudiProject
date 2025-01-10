
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";


const newsData = [
  {
    id: 1,
    title: "Important Announcement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder-news.jpg",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "New Development",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder-news.jpg",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Community Update",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/placeholder-news.jpg",
    date: "2024-01-13",
  },
  {
    id: 4,
    title: "Latest News",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/placeholder-news.jpg",
    date: "2024-01-12",
  },
];

const BREAKPOINTS = {
  320: {
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
  },
  480: {
    slidesPerView: 1.5,
    spaceBetween: 15,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 1.8,
    spaceBetween: 20,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 2.2,
    spaceBetween: 25,
    centeredSlides: true,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 35,
    centeredSlides: true,
  },
};

const News = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("ar-SA");
  };

  // Get the initial slide index (1 if exists, otherwise 0)
  const initialSlide = newsData.length > 1 ? 1 : 0;

  // Prevent hydration errors by using useEffect for client-side only code
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null on server-side to prevent hydration mismatch
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 " dir="rtl">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold text-center text-white ">
        أخبار البوابة
      </h2>
      <div className="  bg-lightGreen h-[8px]  w-32 mx-auto mb-12 mt-4 rounded-full" />
        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={initialSlide}
            breakpoints={BREAKPOINTS}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={1000}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
            className="w-full py-10 px-4 md:px-[15px]"
          >
            {newsData.map((news) => (
              <SwiperSlide
                key={news.id}
                className="bg-white transition-all duration-300 p-2 md:p-3"
              >
                <div className="border border-gray-200 hover:shadow-lg rounded-lg p-3 md:p-4 transition-shadow relative">
                  <div className="absolute -left-2 top-1/2 w-4 h-8 bg-emerald-600/10 rounded-l md:hidden flex items-center justify-center">
                    <span className="text-emerald-600 text-xl">›</span>
                  </div>
                  <div className="absolute -right-2 top-1/2 w-4 h-8 bg-emerald-600/10 rounded-r md:hidden flex items-center justify-center">
                    <span className="text-emerald-600 text-xl">‹</span>
                  </div>

                  <div className="relative aspect-[4/3] mb-3 md:mb-4">
                    <div className="border border-emerald-600 rounded w-full h-full flex items-center justify-center">
                      <span
                        className="text-base md:text-xl text-center text-gray-600"
                        aria-label="صورة إخبارية"
                      >
                        صورة الخبر
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-2 line-clamp-2 text-xs md:text-sm">
                      {news.description}
                    </p>
                    <button
                      className="px-3 md:px-4 py-1 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors text-xs md:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      aria-label={`اقرأ المزيد عن ${news.title}`}
                    >
                      المزيد
                    </button>
                    <time
                      dateTime={news.date}
                      className="block text-gray-500 text-[10px] md:text-xs mt-2"
                    >
                      {formatDate(news.date)}
                    </time>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <button
              className="swiper-button-prev !text-emerald-600 !hidden md:!flex"
              aria-label="السابق"
            />
            <button
              className="swiper-button-next !text-emerald-600 !hidden md:!flex"
              aria-label="التالي"
            />

            <div className="swiper-pagination !bottom-0 !flex md:!hidden gap-1 justify-center items-center" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;


// export default News 