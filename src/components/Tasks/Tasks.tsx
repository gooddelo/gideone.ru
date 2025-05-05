import { type FunctionComponent } from 'react';
import styles from './Tasks.module.scss';
import { useTranslation } from 'react-i18next';

interface ITask {
  task: string;
  img: string;
  alt: string;
}

const Tasks: FunctionComponent = () => {
  const { t } = useTranslation('tasks');

  const tasks = t('tasks', { returnObjects: true }) as ITask[];
  return (
    <section className={styles.tasks} id={t('nav_blocks.tasks', { ns: 'common' })}>
      {Array.isArray(tasks) &&
        tasks.map((task, index) => (
          <div className={styles.task} key={'task #' + index}>
            <img src={task.img} alt={task.alt} width={70} height={68} />
            <span>{task.task}</span>
          </div>
        ))}
    </section>
  );
};

Tasks.displayName = 'Tasks section';

export default Tasks;
