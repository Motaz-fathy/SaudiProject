
const  Statistics = () =>{
  return (
    <div className="bg-green-700 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">البوابة في أرقام</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">532+</div>
            <p>زيارة يومية</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">3000+</div>
            <p>مستخدم مسجل</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25 خدمة</div>
            <p>خدمة متاحة</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics