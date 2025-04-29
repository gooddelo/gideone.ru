'use client';
import { I18nConfig } from '@/i18n';
import '@/i18n/client';

import React, { FC, useState } from 'react';
import styles from './Burger.module.scss';
import { Icon } from '@/components/UI';
import Menu from '../Menu';

const Burger: FC<I18nConfig> = ({ locale }) => {
  // const {} = useTranslation('header', { lng: locale });
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  return (
    <>
      <button className={styles.burger} onClick={() => setMenuIsOpen((prev) => !prev)}>
        <Icon icon='burger' />
      </button>
      <Menu locale={locale} open={menuIsOpen} setOpen={setMenuIsOpen} />
    </>
  );
};

export default Burger;
