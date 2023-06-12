import { createContext } from "react";
import { LanguageContext } from "../interfaces";

const LocaleContext = createContext<LanguageContext>({
  language: 'en',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLanguage: () => {},
});

export default LocaleContext;

