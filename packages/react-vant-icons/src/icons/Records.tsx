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
      d="M527.778 111.111H218.167c-28.445 0-51.5 23.056-51.5 51.5v730.333c0 28.445 23.055 51.5 51.5 51.5h508.11c28.445 0 51.5-23.055 51.5-51.5V361.111c0-15.333-12.444-27.778-27.777-27.778s-27.778 12.445-27.778 27.778V888.89h-500V166.667h305.556c15.333 0 27.778-12.445 27.778-27.778 0-15.333-12.445-27.778-27.778-27.778m-55.556 555.556H305.556c-15.334 0-27.778 12.444-27.778 27.777 0 15.334 12.444 27.778 27.778 27.778h166.666c15.334 0 27.778-12.444 27.778-27.778 0-15.333-12.444-27.777-27.778-27.777m0 111.11H305.556c-15.334 0-27.778 12.445-27.778 27.779 0 15.333 12.444 27.777 27.778 27.777h166.666c15.334 0 27.778-12.444 27.778-27.777 0-15.334-12.444-27.778-27.778-27.778M726.944 55.556c-7.055 0-14.166 2.722-19.61 8.11l-210.5 210.556a29.374 29.374 0 00-7.612 13.222L460.5 394.611c-4.889 18.056 9.111 34.778 26.556 34.778 2.388 0 4.833-.333 7.277-1l107.111-28.722c5-1.334 9.556-3.945 13.223-7.611l210.61-210.5c10.779-10.89 10.779-28.39 0-39.223l-78.721-78.666c-5.445-5.39-12.5-8.111-19.612-8.111m0 67.11l39.278 39.278-185.889 185.89-53.61 14.388 14.333-53.666 185.888-185.89"
      fillRule="evenodd"
    />
  </svg>
);

const SvgRecords = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgRecords" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgRecords;
