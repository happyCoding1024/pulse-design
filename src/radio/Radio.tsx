import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface radioProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    style?: CSSProperties;
}

export const Radio = (props: radioProps) => {
  const {className, type = 'normal', size = 'medium', children, style, ...others} = props;

  const cls = classNames({
    'ant-btn': true,
    [`ant-btn-${size}`]: size,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className
  });
  return <span {...others} className={cls} style={style} >{children}</span>;
};