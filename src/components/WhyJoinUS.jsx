const WhyJoinUs = () => {
    const cards = [
      {
        image: "https://stgfe.saudimf.sa/images/why_you_should_come/image_1.jpg",
        title: "استكشاف التكنولوجيا الحديثة",
        description:
          "اكتشف آخر ما توصلت إليه التكنولوجيا الإعلامية وأحدث الابتكارات الرقمية. كن في طليعة التطورات التي تعيد تشكيل مستقبل الإعلام.",
      },
      {
        image: "https://stgfe.saudimf.sa/images/why_you_should_come/image_2.JPG",
        title: "اكتساب معرفة",
        description:
          "شارك في جلسات حوارية وورش عمل يقودها نخبة من المتحدثين والخبراء العالميين. احصل على رؤى جديدة وأفكار مبتكرة تعزز من مهاراتك ومعرفتك.",
      },
      {
        image: "https://stgfe.saudimf.sa/images/why_you_should_come/image_3.JPG",
        title: "تواصل مع رواد الإعلام",
        description:
          "انضم إلى قادة الإعلام ورواد الأعمال الذين يقودون التحول الرقمي في القطاع. اغتنم الفرصة للتواصل مع الخبراء وبناء علاقات مهنية قيمة.",
      },
    ];
  
    return (
      <section className="md:py-[5.75rem] py-8 sm:py-16 text-white relative overflow-hidden bg-subGround">
        <div
          className="w-[95%] h-[95%] absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-[url('/images/arrows-bg.png')] bg-repeat z-0"
        ></div>
        <div className="container relative z-[1]">
          <div className="overflow-hidden">
            <div>
              <h2 className="text-center text-white">لماذا يجب أن تكون هنا؟</h2>
              <div className="h-1.5 mb-8 rounded-full mt-4 w-24 mx-auto bg-lightGreen"></div>
            </div>
          </div>
          <div className="overflow-visible">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="cardShadow flex flex-col justify-end p-6 rounded-3xl mb-32 pb-0 gap-4 text-center w-full aspect-square"
                  style={{
                    background: `url(${card.image}) center center / cover`,
                  }}
                >
                  <div className="bg-green-700 px-6 w-full h-auto translate-y-1/2 py-10 flex text-center items-center justify-center flex-col gap-4 rounded-3xl">
                    <h5 className="block">{card.title}</h5>
                    <p className="text-sm text-center">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyJoinUs;
  