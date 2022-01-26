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
      d="M500 888.889c-214.389 0-388.889-174.5-388.889-388.889S285.611 111.111 500 111.111 888.889 285.611 888.889 500 714.389 888.889 500 888.889m0-833.333c-245.444 0-444.444 199-444.444 444.444 0 245.444 199 444.444 444.444 444.444 245.444 0 444.444-199 444.444-444.444 0-245.444-199-444.444-444.444-444.444m6.456 222.222c-44.612 0-80 12.778-105.612 39.055-26.277 25.667-39.055 60.445-39.055 105.056v1c0 17.944 14.444 32.444 32.389 32.444 17.889 0 32.389-14.5 32.389-32.444 0-.389-.111-1-.111-1 0-26.945 5.444-48.222 16.444-62.889 12.222-17.111 32.333-25.667 59.889-25.667 21.944 0 39.055 6.111 51.222 18.334 11.611 12.222 17.778 28.722 17.778 50.055 0 15.89-5.556 30.5-16.556 44.556l-10.389 11.61c-37.777 33.556-60.333 59-69.61 75.668-13.834 24.944-11.334 48-11.334 48 0 17.888 14.556 32.388 32.444 32.388 17.945 0 29.778-12.333 32.39-32.388 0 0 3.333-18.667 10.055-30.89 5.5-10.944 14.055-21.388 25-31.11 29.389-25.056 46.444-40.945 51.889-47.667 14.666-19.5 22.555-44.556 22.555-74.445 0-36.61-12.166-65.944-35.944-87.333-24.445-21.944-56.167-32.333-95.833-32.333m-10.417 357.15c-12.778 0-23.222 3.666-31.111 12.222-9.222 7.889-13.5 18.333-13.5 31.111 0 12.222 4.278 22.611 13.5 31.167 7.889 8.5 18.333 12.778 31.11 12.778 12.279 0 23.223-4.278 32.39-12.167 8.5-8.611 12.778-18.945 12.778-31.778 0-12.778-4.278-23.222-12.778-31.111-8.556-8.556-19.556-12.222-32.39-12.222"
      fillRule="evenodd"
    />
  </svg>
);

const SvgQuestionO = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgQuestionO" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgQuestionO;
