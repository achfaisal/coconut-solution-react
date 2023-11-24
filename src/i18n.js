// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation data files
import productEn from "./lang/product-en";
import productId from "./lang/product-id";

const storedLanguage = localStorage.getItem("userLanguage") || "en";

const translationData = {
  en: {
    translation: {
      product: productEn(),
    },
  },
  id: {
    translation: {
      product: productId(),
    },
  },
  // Add more languages as needed
};

i18n.use(initReactI18next).init({
  resources: translationData,
  lng: storedLanguage, // Use the stored language or default to 'en'
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Update user language in localStorage whenever it changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("userLanguage", lng);
});

export default i18n;
