import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>Header</h2>
      </div>
    </header>
  );
};

export default Header; 