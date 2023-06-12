import LocaleContext from "../context/LocaleContext";

function useLanguage() {
  const { language, setLanguage } = useContext(LocaleContext)

  const toggleLanguage = () => 
    setLanguage((prevLocal) => prevLocal === 'id' ? 'en' : 'id');

  return { language, setLanguage, toggleLanguage };
}

export default useLanguage;