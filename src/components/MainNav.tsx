import { Link, useLocation } from "react-router-dom";
import { MainNavType } from "../interfaces";
import { Close, Menu } from './icons';
import MobileNav from './MobileNav';

interface MainNavProps {
  items: MainNavType[];
  children?: typeof ReactNode;
}

function MainNav({ items, children }: MainNavProps) {
  const location = useLocation();
  const [showMobilMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='flex gap-6 md:gap-10'>
      <Link
        to='/'
        title='Back to Home'
        className='text-glow sm:react-effect hidden sm:inline-block'
      >
        Home
      </Link>
      {items.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={[`
                text-sm lg:text-lg tracking-wider text-glow code-effect`,
                location.pathname === path ? 'underline' : ''
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        type='button'
        aria-label='Toggle Menu'
        className='md:hidden flex items-center space-x-2'
        onClick={() => setShowMobileMenu(!showMobilMenu)}
      >
        <span className='font-bold'>
          {showMobilMenu ? 'Close' : 'Menu'}
        </span>
        {showMobilMenu ? <Close /> : <Menu />}
      </button>
      {showMobilMenu && items && (
        <MobileNav items={items}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}

export default MainNav