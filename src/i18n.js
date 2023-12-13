// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const storedLanguage = localStorage.getItem("userLanguage") || "en";

i18n.use(initReactI18next).init({
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
