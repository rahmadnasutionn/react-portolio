import {
  Fragment,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  Children,
  MutableRefObject,
} from "react";
import { MarqueeProps } from "../interfaces";
  
  function Marquee(
    {
      style = {},
      className = "",
      autoFill = false,
      play = true,
      pauseOnHover = false,
      pauseOnClick = false,
      direction = "left",
      speed = 50,
      delay = 0,
      loop = 0,
      gradient = false,
      gradientColor = [255, 255, 255],
      gradientWidth = 200,
      onFinish,
      onCycleComplete,
      onMount,
      children,
      ref
    }: MarqueeProps,
    
  ) {

    const [containerWidth, setContainerWidth] = useState(0);
    const [marqueeWidth, setMarqueeWidth] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [isMounted, setIsMounted] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const containerRef = (ref as MutableRefObject<HTMLDivElement>) || rootRef;
    const marqueeRef = useRef<HTMLDivElement>(null);
  
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = useCallback(() => {
      if (marqueeRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const marqueeRect = marqueeRef.current.getBoundingClientRect();
        let containerWidth = containerRect.width;
        let marqueeWidth = marqueeRect.width;
  
        // Swap width and height if direction is up or down
        if (direction === "up" || direction === "down") {
          containerWidth = containerRect.height;
          marqueeWidth = marqueeRect.height;
        }
  
        if (autoFill && containerWidth && marqueeWidth) {
          setMultiplier(
            marqueeWidth < containerWidth
              ? Math.ceil(containerWidth / marqueeWidth)
              : 1
          );
        } else {
          setMultiplier(1);
        }
  
        setContainerWidth(containerWidth);
        setMarqueeWidth(marqueeWidth);
      }
    }, [autoFill, containerRef, direction]);
  
    // Calculate width and multiplier on mount and on window resize
    useEffect(() => {
      if (!isMounted) return;
  
      calculateWidth();
      if (marqueeRef.current && containerRef.current) {
        const resizeObserver = new ResizeObserver(() => calculateWidth());
        resizeObserver.observe(containerRef.current);
        resizeObserver.observe(marqueeRef.current);
        return () => {
          if (!resizeObserver) return;
          resizeObserver.disconnect();
        };
      }
    }, [calculateWidth, containerRef, isMounted]);
  
    // Recalculate width when children change
    useEffect(() => {
      calculateWidth();
    }, [calculateWidth, children]);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    useEffect(() => {
      if (typeof onMount === "function") {
        onMount();
      }
    }, []);
  
    // Animation duration
    const duration = useMemo(() => {
      if (autoFill) {
        return (marqueeWidth * multiplier) / speed;
      } else {
        return marqueeWidth < containerWidth
          ? containerWidth / speed
          : marqueeWidth / speed;
      }
    }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);
  
    const rgbaGradientColor = `rgba(${gradientColor[0]}, ${gradientColor[1]}, ${gradientColor[2]}`;
  
    const containerStyle = useMemo(
      () => ({
        ...style,
        ["--pause-on-hover" as string]:
          !play || pauseOnHover ? "paused" : "running",
        ["--pause-on-click" as string]:
          !play || (pauseOnHover && !pauseOnClick) || pauseOnClick
            ? "paused"
            : "running",
        ["--width" as string]:
          direction === "up" || direction === "down" ? `100vh` : "100%",
        ["--transform" as string]:
          direction === "up"
            ? "rotate(-90deg)"
            : direction === "down"
            ? "rotate(90deg)"
            : "none",
      }),
      [style, play, pauseOnHover, pauseOnClick, direction]
    );
  
    const gradientStyle = useMemo(
      () => ({
        ["--gradient-color" as string]: `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`,
        ["--gradient-width" as string]:
          typeof gradientWidth === "number"
            ? `${gradientWidth}px`
            : gradientWidth,
      }),
      [rgbaGradientColor, gradientWidth]
    );
  
    const marqueeStyle = useMemo(
      () => ({
        ["--play" as string]: play ? "running" : "paused",
        ["--direction" as string]: direction === "left" ? "normal" : "reverse",
        ["--duration" as string]: `${duration}s`,
        ["--delay" as string]: `${delay}s`,
        ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
        ["--min-width" as string]: autoFill ? `auto` : "100%",
      }),
      [play, direction, duration, delay, loop, autoFill]
    );
  
    const childStyle = useMemo(
      () => ({
        ["--transform" as string]:
          direction === "up"
            ? "rotate(90deg)"
            : direction === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [direction]
    );
  
    // Render {multiplier} number of children
    const multiplyChildren = useCallback(
      (multiplier: number) => {
        return [
          ...Array(
            Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0
          ),
        ].map((_, i) => (
          <Fragment key={i}>
            {Children.map(children, (child) => {
              return (
                <div style={childStyle} className="child">
                  {child}
                </div>
              );
            })}
          </Fragment>
        ));
      },
      [childStyle, children]
    );
  
    return !isMounted ? null : (
      <div
        ref={containerRef}
        style={containerStyle}
        className={"marquee-container " + className}
      >
        {gradient && <div style={gradientStyle} className="overlay" />}
        <div
          className="marquee"
          style={marqueeStyle}
          onAnimationIteration={onCycleComplete}
          onAnimationEnd={onFinish}
        >
          <div className="initial-child-container" ref={marqueeRef}>
            {Children.map(children, (child) => {
              return (
                <div style={childStyle} className="child">
                  {child}
                </div>
              );
            })}
          </div>
          {multiplyChildren(multiplier - 1)}
        </div>
        <div className="marquee" style={marqueeStyle}>
          {multiplyChildren(multiplier)}
        </div>
      </div>
  );
};
  
export default Marquee;