const ShareUs = () => {
  return (
    <section className="lg:py-0 pb-8 sm:pb-16 relative overflow-hidden bg-subGround text-white">
      <div className="overflow-hidden">
        <div className="grid sm:gap-4 gap-2 absolute top-32 right-4 grid-cols-2">
          <div className="sm:w-3 sm:h-3 h-1.5 w-1.5 rounded bg-lightGreen" />
          <div className="sm:w-3 sm:h-3 h-1.5 w-1.5 rounded bg-lightGreen" />
          <div className="sm:w-3 sm:h-3 h-1.5 w-1.5 rounded bg-lightGreen" />
          <div className="sm:w-3 sm:h-3 h-1.5 w-1.5 rounded bg-lightGreen" />
          <div className="sm:w-3 sm:h-3 h-1.5 w-1.5 rounded bg-lightGreen" />
          <div className="sm:w-3 sm:h-3 h-1.5 w-1.5 rounded bg-lightGreen" />
        </div>
      </div>
      <div className="container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden order-2 mt-6 text-center lg:text-start lg:order-1">
            <div className="">
              <h2 className="mb-6">كن جزءًا من التحول الإعلامي!</h2>
              <div className="max-w-lg">
                <h3>كن جزءًا من مستقبل الإعلام في المملكة والعالم</h3>
                <p className="mt-5 text-fadedText h4" >
                  انضم إلينا في هذا الحدث الفريد الذي يجمع بين أبرز الخبراء
                  والمتخصصين في المجال الإعلامي
                </p>
                <a
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/10 focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-[3.25rem] sm:h-[3.75rem] rounded-2xl px-10 w-[12rem] mt-6"
                  href="/ar/sign-up"
                >
                  سجل الآن
                </a>
              </div>
            </div>
          </div>
          <div className="md:py-24 lg:order-2  sm:py-16 py-12 lg:py-32 relative">
            <div className="w-full h-full rounded-[10%] bg-[url('/images/arrows-bg2.svg')] bg-repeat top-1/2 -translate-y-1/2 overflow-hidden absolute -left-1/2">
              <div className="overflow-hidden w-full h-full">
                <div className="w-full h-full bg-lightGreen" />
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="">
                <img
                  alt=""
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover relative aspect-[63/60] w-full rounded-[10%]"
                  src="https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Ftake_part.jpeg&w=1080&q=75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareUs;
