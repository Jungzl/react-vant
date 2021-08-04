import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export interface OverlayProps extends BaseTypeProps {
  /** 是否可见 */
  visible?: boolean;
  /** 设置`z-index` */
  zIndex?: number;
  /** 自定义样式 */
  customStyle?: CSSProperties;
  /** 动画时长，单位`ms` */
  duration?: number;
  /** 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 */
  lockScroll?: boolean;
  /** 点击时触发 */
  onClick?: () => void;
  /** 完全关闭后的回调 */
  afterClose?: () => void;
}