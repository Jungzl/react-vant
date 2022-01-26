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
    <g fillRule="evenodd">
      <path d="M750 527.778v138.888h83.333V527.778c30.683 0 55.556 24.873 55.556 55.555v138.89H694.444v-138.89H611.11v305.556c-30.682 0-55.555-24.873-55.555-55.556V528.778a1 1 0 011-1H750zm-41.667 250c23.012 0 41.667 18.655 41.667 41.666 0 23.012-18.655 41.667-41.667 41.667s-41.666-18.655-41.666-41.667c0-23.011 18.654-41.666 41.666-41.666zm138.89 0c23.011 0 41.666 18.655 41.666 41.666 0 23.012-18.655 41.667-41.667 41.667s-41.666-18.655-41.666-41.667c0-23.011 18.654-41.666 41.666-41.666z" />
      <path
        d="M166.667 166.667v250h250v-250h-250zm250 361.11c30.682 0 55.555 24.874 55.555 55.556v250c0 30.683-24.873 55.556-55.555 55.556h-250c-30.683 0-55.556-24.873-55.556-55.556v-250c0-30.682 24.873-55.555 55.556-55.555h250zm0 55.556h-250v250h250v-250zm0-472.222c30.682 0 55.555 24.873 55.555 55.556v250c0 30.682-24.873 55.555-55.555 55.555h-250c-30.683 0-55.556-24.873-55.556-55.555v-250c0-30.683 24.873-55.556 55.556-55.556h250zm416.666 0c30.683 0 55.556 24.873 55.556 55.556v250c0 30.682-24.873 55.555-55.556 55.555h-250c-30.682 0-55.555-24.873-55.555-55.555v-250c0-30.683 24.873-55.556 55.555-55.556h250zm0 55.556h-250v250h250v-250z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgQr = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgQr" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgQr;
