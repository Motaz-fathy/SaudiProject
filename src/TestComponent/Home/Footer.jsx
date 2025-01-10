
const  Footer = () =>  {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">عن الموقع</h3>
            <p className="text-gray-200">وصف مختصر عن الموقع والخدمات المقدمة</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white">الرئيسية</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">الخدمات</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">الأخبار</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-2 text-gray-200">
              <li>العنوان: المملكة العربية السعودية</li>
              <li>الهاتف: +966 XX XXX XXXX</li>
              <li>البريد الإلكتروني: info@example.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-200">جميع الحقوق محفوظة © 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer