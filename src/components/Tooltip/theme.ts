import type { TooltipTheme } from '../../interfaces';

export const tooltipTheme: TooltipTheme = {
  target: 'max-w-fit',
  animation: 'transition-opacity',
  base: 'absolute inline-block z-10 rounded py-2 px-3 text-sm font-medium shadow-sm',
  hidden: 'invisible opacity-0',
  style: {
    dark: 'bg-[#444] text-white dark:bg-gray-700',
    light: 'bg-[#dedede] text-[#444] font-semibold',
    auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
  },
  content: 'relative z-20',
};

export const theme = {
  tooltip: tooltipTheme
}