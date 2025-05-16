import cn from 'classnames';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  RefAttributes,
} from 'react';
import { type FieldError } from 'react-hook-form';
import { Icon } from '@/components/UI';
import type { InputLabelPosition, InputSizes } from '@/types';
import styles from './Input.module.scss';

export type TInputProps = {
  label?: string;
  labelPosition?: InputLabelPosition;
  disabled?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  error?: FieldError | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onEnterPress?: () => void;
  onClick?: () => void;
  onInput?: FormEventHandler<HTMLInputElement>;
  min?: string | number;
  max?: string | number;
  size?: InputSizes;
  clear?: boolean;
  initialValue?: string;
} & RefAttributes<HTMLInputElement>;

const Input: FunctionComponent<TInputProps> = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      label,
      disabled = false,
      labelPosition = 'in',
      className,
      type,
      error,
      onChange,
      onEnterPress,
      onClick,
      onInput,
      placeholder,
      min,
      max,
      initialValue,
      size = 'l',
      clear = true,
      ...props
    },
    ref,
  ) => {
    const [hasValue, setHasValue] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter' && onEnterPress) onEnterPress();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      setHasValue(!!e.target.value.length);
    };

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      if (onInput) onInput(e);
    };

    const handleClear = () => {
      if (!inputRef.current) return;
      inputRef.current.value = '';
      setHasValue(false);
    };

    return (
      <>
        <label
          className={cn(
            styles.wrapper,
            styles[`wrapper_size_${size}`],
            {
              [styles.has_value]: hasValue,
              [styles.wrapper_disabled]: disabled,
              [styles.wrapper_error]: error,
              [styles.wrapper_readonly]: disabled,
            },
            className,
          )}
          onClick={onClick}
        >
          {size === 's' && labelPosition === 'in'
            ? null
            : label && (
                <span className={cn(styles.label, styles[`label_position_${labelPosition}`])}>
                  {label}
                </span>
              )}

          <input
            className={cn(styles.input, styles[`input_size_${size}`], {
              [styles.input_position_center]: labelPosition === 'out',
              [styles.input_position_bottom]: labelPosition === 'in',
            })}
            type={type}
            disabled={disabled}
            placeholder={labelPosition === 'out' ? placeholder : undefined}
            // ref={combinedRef}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onInput={handleInput}
            min={min}
            max={max}
            defaultValue={initialValue}
            {...props}
          />

          {clear ? (
            <button className={styles.btn__clear} onClick={handleClear}>
              <Icon icon="dismiss" />
            </button>
          ) : null}
        </label>
        {error && <span className={styles.error}>{error.message}</span>}
      </>
    );
  },
);

Input.displayName = 'Input';
export default Input;
