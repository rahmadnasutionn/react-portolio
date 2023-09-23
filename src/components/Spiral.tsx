import { Burger } from './Burger'
import { FunctionComponent } from 'react'
import { ComponentBurgerProps } from '../interfaces';

const Spiral = ((props) => (
  <Burger {...props} lines={2} render={(o) => (
    <div
      aria-label={o.label || 'Spiral'}
      aria-expanded={o.isToggled}
      data-testid="spiral"
      onClick={o.handler}
      onKeyUp={(e) => e.key === 'Enter' && o.handler()}
      role="button"
      style={{
        ...o.burgerStyles,
        transform: `${o.isToggled
          ? `rotate(${180 * (o.isLeft ? -1 : 1)}deg)`
          : 'none'
        }`,
      }}
      tabIndex={0}
    >
      <div style={{
        ...o.barStyles,
        width: `${o.width}px`,
        top: `${o.topOffset}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)`
          : 'none'
        }`,
      }} />

      <div style={{
        ...o.barStyles,
        width: `${o.width}px`,
        top: `${o.topOffset + o.barHeight + o.margin}px`,
        transition: `${o.time}s ${o.easing}`,
        transform: `${o.isToggled
          ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)`
          : 'none'
        }`,
      }} />
    </div>
  )} />
)) as FunctionComponent<ComponentBurgerProps>

export default Spiral;