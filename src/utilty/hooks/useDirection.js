import { useTranslation } from 'react-i18next';

export const useDirection = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang); // تغيير اللغة
    localStorage.setItem('lang', lang); // حفظ اللغة في localStorage
    document.dir = lang === 'ar' ? 'rtl' : 'ltr'; // تحديث الاتجاه
  };

  const isRTL = i18n.language === 'ar';

  return { isRTL, switchLanguage };
};
