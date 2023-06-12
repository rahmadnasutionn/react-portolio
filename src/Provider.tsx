import LocaleContext from "./context/LocaleContext"
import { Language } from "./interfaces";

interface ProviderType {
  children: typeof ReactNode
}

function Provider({ children }: ProviderType) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Language | null;
      if (savedLocale) {
        setLanguage(savedLocale)
    }
    
  },[])

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LocaleContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default Provider