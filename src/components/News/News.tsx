'use client';

import { FC, useRef } from 'react';
import styles from './News.module.scss';
import Image from 'next/image';

const News: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { t } = initTranslations(Locales.RU, ['news']);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (!containerRef.current) return;
    const startX = e.pageX - containerRef.current.offsetLeft;
    const scrollLeft = containerRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust multiplier for sensitivity
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      if (!containerRef.current) return;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      containerRef.current.style.cursor = 'grab';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    containerRef.current.style.cursor = 'grabbing';
  };

  return (
    <section className={styles.news}>
      <h2 className={styles.news__title}>title</h2>
      {/* TODO : add marquee here */}
      {/* <h2 className={styles.news__title}>{t('title')}</h2> */}
      <div className={styles.news__blocks} ref={containerRef} onMouseDown={handleMouseDown}>
        <div className={styles.block}>
          <div className={styles.block__info}>
            <span className={styles.block__date}>19 марта, 2025</span>
            <p className={styles.block__paragraph}>
              Мы выпустили новое обновление! v.2.1. Пофиксили баги и добавили новых фич. Теперь
              можно добавлять скрипты продаж из готовых шаблонов, редактировать их и экономить время
              на занесении данных.
            </p>
          </div>
          <Image
            className={styles.block__image}
            src='/img/news.png'
            alt='news'
            width={505}
            height={200}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.block__info}>
            <span className={styles.block__date}>19 марта, 2025</span>
            <ul className={styles.block__list}>
              <li className={styles.block__list_item}>
                Функция календаря теперь бесплатна для всех.
              </li>
              <li className={styles.block__list_item}>
                Теперь работает на нескольких устройствах.
              </li>
              <li className={styles.block__list_item}>
                Попробуйте нашу новую бесплатную пробную версию.
              </li>
              <li className={styles.block__list_item}>
                Выберите пожизненный, ежемесячный или годовой план
              </li>
              <li className={styles.block__list_item}>
                Покупки, совершенные до марта 2025 года, будут повышены до бессрочного плана.
              </li>
              <li className={styles.block__list_item}>Исправления ошибок.</li>
            </ul>
          </div>
          <Image
            className={styles.block__image}
            src='/img/news.png'
            alt='news'
            width={505}
            height={200}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.block__info}>
            <span className={styles.block__date}>19 марта, 2025</span>
            <p className={styles.block__paragraph}>
              Мы выпустили новое обновление! v.2.1. Пофиксили баги и добавили новых фич. Теперь
              можно добавлять скрипты продаж из готовых шаблонов, редактировать их и экономить время
              на занесении данных.
            </p>
          </div>
          <Image
            className={styles.block__image}
            src='/img/news.png'
            alt='news'
            width={505}
            height={200}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.block__info}>
            <span className={styles.block__date}>19 марта, 2025</span>
            <p className={styles.block__paragraph}>
              Мы выпустили новое обновление! v.2.1. Пофиксили баги и добавили новых фич. Теперь
              можно добавлять скрипты продаж из готовых шаблонов, редактировать их и экономить время
              на занесении данных.
            </p>
          </div>
          <Image
            className={styles.block__image}
            src='/img/news.png'
            alt='news'
            width={505}
            height={200}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.block__info}>
            <span className={styles.block__date}>19 марта, 2025</span>
            <p className={styles.block__paragraph}>
              Мы выпустили новое обновление! v.2.1. Пофиксили баги и добавили новых фич. Теперь
              можно добавлять скрипты продаж из готовых шаблонов, редактировать их и экономить время
              на занесении данных.
            </p>
          </div>
          <Image
            className={styles.block__image}
            src='/img/news.png'
            alt='news'
            width={505}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
