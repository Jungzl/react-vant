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
      d="M833.333 833.333v-611.11h-111.11V250c0 15.341-12.437 27.778-27.779 27.778-15.34 0-27.777-12.437-27.777-27.778v-27.778H333.333V250c0 15.341-12.436 27.778-27.777 27.778-15.342 0-27.778-12.437-27.778-27.778v-27.778H166.667v611.111h666.666zm-111.11-666.666h111.11c30.723 0 55.556 24.833 55.556 55.555v611.111c0 30.723-24.833 55.556-55.556 55.556H166.667c-30.723 0-55.556-24.833-55.556-55.556v-611.11c0-30.723 24.833-55.556 55.556-55.556h111.11v-27.778c0-15.341 12.437-27.778 27.779-27.778 15.34 0 27.777 12.437 27.777 27.778v27.778h333.334v-27.778c0-15.341 12.436-27.778 27.777-27.778 15.342 0 27.778 12.437 27.778 27.778v27.778zM305.555 611.11c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h388.888c15.342 0 27.778 12.436 27.778 27.777 0 15.342-12.436 27.778-27.778 27.778H305.556zm0-111.111c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h388.888c15.342 0 27.778 12.437 27.778 27.778S709.786 500 694.444 500H305.556zm0 222.222c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h166.666c15.341 0 27.778 12.436 27.778 27.777 0 15.342-12.437 27.778-27.778 27.778H305.556z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgNotesO = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgNotesO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgNotesO;
