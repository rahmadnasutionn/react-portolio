import cn from 'classnames';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface AnimProps {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}

function directionToClasses(direction?: Direction) {
  switch (direction) {
    case 'bottom':
      return {
        to: 'opacity-100 translate-y-0',
        from : 'opacity-20 translate-y-6'
      }
    case 'left':
      return {
        to: 'opacity-100 translate-x-0',
        from: 'opacity-20 translate-x-6'
      }
    case 'right':
      return {
        to: 'opacity-100 translate-x-0',
        from: 'opacity-20 translate-x-6'
      }
    default:
      return {
        to: 'opacity-100 translate-y-0',
        from: 'opacity-20 -translate-y-6',
      }
  }
}

function AnimOnAppear({ children, direction, className }: AnimProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { });
  const { from, to } = directionToClasses(direction);
  const classNames = cn(
    className,
    entry?.isIntersecting ? to : from,
    'transition-all duration-700 ease-in-out'
  )
  return (
    <div ref={ref} className={classNames}>
      {children}
    </div>
  )
}

export default AnimOnAppear