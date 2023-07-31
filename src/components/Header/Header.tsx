import { Link } from "react-router-dom";
import { navMenu } from "../../config";
import useLanguage from "../../hooks/useLanguage";
import MainNav from "../MainNav";
import { GitHub } from "../icons";
import Tooltip from "../Tooltip";

function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="container z-30 max-w-7xl mx-auto">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={navMenu} />
        <nav className="flex space-x-4 justify-center align-middle">
          <Tooltip content='Source' placement="bottom" style="light">
            <Link
              to={'https://github.com/rahmadnasutionn/react-portolio/tree/master'}
              target="_blank"
              rel="norefferer"
              className="flex mt-1"
            >
              <GitHub className="w-6 h-6 my-auto" />
              <span className="sr-only">Github</span>
            </Link>
          </Tooltip>
          <Tooltip 
            content={language === 'en' ? 'ENGLISH' : 'INDONESIA'} 
            style="light"
          >
            <button 
              type='button'
              aria-label="Toggle Language"
              className="code-effect mx-2 text-glow text-[20px]"
              onClick={toggleLanguage}
            >
              {language === 'id' ? 'ID' : 'EN'}
            </button>
          </Tooltip>
        </nav>
      </div>
    </div>
  );
}

export default Header;