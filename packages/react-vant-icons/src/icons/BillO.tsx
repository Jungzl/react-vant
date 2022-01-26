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
      <path
        d="M388.889 111.111v55.556H611.11V111.11H388.89zm388.889 55.556H666.667c0 30.682-24.873 55.555-55.556 55.555H388.89c-30.683 0-55.556-24.873-55.556-55.555h-111.11v722.222h555.555V166.667zm55.555 0v722.222c0 30.682-24.873 55.555-55.555 55.555H222.222c-30.682 0-55.555-24.873-55.555-55.555V166.667c0-30.683 24.873-55.556 55.555-55.556h111.111c0-30.682 24.873-55.555 55.556-55.555H611.11c30.683 0 55.556 24.873 55.556 55.555h111.11c30.683 0 55.556 24.873 55.556 55.556z"
        fillRule="nonzero"
      />
      <path d="M500.494 443.253l38.79-38.79c10.848-10.848 28.436-10.848 39.283 0 10.848 10.848 10.848 28.436 0 39.283l-28.475 28.476h19.352c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778h-41.666v27.778h41.666c15.342 0 27.778 12.436 27.778 27.777 0 15.342-12.436 27.778-27.778 27.778h-41.666v27.778c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778V611.11h-41.666c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h41.666v-27.778h-41.666c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h20.34l-28.476-28.476c-10.848-10.847-10.848-28.435 0-39.283 10.848-10.848 28.435-10.848 39.283 0l38.79 38.79z" />
    </g>
  </svg>
);

const SvgBillO = React.forwardRef<HTMLSpanElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgBillO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgBillO;
