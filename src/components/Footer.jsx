const Footer = () => {
  return (
    <footer className="relative text-foreText bg-subGround md:pt-[5.75rem] pt-16 pb-4 overflow-hidden">
      <div className="relative">
        <div className="xl:absolute w-fit mx-auto xl:mx-0 mb-6 xl:mb-0 lg:scale-125 xl:right-24">
          <div className="overflow-hidden ">
            <img
              alt="logo"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              src="https://stgfe.saudimf.sa/images/logoAr.svg"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container text-center">
            <div className="max-w-lg mx-auto">
              <h4>
                انضم إلى قائمتنا البريدية لتصلك أحدث الأخبار الحصرية من المنتدى
                السعودي للإعلام
              </h4>
              <div className="mt-10 gap-4 flex items-center sm:flex-row flex-col">
                <div className="relative w-full">
                  <input
                    id="email"
                    placeholder=" "
                    className="p-2 py-3 border rounded-2xl peer focus:outline-none focus:ring-2 focus:ring-primary text-text h-[3.25rem] sm:h-[3.75rem] w-full rtl:placeholder:pr-4 ltr:placeholder:ml-4"
                    type="email"
                    name="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-1/2 -translate-y-1/2 peer-[&:not(:placeholder-shown)]:-translate-y-0 peer-focus:-translate-y-0 peer-focus-within:-translate-y-0 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-0.5 peer-focus:text-primary peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:top-0.5 peer-[&:not(:placeholder-shown)]:text-primary right-[0.8rem] peer-focus:right-0.7"
                  >
                    البريد الالكترونى
                  </label>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/10 focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-[3.25rem] sm:h-[3.75rem] rounded-2xl px-10 w-full sm:w-fit">
                  اشترك الان
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="border-secondary my-10" />
      </div>
      <div className="absolute max-sm:scale-[.60] bottom-10 sm:bottom-40 left-2 sm:left-6 origin-left">
        <svg
          width="181"
          height="35"
          viewBox="0 0 181 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths */}
        </svg>
      </div>
      <div className="overflow-hidden">
        <div className="relative">
          <div className="absolute lg:grid hidden -right-12 bottom-12 grid-cols-5 gap-4">
            {Array.from({ length: 25 }).map((_, index) =>
              <div key={index} className="w-3 h-3 rounded bg-lightGreen" />
            )}
          </div>
          <div className="container relative z-[1] flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-wrap gap-6">
              <div className="min-w-64">
                <h4 className="h6 mb-8 md:mb-4">روابط سريعة</h4>
                <div className="md:gap-4 gap-8 flex-wrap flex flex-col">
                  <a className="text-sm" href="/ar">
                    الرئيسية
                  </a>
                  <a className="text-sm" href="/ar/fomex">
                    المعرض
                  </a>
                  <a className="text-sm" href="/ar/awards">
                    جائزة المنتدى
                  </a>
                  <a className="text-sm" href="/ar/media-center">
                    المركز الإعلامي
                  </a>
                  <a className="text-sm" href="/ar/speakers">
                    المتحدثون
                  </a>
                  <a className="text-sm" href="/ar/around-the-world">
                    حول العالم
                  </a>
                  <a
                    href="https://www.visitsaudi.com/ar/campaigns/winter"
                    className="text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    فعاليات السعودية
                  </a>
                </div>
              </div>
              <div className="min-w-64">
                <h4 className="h6 mb-8 md:mb-4">روابط التواصل</h4>
                <div className="md:gap-4 gap-8 flex-wrap flex flex-col">
                  <a
                    href="https://wa.me/+966535979563"
                    className="flex items-center gap-4 text-sm"
                  >
                    <div className="flex w-8 h-8 border border-white rounded-full items-center justify-center overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="scale-90"
                      >
                        {/* SVG path */}
                      </svg>
                    </div>
                    <span dir="ltr">+966535979563</span>
                  </a>
                  <a
                    href="mailto:info@saudimf.sa"
                    className="flex items-center gap-4 text-sm"
                  >
                    <div className="flex w-8 h-8 border border-white rounded-full items-center justify-center overflow-hidden">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG path */}
                      </svg>
                    </div>
                    <span dir="ltr">info@saudimf.sa</span>
                  </a>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex w-8 h-8 border border-white rounded-full items-center justify-center overflow-hidden">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG path */}
                      </svg>
                    </div>
                    <span>الرياض , المملكة العربية السعودية</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-8 gap-6 text-lg">
              <a
                href="https://www.facebook.com/share/F8X5ZnGPULMPkwN4/?mibextid=LQQJ4d"
                className="text-foreText"
              >
                {/* Facebook SVG */}
              </a>
              <a href="https://x.com/saudi_MF" className="text-foreText">
                {/* Twitter SVG */}
              </a>
              <a
                href="https://www.instagram.com/saudi_mf/"
                className="text-foreText"
              >
                {/* Instagram SVG */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container   md:flex-row  gap-6 flex-col max-sm:mb-12  mt-12 border-t border-border max-w-4xl py-6 px-12 flex items-center justify-between">
        <div>
          <p className="text-fadedText text-sm">
            جميع الحقوق محفوظة للمنتدى السعودي للإعلام 2025
          </p>
        </div>
        <div className="text-fadedText  flex flex-row items-center  gap-2 sm:gap-6">
          <a href="/ar/privacy-policy">سياسة الخصوصية</a>
          <a href="/ar/terms-and-conditions">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
