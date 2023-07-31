import { shift } from '@floating-ui/core';
import type {
  ReferenceType,
  Placement,
  Middleware,
} from '@floating-ui/react';

import { 
  safePolygon,
  useClick,
  useDismiss,
  useHover,
  useInteractions,
  useRole 
} from '@floating-ui/react';

import {
  offset,
  autoPlacement,
  flip,
  useFloating,
} from '@floating-ui/react'
import { Dispatch, SetStateAction } from 'react';
import { UseFloatingInteractionsParams } from '../interfaces';

export type UseBaseFloatingParams = {
  placement?: 'auto' | Placement;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>
};

export const getPlacement = ({ placement }: { placement: 'auto' | Placement }): Placement | undefined => {
  return placement === 'auto' ? undefined : placement;
};

export const getMiddleware = ({
  placement,
}: {
  placement: 'auto' | Placement,
}): Middleware[] => {
  const middleware = [];

  middleware.push(offset(8));
  middleware.push(placement === 'auto' ? autoPlacement() : flip());
  middleware.push(shift({ padding: 8 }));

  return middleware;
};

export const useBaseFloating = <Type extends ReferenceType>({
  placement = 'auto',
  open,
   setOpen,
}: UseBaseFloatingParams) => {
  return useFloating<Type>({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    middleware: getMiddleware({ placement }),
  });
};

export const useFloatingInteractions = ({
  context,
  interactions = [],
  role = 'tooltip',
  trigger = 'hover',
}: UseFloatingInteractionsParams) => {
  return useInteractions([
    useClick(context, {
      enabled: trigger === 'click',
    }),
    useHover(context, {
      enabled: trigger === 'hover',
      handleClose: safePolygon(),
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions,
  ]);
};

function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === 'object' && item.constructor === Object;
}

function cloneDeep<T>(source: T) {
  if (!isObject(source)) {
    return source;
  }

  const output = { ...source };

  Object.keys(output).forEach(key => {
    (output as Record<string, unknown>)[key] = cloneDeep(source[key]);
  })

  return output;
};

export function mergeDeep<T extends object, S extends object>(target: T, source: S): T & S {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  const output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        (output as Record<string, unknown>)[key] = mergeDeep(target[key] as object, source[key] as object);
      } else {
        (output as Record<string, unknown>)[key] = isObject(source[key] ? cloneDeep(source[key]) : source[key])
      }
    })
  }

  return output;
};
