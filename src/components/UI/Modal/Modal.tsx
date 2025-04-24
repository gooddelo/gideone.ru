'use client';
import { useClickOutside } from '@/hooks';
import React, {
  FC,
  forwardRef,
  ReactNode,
  RefAttributes,
  RefObject,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import cn from 'classnames';

interface IProps extends RefAttributes<HTMLDivElement> {
  parentElement?: Element | DocumentFragment;
  children: ReactNode;
  onClose: () => void;
  exceptions?: RefObject<null | HTMLElement>[];
  className?: string;
}

const Modal: FC<IProps> = forwardRef<HTMLDivElement, IProps>(
  ({ parentElement, children, onClose, exceptions, className }, ref) => {
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
      <div className={styles.modal__wrapper}>
        <div ref={modalRef} className={cn(styles.modal, className)}>
          {children}
        </div>
      </div>,
      parent
    );
  }
);

Modal.displayName = 'UI Modal';

export default Modal;
