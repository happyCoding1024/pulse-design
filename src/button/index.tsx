import React, { ReactNode } from 'react';
import classNames from 'classnames';


interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>((props: buttonProps, ref) => {
  const { children } = props;

  const cls = classNames({
    'ant-btn': true,
  })
  return <button 
    ref={ref} className={cls}>{children}</button>;
})

export default Button;