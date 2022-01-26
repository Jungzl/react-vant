import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M166.556 388.779v444.445h166.667V388.78H166.556zm0-55.556h166.667c30.682 0 55.556 24.873 55.556 55.556v444.445c0 30.683-24.874 55.556-55.556 55.556H166.556c-30.683 0-55.556-24.873-55.556-55.556V388.78c0-30.683 24.873-55.556 55.556-55.556zM611 277.667c15.342 0 27.778 12.437 27.778 27.778v55.556c0 15.341-12.436 27.778-27.778 27.778-15.34 0-27.777-12.437-27.777-27.778v-55.556c0-15.341 12.436-27.778 27.777-27.778zm0 222.223c15.342 0 27.778 12.437 27.778 27.778v55.556c0 15.34-12.436 27.777-27.778 27.777-15.34 0-27.777-12.436-27.777-27.777v-55.556c0-15.341 12.436-27.778 27.777-27.778zm111.112-111.111c15.341 0 27.778 12.436 27.778 27.777v55.556c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778v-55.556c0-15.34 12.437-27.777 27.778-27.777zm0 222.222c15.341 0 27.778 12.437 27.778 27.778v55.556c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778v-55.556c0-15.341 12.437-27.778 27.778-27.778zM499.89 166.556v666.668h333.334V166.556H499.89zm0-55.556h333.334c30.683 0 55.556 24.873 55.556 55.556v666.668c0 30.683-24.873 55.556-55.556 55.556H499.89c-30.683 0-55.556-24.873-55.556-55.556V166.556c0-30.683 24.873-55.556 55.556-55.556z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgHotelO = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgHotelO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgHotelO;
