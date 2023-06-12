import { Link } from "react-router-dom";
import { navMenu } from "../../config";
import AnimOnAppear from "../AnimOnAppear";
import useLanguage from "../../hooks/useLanguage";

function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <AnimOnAppear>
    <header className="w-full px-4 py-6 font-mono flex items-center justify-between max-w-7xl mx-auto">
      <Link to={'/'} className="text-glow react-effect text-[24px]">
        Home
      </Link>
      <nav>
        <ul className="flex items-center">
          {navMenu.map(({ label, path }) => (
            <li key={path} className="sm:mr-2">
              <Link to={path} className="px-1 sm:px-2 code-effect text-md sm:text-[20px] tracking-wide text-glow">
                {label}
              </Link>
            </li>
          ))}
          <li className="">
            <button
              title={language === 'id' ? 'Indonesia' : 'English'}
              onClick={toggleLanguage}
              className="code-effect text-[20px] sm:px-2 px-0 text-glow"
            >
              {language === 'id' ? 'ID' : 'EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
    </AnimOnAppear>
  );
}

export default Header;