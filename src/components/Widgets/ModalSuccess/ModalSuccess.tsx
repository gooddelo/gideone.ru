import cn from 'classnames';
import { type FC } from 'react';
import { Icon } from '@/components/UI';
import styles from './ModalSuccess.module.scss';

interface IProps {
  title: string;
  text: string;

  onClose: () => void;
  className?: string;
}

const ModalSuccess: FC<IProps> = ({ text, title, onClose, className }) => {
  return (
    <div className={cn(styles.modal, className)}>
      <p className={styles.modal__title}>{title}</p>
      <p className={styles.modal__text}>{text}</p>
      <button onClick={onClose} className={styles.modal__btn}>
        <Icon icon="dismiss" size={24} />
      </button>
    </div>
  );
};

export default ModalSuccess;
