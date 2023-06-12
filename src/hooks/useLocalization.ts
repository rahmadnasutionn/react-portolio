import { enLocalization, idLocalization } from "../config";
import useLanguage from "./useLanguage"

function useLocalization() {
  const { language } = useLanguage();

  switch (language) {
    case 'id':
      return idLocalization      
    case 'en':
      return enLocalization;
    default:
      return enLocalization
  }
}

export default useLocalization