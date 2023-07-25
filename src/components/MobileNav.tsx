import { MainNavType } from '../interfaces'
import useLockBody from '../hooks/useLockBody';

interface MobileNavProps {
  items: MainNavType[];
}

function MobileNav({ items }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className='fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
    >
      <div className='relative z-20 grid gap-3 rounded-md p-4 bg-white text-glow shadow'>
        <Link to='/'>
          <span className='font-bold react-effect'>
            Home
          </span>
        </Link>
        <nav className='grid grid-flow-row auto-rows-max text-sm'>
          {items.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className='flex w-full items-center rounded-md p-2 tracking-normal text-[16px] font-medium hover:underline'
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav