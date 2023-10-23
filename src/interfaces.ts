
import { 
  CSSProperties,
  Dispatch,
  ReactNode,
  RefAttributes,
  SetStateAction,
} from "react";

export interface Projects {
  title: string;
  excerpt: string;
  createdAt?: Date;
  tags: string[];
  demoUrl?: string;
  linkYoutube?: string;
  srcUrl?: string;
  linkDribbble?: string;
  public?: boolean;
  unFinished?: boolean;
  submission?: boolean;
};

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

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = {
  children?: React.ReactNode;
  content: string;
  className?: string;
  disabledFocusListener?: boolean;
  disabledMouseListener?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClose?: (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
  ) => void;
  onFocus?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onOpen?: (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  style?: React.CSSProperties;
  position?: TooltipPosition;
} & Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'onBlur' | 'onClose' | 'onMouseEnter' | 'onMouseLeave' | 'onOpen'
>