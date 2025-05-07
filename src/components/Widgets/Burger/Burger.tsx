import { type FC, useState } from 'react';
import { Icon } from '@/components/UI';
import { Menu } from '@/components/Widgets';
import styles from './Burger.module.scss';

const Burger: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <>
      <button className={styles.burger} onClick={() => setMenuIsOpen((prev) => !prev)}>
        <Icon icon="burger" />
      </button>
      <Menu open={menuIsOpen} setOpen={setMenuIsOpen} />
    </>
  );
};

Burger.displayName = 'Burger';

export default Burger;
