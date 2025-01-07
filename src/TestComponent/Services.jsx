
const  SystemArch = () =>  {
  const structures = [
    {
      title: "الخدمة الأولى",
      description: "وصف تفصيلي للخدمة الأولى"
    },
    {
      title: "الخدمة الثانية",
      description: "وصف تفصيلي للخدمة الثانية"
    },
    {
      title: "الخدمة الثالثة",
      description: "وصف تفصيلي للخدمة الثالثة"
    },
    {
      title: "الخدمة الرابعة",
      description: "وصف تفصيلي للخدمة الرابعة"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#92d240]">الهيكل التنظيمي</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {structures.map((structure, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 ">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <img src="/logo.png" alt="structure Icon" className="w-8 h-8" />
              </div>
              <p className="text-gray-600 text-end">{structure.description}</p>

              <p className="text-green-600 text-end cursor-pointer">اقراء المزيد ..</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemArch