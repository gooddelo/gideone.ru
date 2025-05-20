import cn from 'classnames';
import {
  type FC,
  type ReactNode,
  type RefAttributes,
  type RefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '@/hooks';
import Icon from '../Icon';
import styles from './Modal.module.scss';

interface IProps extends RefAttributes<HTMLDivElement> {
  parentElement?: Element | DocumentFragment;
  children: ReactNode;
  onClose: () => void;
  exceptions?: RefObject<null | HTMLElement>[];
  className?: string;
  hideBtn?: boolean;
  // open: boolean;
}

const Modal: FC<IProps> = forwardRef<HTMLDivElement, IProps>(
  ({ parentElement, children, onClose, exceptions, className, hideBtn = false }, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const parent = useMemo(() => {
      if (parentElement) return parentElement;
      return mounted ? document.getElementById('root')! : null;
    }, [parentElement, mounted]);

    useImperativeHandle(ref, () => modalRef.current as HTMLDivElement);
    useClickOutside(modalRef, onClose, exceptions);

    if (!mounted || !parent) return null;

    return createPortal(
      <div className={cn(styles.modal__wrapper)}>
        <div ref={modalRef} className={cn(styles.modal, className)}>
          {hideBtn ? null : (
            <button className={styles.close_btn} onClick={onClose}>
              <Icon icon="dismiss" size={24} />
            </button>
          )}
          {children}
        </div>
      </div>,
      parent,
    );
  },
);

Modal.displayName = 'UI Modal';

export default Modal;
