
const AddedForms = () => {
  const forms = [
    {
      title: "نموذج الطلب الأول",
      date: "24/04/1445",
      status: "جديد"
    },
    {
      title: "نموذج الطلب الثاني",
      date: "23/04/1445",
      status: "جديد"
    },
    {
      title: "نموذج الطلب الثالث",
      date: "22/04/1445",
      status: "جديد"
    }
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#92d240]">النماذج المضافة</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {forms.map((form, index) => (
            <div key={index} className="border-b last:border-b-0 p-4 hover:bg-green-500 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{form.title}</h3>
                  <p className="text-gray-500 text-sm">{form.date}</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {form.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
            عرض المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddedForms;