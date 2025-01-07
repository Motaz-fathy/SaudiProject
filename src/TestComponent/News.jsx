
const  News = () =>  {
  const news = [
    {
      title: "نشرة الخبر",
      date: "24/04/1445",
      description: "تفاصيل الخبر الأول"
    },
    {
      title: "نشرة الخبر",
      date: "23/04/1445",
      description: "تفاصيل الخبر الثاني"
    },
    {
      title: "نشرة الخبر",
      date: "22/04/1445",
      description: "تفاصيل الخبر الثالث"
    }
  ];

  return (
    <div className=" py-16 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#92d240]">أخبار البوابة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white-100 rounded-lg shadow-md overflow-hidden bg-white">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md">
                  اقرأ المزيد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News 