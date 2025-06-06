/* eslint-disable no-unused-vars */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import i18n from './i18n';
import './index.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

const defaultLang = localStorage.getItem('lang') || 'ar'; // اجعلها 'en' افتراضياً
document.dir = defaultLang === 'ar' ? 'rtl' : 'ltr'; // اجعل 'ltr' الافتراضي

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
