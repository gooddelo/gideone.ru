import cn from 'classnames';
import { type ChangeEvent, type FunctionComponent, type MouseEvent, forwardRef } from 'react';
import { Icon } from '@/components/UI';
import styles from './InputCheck.module.scss';

type TVariants = 'checkbox' | 'radio' | 'switch';
type TSizes = 'small' | 'medium';

export type InputProps = {
  label?: string;
  labelPosition?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
  classNameLabel?: string;
  onClick?: (e?: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;

  variant?: TVariants;
  size?: TSizes;
};

const InputCheck: FunctionComponent<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelPosition = 'right',
      disabled,
      className,
      classNameLabel,
      checked,
      onChange,
      onClick,
      variant = 'checkbox',
      size = 'medium',
      ...props
    },
    ref,
  ) => {
    return (
      <label className={cn(styles.container, disabled && styles[`container__disabled`], className)}>
        {label && labelPosition === 'left' && (
          <span className={cn(styles.label, classNameLabel)}>{label}</span>
        )}
        {variant === 'checkbox' && (
          <>
            <input
              className={cn(styles.checkbox, styles[`checkbox__${size}`])}
              type={'checkbox'}
              disabled={disabled}
              ref={ref}
              onClick={onClick}
              checked={checked}
              onChange={onChange}
              {...props}
            />
            <div className={styles.checkmark}>
              <Icon icon="checkmark" className={styles.checkmark__icon} />
            </div>
          </>
        )}
        {variant === 'radio' && (
          <>
            <input
              className={cn(styles.radio, styles[`radio__${size}`])}
              type={'checkbox'}
              disabled={disabled}
              ref={ref}
              onClick={onClick}
              checked={checked}
              onChange={onChange}
              {...props}
            />
            <div className={styles.checkmark} />
          </>
        )}
        {variant === 'switch' && (
          <>
            <input
              className={cn(styles.switch, styles[`switch__${size}`])}
              type={'checkbox'}
              disabled={disabled}
              ref={ref}
              onClick={onClick}
              checked={checked}
              onChange={onChange}
              {...props}
            />
            <div className={styles.checkmark}>
              <Icon icon="checkmark" className={styles.checkmark__icon} />
            </div>
          </>
        )}
        {label && labelPosition === 'right' && (
          <span className={cn(styles.label, classNameLabel)}>{label}</span>
        )}
      </label>
    );
  },
);

InputCheck.displayName = ' UI InputCheck';
export default InputCheck;
