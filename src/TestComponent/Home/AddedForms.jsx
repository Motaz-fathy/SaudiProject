
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Download, Eye } from "lucide-react";

const AddedForms = () => {
  const models = [
    {
      title: "سياسات التقويم والاعتماد",
      subtitle: "هيئة الإدارة",
      date: "23-10-1445",
      pdfUrl: "#",
    },
    {
      title: "دليل الخدمات الإلكترونية",
      subtitle: "إدارة التدريب",
      date: "23-10-1445",
      pdfUrl: "#",
    },
    {
      title: "سياسات التقويم والاعتماد",
      subtitle: "هيئة الإدارة",
      date: "23-10-1445",
      pdfUrl: "#",
    },
    {
      title: "دليل الخدمات الإلكترونية",
      subtitle: "إدارة التدريب",
      date: "23-10-1445",
      pdfUrl: "#",
    },
    {
      title: "دليل الخدمات الإلكترونية",
      subtitle: "إدارة التدريب",
      date: "23-10-1445",
      pdfUrl: "#",
    },
  ];

  return (
    <div className=" px-4">
      <div className=" mx-auto ">
        <h2 className="text-center text-white text-4xl font-bold ">
          اخر النماذج المضافة
        </h2>
        <div className="  bg-lightGreen h-[8px] mt-4 w-32 mx-auto mb-12 rounded-full" />

        <div className=" ">
          <Swiper
            modules={[Navigation, Autoplay]}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !w-8",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
            className="w-full h-[500px]"
          >
            {models.map((model, index) => (
              <SwiperSlide key={index} className="py-6">
                <div className="bg-white rounded-lg shadow-md px-2 py-2 h-full mx-1">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-md font-semibold text-emerald-600 mb-2 text-right">
                        {model.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-right text-sm">
                        {model.subtitle}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={model.pdfUrl}
                        className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800  flex items-center justify-center gap-2 mb-3  transition-colors"
                      >
                        PDF <Eye className="w-4 h-4" />
                      </a>

                      <p className="text-gray-500 text-sm text-center">
                        {model.date}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AddedForms;
