

import * as React from 'react'
import { TooltipPosition, TooltipProps } from '../../interfaces'
import { cn, isFocusEvent, isMouseEvent } from '../../utils';

function Tooltip({
  children,
  content,
  className,
  disabledFocusListener,
  disabledMouseListener,
  leaveDelay,
  enterDelay,
  onBlur,
  onClose,
  onOpen,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  style,
  position = 'top',
  ...spanProps
}: TooltipProps) {

  const [show, setShow] = React.useState(false);
  const [openTimer, setOpenTimer] = React.useState<number>();
  const [closeTimer, setCloseTimer] = React.useState<number>();

  const isFocus = !disabledFocusListener;
  const isMouse = !disabledMouseListener;

  const handleOpen = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);

    const timer = window.setTimeout(() => {
      setShow(true);

      onOpen?.(event);
    }, leaveDelay);

    setOpenTimer(timer);
  }

  const handleEnter = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.persist();

    if (isFocusEvent(event)) {
      onFocus?.(event);
    } else if (isMouseEvent(event)){
      onMouseEnter?.(event);
    }

    handleOpen(event);
  };

  const handleClose = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);

    const timer = window.setTimeout(() => {
      setShow(false);

      onClose?.(event);
    }, leaveDelay);

    setCloseTimer(timer);
  };

  const handleLeave = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.persist();

    if (isFocusEvent(event)) {
      onBlur?.(event);
    } else if (isMouseEvent(event)) {
      onMouseLeave?.(event);
    }

    handleClose(event);
  };

  const whenBlur = isFocus ? handleLeave : undefined;
  const whenFocus = isFocus ? handleEnter : undefined;

  const whenMouseEnter = isMouse ? handleEnter : undefined;
  const whenMouseLeave = isMouse ? handleLeave : undefined;

  const tabIndex = isFocus ? 0 : undefined;

  const positionStyles: Record<TooltipPosition, string> = {
    top: '-top-2 left-[50%] -translate-x-[50%] -translate-y-[100%]',
    bottom: '-bottom-1 left-[50%] -translate-x-[50%] translate-y-[100%]',
    left: '-left-1 top-[50%] -translate-x-[100%] -translate-y-[50%]',
    right: '-right-1 top-[50%] translate-x-[100%] -translate-y-[50%]'
  };

  return (
    <div
      className='relative inline-block whitespace-nowrap'
      onMouseEnter={whenMouseEnter}
      onMouseLeave={whenMouseLeave}
      onFocus={whenFocus}
      onBlur={whenBlur}
      tabIndex={tabIndex}
      role='tooltip'
    >
      <span
        className={cn(
          'absolute z-50 w-max p-2 font-normal bg-zinc-800 text-center text-zinc-100 rounded font-mono shadow',
          positionStyles[position],
          show ? 'opacity-100 transition-opacity duration-200' : 'opacity-0'
        )}
        style={{
          ...style
        }}
        { ...spanProps }
      >
        {content}
      </span>
      {children}
    </div>
  )
}

export default Tooltip