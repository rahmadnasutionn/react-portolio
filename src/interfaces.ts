import type { Placement } from '@floating-ui/core';
import { UseRoleProps, useFloating } from '@floating-ui/react';

import { 
  CSSProperties,
  Dispatch,
  ReactNode,
  RefAttributes,
  SetStateAction,
  ComponentProps,
  PropsWithChildren,
} from "react";

export interface Projects {
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  demoUrl?: string;
  srcUrl?: string;
  featured?: boolean;
  unFinished?: boolean;
  currently?: boolean;
}

export type Language = 'id' | 'en';

export interface LanguageContext {
  language: Language,
  setLanguage: Dispatch<SetStateAction<Language>>
}

export interface MainNavType {
  label: string;
  path: string;
}

export interface ComponentBurgerProps {
  color?: string;
  direction?: 'left' | 'right';
  distance?: 'sm' | 'md' | 'lg';
  duration?: number;
  easing?: string;
  hideOutline?: boolean;
  label?: string;
  onToggle?: (toggled: boolean) => void;
  rounded?: boolean;
  size?: number;
  toggle?: Dispatch<SetStateAction<boolean>>
  toggled?: boolean;
}

export interface RenderOptions {
  barHeight: number;
  barStyles: CSSProperties;
  burgerStyles: CSSProperties;
  handler: () => void;
  isLeft: boolean;
  isToggled: boolean;
  label: string | undefined;
  margin: number;
  move: number;
  time: number;
  easing: string;
  topOffset: number;
  width: number;
}

export interface BurgerProps extends ComponentBurgerProps {
  render: (o: RenderOptions) => ReactNode;
  lines?: number;
}

export type MarqueeProps = {
  style?: CSSProperties;
  className?: string;
  autoFill?: boolean;
  play?: boolean;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  delay?: number;
  loop?: number;
  gradient?: boolean;
  gradientColor?: [number, number, number];
  gradientWidth?: number | string;
  onFinish?: () => void;
  onCycleComplete?: () => void;
  onMount?: () => void;
  children?: ReactNode;
} & RefAttributes<HTMLDivElement>;

export interface ElementProps {
  reference?: React.HTMLProps<Element>;
  floating?: React.HTMLProps<HTMLElement>;
  item?: React.HTMLProps<HTMLElement>;
}

export interface FloatingTheme {
  animation: string;
  base: string;
  content: string;
  hidden: string;
  style: {
    auto: string;
    dark: string;
    light: string;
  };
  target: string;
}

export type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  : T;
  
export type TooltipTheme = FloatingTheme;
  
export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'content' | 'style'>> {
  animation?: false | `duration-${number}`;
  content?: ReactNode;
  placement?: 'auto' | Placement;
  style?: 'dark' | 'light' | 'auto';
  trigger?: 'hover' | 'click';
  theme?: DeepPartial<TooltipTheme>;
}

export type FloatingStyle = 'dark' | 'light' | 'auto';

export interface FloatingProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'content' | 'style'> {
  animation?: false | `duration-${number}`;
  content: ReactNode;
  placement?: 'auto' | Placement;
  style?: FloatingStyle;
  trigger?: 'hover' | 'click';
  minWidth?: number;
  theme: FloatingTheme;
};

export type UseFloatingInteractionsParams = {
  context: ReturnType<typeof useFloating>['context'];
  trigger?: 'hover' | 'click';
  role?: UseRoleProps['role'];
  interactions?: ElementProps[]
}