import * as React from 'react';
// import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    // const Comp = asChild ? Slot : 'button';
    
    const classes = [
      styles.button,
      styles[variant],
      styles[`size-${size}`],
      className
    ].filter(Boolean).join(' ');

    return (
      <button className={classes} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
