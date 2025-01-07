const OurPartners = () => {

    const partners = [
        { src: "https://stgfe.saudimf.sa/images/partners/mediaturtles%C2%A0logo.svg" },
        { src: "https://stgfe.saudimf.sa/images/partners/MBC%20Academy.svg" },
        { src: "https://stgfe.saudimf.sa/images/partners/Jahez-2-01.svg" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2FDiriyah.JPG&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2Fmics.jpg&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2Fnabza.jpg&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2Faramco.jpeg&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2FArabsat_logo.png&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/images/partners/alula%201.svg" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2Fmixfm-newlook.png&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/images/partners/NEOM-01-1.svg" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2FRotana.jpeg&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2FSRMG%20Logo_01.png&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2F%D8%A7%D9%84%D9%85%D8%B9%D9%87%D8%AF_%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A_%D9%84%D9%84%D9%81%D9%86%D9%88%D9%86_%D8%A7%D9%84%D8%AA%D9%82%D9%84%D9%8A%D8%AF%D9%8A%D8%A9.svg.png&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2Fsigns.jpg&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/_next/image?url=%2Fimages%2Fpartners%2Felaqat.webp&w=128&q=75" },
        { src: "https://stgfe.saudimf.sa/images/partners/IGNITE.svg" },
        { src: "https://stgfe.saudimf.sa/images/partners/kaciid.svg" },
      ];
      
    return (
      <section className="md:py-[5.75rem] py-8 sm:py-16 overflow-hidden">
        <div className="container relative">
          <h2 className="text-center text-4xl font-bold">فخورون بأن نكون شركاء رحلتكم نحو التميز</h2>
          <div className="h-1.5 mb-4 rounded-full mt-4 w-28 bg-lightGreen mx-auto"></div>
          <div className="relative" role="region" aria-roledescription="carousel">
            <div className="overflow-hidden">
              <div className="flex mt-16" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full w-full gap-6 justify-center flex flex-wrap"
                >
                  {partners.map((partner, index) => (
                    <img
                      key={index}
                      alt="participant"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      className="object-contain flex-shrink-0"
                      src={partner.src}
                      style={{ color: "transparent", width: "100px", height: "100px" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  
  export default OurPartners;
  