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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zM364.085 250c-29.944 0-53.877 21.922-77.152 52.952C265.534 331.488 250 363.068 250 395.45c0 31.2 15.134 67.118 39.259 106.27 22.572 36.63 53.525 75.748 87.354 110.464l10.949 10.952c34.97 34.08 74.088 65.034 110.717 87.605 39.133 24.12 75.068 39.26 106.27 39.26 32.386 0 63.977-15.54 92.5-36.934C728.077 689.792 750 665.86 750 635.915c0-18.342-9.446-33.884-27.538-51.33-11.19-10.79-24.91-21.577-39.57-31.838-14.472-10.13-29.635-19.506-42.915-26.514-20.154-10.636-33.749-14.858-45.88-14.858-19.205 0-35.535 9.834-47.1 26.596-3.424 4.958-5.867 9.294-8.82 15.586a276.654 276.654 0 01-5.36-3.562c-15.825-10.78-33.146-24.858-45.976-37.354-11.98-12.314-26.057-29.634-36.836-45.46a276.228 276.228 0 01-3.562-5.36c6.29-2.953 10.62-5.391 15.583-8.813 16.764-11.566 26.596-27.9 26.596-47.102 0-12.135-4.218-25.728-14.852-45.88-7.016-13.292-16.395-28.459-26.517-42.919-10.26-14.659-21.047-28.378-31.833-39.565C397.97 259.446 382.427 250 364.085 250zm0 55.556c-.397 0 3.389 2.3 11.342 10.548 8.416 8.728 17.57 20.373 26.313 32.862 8.847 12.64 17.017 25.85 22.897 36.991 6.704 12.704 8.395 18.06 8.43 19.887l-.003-.054c-.026-.266-.269-.11-2.582 1.486-3.283 2.264-7.18 4.169-16.685 8.28-3.136 1.356-3.136 1.356-7.034 3.108-1.928.891-1.928.891-3.926 1.858-4.592 2.255-8.087 4.251-11.327 6.834l-13.77 10.972 4.047 17.135c2.396 10.15 9.902 24.789 22.302 42.993 12.569 18.455 28.686 38.284 43.471 53.465 15.698 15.302 35.526 31.419 53.982 43.99 18.211 12.403 32.848 19.908 42.996 22.303l17.13 4.043 10.972-13.764c2.582-3.24 4.578-6.734 6.832-11.322.97-2.004.97-2.004 1.864-3.937.904-2.01 1.341-2.982 1.739-3.882l.148-.336c.32-.73.65-1.49 1.217-2.802 4.107-9.505 6.015-13.407 8.277-16.683 1.71-2.477 1.777-2.595 1.436-2.6 1.826.035 7.185 1.728 19.894 8.435 11.13 5.874 24.338 14.041 36.989 22.895 12.488 8.742 24.132 17.897 32.864 26.316 8.244 7.95 10.544 11.735 10.544 11.338 0 4.51-15.064 20.957-30.731 32.709-19.573 14.681-42.22 25.82-59.165 25.82-17.824 0-46.276-11.987-77.123-31-33.035-20.357-68.956-48.78-100.836-79.846l-10.44-10.443c-30.813-31.624-59.236-67.545-79.593-100.58-19.017-30.863-31-59.303-31-77.126 0-16.94 11.137-39.581 25.822-59.164 11.75-15.665 28.196-30.73 32.707-30.73z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPhoneCircle = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgPhoneCircle" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgPhoneCircle;
