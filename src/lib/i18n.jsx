import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ui } from "./locales/ui";

/**
 * Site language. Turkish is the default: a first-time visitor lands on Turkish,
 * and a choice made with the header switcher is remembered.
 */
const STORAGE_KEY = "bvd-lang";
export const LANGUAGES = ["tr", "en"];
export const DEFAULT_LANGUAGE = "tr";

const I18nContext = createContext(null);

function storedLanguage() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(value) ? value : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(storedLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode — the language simply is not remembered */
    }
  }, [lang]);

  const t = useCallback(
    (key) => {
      const entry = ui[key];
      if (!entry) return key;
      return entry[lang] ?? entry.en ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside LanguageProvider");
  return value;
}