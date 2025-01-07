import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500; // التحكم في مقدار التمرير
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#004D40] min-h-screen  py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white text-right">أهم الأخبار</h1>

          <div className="flex gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-[#4CAF50] hover:bg-[#4CAF50]/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#4CAF50]" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-[#4CAF50] hover:bg-[#4CAF50]/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#4CAF50]" />
            </button>
          </div>
        </div>

        {/* News Swiper */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide p-6 bg-[#28aa3a] px-6 rounded-2xl" // Custom scroll hiding (Tailwind plugin required)
          style={{ scrollSnapType: 'x mandatory' }} // Smooth snap scrolling
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="flex-shrink-0  bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-1/3" // Responsive width
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4 ">
                  <img
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-blue-600">المنتدى السعودي للإعلام</span>
                      <svg
                        className="w-4 h-4 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">@saudi_mf</span>
                  </div>
                </div>

                <p className="text-right mb-4 text-gray-800">
                  في #المنتدى_السعودي_للإعلام 2025، نقدم انطلاقة جديدة لتعزيز قوة الإعلام في عالم متغير
                  يتطلب تطوير المهارات الإعلامية.
                </p>

                <div className="flex flex-wrap gap-2 justify-end mb-4">
                  <span className="text-blue-600 text-sm">#الإعلام_في_عالم_يتشكل</span>
                  <span className="text-blue-600 text-sm">#هيئة_الإذاعة_والتلفزيون</span>
                </div>

                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <button className="hover:text-red-500 transition-colors">
                      ❤️ {Math.floor(Math.random() * 100)}
                    </button>
                  </div>
                  <span>20:30 يناير 2025</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
