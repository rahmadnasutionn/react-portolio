import { TooltipProps } from "../../interfaces";
import { mergeDeep } from "../../utils";
import Floating from "../Floating";
import { theme } from "./theme";

function Tooltip({
  animation = 'duration-300',
  children,
  className,
  content,
  placement = 'top',
  style = 'dark',
  trigger = 'hover',
  theme: customTheme = {},
  ...props
}: TooltipProps) {

  const themes = mergeDeep(theme.tooltip, customTheme);
  
  return (
    <Floating
      animation={animation}
      content={content}
      placement={placement}
      style={style}
      trigger={trigger}
      className={className}
      theme={themes}
      {...props}
    >
      {children}
    </Floating>
  );
};

export default Tooltip