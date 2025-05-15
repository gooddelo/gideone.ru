import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createObserver } from '@/utils';
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
  const [tasksInView, setTasksInView] = useState(false);

  const sectionId = t('nav_blocks.tasks', { ns: 'common' }) + '-section';
  // const contentId = sectionId + '-content';
  useEffect(() => {
    const tasks = document.querySelector('#' + sectionId);
    if (!tasks) return;
    console.log(tasks);
    const tasksObserver = createObserver({
      target: tasks,
      onEnter: () => {
        setTasksInView(true);
        console.warn('i can see task');
      },
    });

    return () => {
      tasksObserver.disconnect();
    };
  });

  return (
    <div
      id={sectionId}
      className={cn(styles.tasks, { [styles.tasks__active]: tasksInView }, className)}
    >
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
