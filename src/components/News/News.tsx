'use client';

import { FC, useEffect, useRef, useState } from 'react';
import styles from './News.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { I18nConfig } from '@/i18n';

interface NewsItem {
  date: string;
  text: string | { item: string }[];
  img: string;
}

const News: FC<I18nConfig> = ({ locale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollClass, setScrollClass] = useState<
    'left' | 'left_scrolling' | 'right' | 'right_scrolling' | null
  >('left');
  const prevScrollLeft = useRef(0);
  const { t } = useTranslation('news', { lng: locale });
  const news = t('news', { returnObjects: true }) as NewsItem[];

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Scroll direction
      if (currentScrollLeft > prevScrollLeft.current) {
        setScrollClass('right_scrolling'); // user is moving right (content scrolls left)
      } else if (currentScrollLeft < prevScrollLeft.current) {
        setScrollClass('left_scrolling'); // user is moving left (content scrolls right)
      }

      // Snap to edge (optional)
      if (currentScrollLeft <= 0) {
        setScrollClass('left');
      } else if (currentScrollLeft >= maxScrollLeft - 1) {
        setScrollClass('right');
      }

      prevScrollLeft.current = currentScrollLeft;
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={cn(styles.news, {
        [styles.news__short]: news.length === 1,
        [styles.news__left]: scrollClass === 'left',
        [styles.news__right]: scrollClass === 'right',
        [styles.news__left_scrolling]: scrollClass === 'left_scrolling',
        [styles.news__right_scrolling]: scrollClass === 'right_scrolling',
      })}
      id='news'
    >
      <h2 className={styles.news__title}>{t('title')}</h2>
      <div className={cn(styles.news__blocks)} ref={containerRef} onMouseDown={handleMouseDown}>
        {Array.isArray(news) &&
          news.map((item, i) => (
            <div className={styles.block} key={'news from news' + i}>
              <div className={styles.block__info}>
                <span className={styles.block__date}>{item.date}</span>
                {Array.isArray(item.text) ? (
                  <ul className={styles.block__list}>
                    {item.text.map((el, i) => (
                      <li className={styles.block__list_item} key={'news from news' + i}>
                        {el.item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.block__paragraph}>{item.text}</p>
                )}
              </div>
              <Image
                className={styles.block__image}
                src={item.img}
                alt={'news' + i}
                width={505}
                height={200}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default News;
