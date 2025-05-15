import cn from 'classnames';
import { type FC, useState } from 'react';
import Dropdown from '../Dropdown';
import Icon from '../Icon';
import styles from './Question.module.scss';

interface IProps {
  question: string;
  answer: string;
}

const Question: FC<IProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn(styles.question)} onClick={() => setOpen(!open)}>
      <div className={cn(styles.question__head, {})}>
        {question}{' '}
        <button className={styles.question__btn}>
          <Icon
            icon="chevron-down"
            size={24}
            className={cn(styles.icon, {
              [styles.icon_open]: open,
            })}
          />
        </button>
      </div>

      <Dropdown open={open} className={styles.question__answer}>
        <p>{answer}</p>
      </Dropdown>
    </div>
  );
};

export default Question;
