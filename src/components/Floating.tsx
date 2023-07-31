import { FloatingProps } from '../interfaces'
import { useBaseFloating, useFloatingInteractions } from '../utils';
import { autoUpdate, useFocus } from '@floating-ui/react';
import classNames from 'classnames';

function Floating({
  animation = 'duration-300',
  content,
  placement = 'top',
  style = 'dark',
  className,
  theme,
  children,
  trigger = 'hover',
  minWidth,
  ...props
}: FloatingProps) {
  const [open, setOpen] = useState<boolean>(false);

  const floatingProperties = useBaseFloating({
    open,
    placement,
    setOpen,
  });

  const {
    x,
    y,
    context,
    refs,
    strategy,
    update,
  } = floatingProperties;

  const focus = useFocus(context);

  const {
    getFloatingProps,
    getReferenceProps
  } = useFloatingInteractions({
    context,
    role: 'tooltip',
    trigger,
    interactions: [focus]
  });

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }
  }, [open, refs.reference, refs.floating, update]);

  return (
    <>
      <div
        ref={refs.setReference}
        className=''
        {...getReferenceProps()}
      >
        {children}
      </div>
      <div
        ref={refs.setFloating}
        {...getFloatingProps({
          className: classNames(
            theme.base,
            animation && `${animation}`,
            !open && theme.hidden,
            theme.style[style],
            className
          ),
          style: {
            position: strategy,
            top: y ?? '',
            left: x ?? '',
            minWidth
          },
          ...props
        })}
      >
        <div className={theme.content}>
          {content}
        </div>
      </div>
    </>
  )
}

export default Floating