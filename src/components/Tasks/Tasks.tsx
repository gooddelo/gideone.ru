import cn from 'classnames';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { Namespaces } from '@/types';
import styles from './Tasks.module.scss';

interface ITask {
  task: string;
  img: string;
  alt: string;
}

interface IProps {
  className?: string;
}

const Tasks: FC<IProps> = ({ className }) => {
  const { t } = useTranslation<Namespaces>('tasks');

  const tasks = t('tasks', { returnObjects: true }) as ITask[];
  return (
    <div className={cn(styles.tasks, className)} id={t('nav_blocks.tasks', { ns: 'common' })}>
      {Array.isArray(tasks) &&
        tasks.map((task, index) => (
          <div className={styles.task} key={'task #' + index}>
            <div>
              <img src={task.img} alt={task.alt} width={70} height={68} />
            </div>
            <span>{task.task}</span>
          </div>
        ))}
    </div>
  );
};

Tasks.displayName = 'Tasks section';

export default Tasks;
