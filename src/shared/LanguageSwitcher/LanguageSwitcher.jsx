import { useDirection } from '../../utilty/hooks/useDirection';

const LanguageSwitcher = () => {
  const { switchLanguage } = useDirection();

  const handleChange = (event) => {
    switchLanguage(event.target.value);
  };

  return (
    <div className="w-full md:w-auto">
      <select
        className="w-full md:w-auto border border-gray-300 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        defaultValue={localStorage.getItem('lang') || 'en'} // ضبط القيمة الافتراضية
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
