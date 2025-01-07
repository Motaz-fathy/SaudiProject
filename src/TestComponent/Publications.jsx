
const  Publications = () => {
  const publications = [
    {
      title: "المطبوعة الأولى",
      type: "PDF",
      size: "2.5 MB",
      date: "24/04/1445"
    },
    {
      title: "المطبوعة الثانية",
      type: "PDF",
      size: "1.8 MB",
      date: "23/04/1445"
    },
    {
      title: "المطبوعة الثالثة",
      type: "PDF",
      size: "3.2 MB",
      date: "22/04/1445"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#92d240]">المطبوعات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  {pub.type}
                </div>
                <span className="text-gray-500 text-sm">{pub.size}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{pub.date}</p>
              <button className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                تحميل
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;