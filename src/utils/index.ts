import * as React from 'react';

const focusEventTypes = ['blur', 'focus'];

const mouseEventTypes = [
  'click',
  'contextmenu',
  'drag',
  'dragend',
  'dragenter',
  'dragover',
  'dragstart',
  'drop',
  'mousedown',
  'mouseenter',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
];

export function isFocusEvent<T>(
  event: React.SyntheticEvent<T> | Event,
): event is React.FocusEvent<T> {
  return 'nativeEvent' in event && focusEventTypes.includes(event.type);
};

export function isMouseEvent<T>(
  event: React.SyntheticEvent<T> | Event,
): event is React.MouseEvent<T> {
  return 'nativeEvent' in event && mouseEventTypes.includes(event.type);
};

export const getFullYear = (time: Date) => {
  if (typeof time === 'undefined') return '';

  return time.getFullYear();
};

export function cn(...classes: (false | null | undefined | string)[]): string {
  return Array.from(
    new Set(
      classes.flatMap((value) => {
        if (typeof value === 'string') {
          return value.split(' ');
        }

        return [];
      })
    )
  )
    .filter(Boolean)
    .join(' ');
};