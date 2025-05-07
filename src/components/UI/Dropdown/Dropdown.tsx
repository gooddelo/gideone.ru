import cn from 'classnames';
import {
  type CSSProperties,
  type FunctionComponent,
  type ReactNode,
  type RefAttributes,
  forwardRef,
} from 'react';
import styles from './Dropdown.module.scss';

interface IProps extends RefAttributes<HTMLDivElement> {
  open: boolean;
  className?: string;
  classNameChildren?: string;
  children: ReactNode;
  style?: CSSProperties;
}

const Dropdown: FunctionComponent<IProps> = forwardRef(
  ({ open, className, children, classNameChildren, style }, ref) => {
    return (
      <div
        className={cn([
          styles.dropdown,
          {
            [styles.dropdown_open]: open,
          },
          className,
        ])}
        ref={ref}
      >
        <div className={cn([styles.dropdown__content, classNameChildren])} style={style}>
          {children}
        </div>
      </div>
    );
  },
);

Dropdown.displayName = 'UI Dropdown';

export default Dropdown;
