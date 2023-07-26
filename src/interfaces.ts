import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

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