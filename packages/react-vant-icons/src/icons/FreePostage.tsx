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
      d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zm0 55.555c-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889 214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889zM393.991 289.008c13.808 0 25 11.193 25 25v59.724h59.6c39.96 0 72.523 31.065 72.523 69.158v167.265c0 38.074-32.569 69.132-72.523 69.132h-160.51c-39.934 0-72.523-31.065-72.523-69.132V442.89c0-38.087 32.582-69.158 72.522-69.158h50.91l.001-59.724c0-13.669 10.97-24.776 24.587-24.996zm299.8 84.724c36.866 0 66.3 31.229 66.3 68.8v80.45c0 13.807-11.193 25-25 25h-44.95c-13.807 0-25-11.193-25-25s11.193-25 25-25h19.95v-55.45c0-10.597-7.732-18.8-16.3-18.8h-48.575c-8.577 0-16.325 8.213-16.325 18.8v182.775c0 13.807-11.193 25-25 25s-25-11.193-25-25V442.532c0-37.57 29.46-68.8 66.325-68.8zm-324.8 173.796h-67.878v62.627c0 6.774 7.137 13.577 16.967 13.577h50.91v-76.204zm126.567 0H418.99v76.204h59.6c9.845 0 16.967-6.79 16.967-13.577v-62.627zM368.99 429.287h-50.91c-9.833 0-16.967 6.804-16.967 13.603l-.001 54.638h67.878v-68.241zm109.6 0h-59.6v68.24h76.567V442.89c0-6.811-7.12-13.603-16.967-13.603z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgFreePostage = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="SvgFreePostage" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default SvgFreePostage;
