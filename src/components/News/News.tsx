import cn from 'classnames';
import { type FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DragBlock } from '@/components/UI';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './News.module.scss';

export interface NewsItem {
  date: string;
  text: string | { item: string }[];
  img: string;
}

// TODO slight drag issue with after and before pseudo elements

const News: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollClass, setScrollClass] = useState<
    'left' | 'left_scrolling' | 'right' | 'right_scrolling' | null
  >('left');
  const prevScrollLeft = useRef(0);
  const { t } = useTranslation<Namespaces>('news');
  const news = t('news', { returnObjects: true }) as NewsItem[];
  const [titleInView, setTitleInView] = useState(false);
  const [newsInView, setNewsInView] = useState(false);

  const sectionId = t('nav_blocks.news', { ns: 'common' });
  const titleId = sectionId + '-title';
  const newsId = sectionId + '-blocks';

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
      const width = container.clientWidth;
      const currentScrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - width;

      // Scroll direction
      if (currentScrollLeft > prevScrollLeft.current) {
        setScrollClass('right_scrolling'); // user is moving right (content scrolls left)
      } else if (currentScrollLeft < prevScrollLeft.current) {
        setScrollClass('left_scrolling'); // user is moving left (content scrolls right)
      }

      // Snap to edge (optional)
      if (currentScrollLeft <= 0 && width > 1280) {
        setScrollClass('left');
      } else if (currentScrollLeft >= maxScrollLeft - 1 && width > 1280) {
        setScrollClass('right');
      }

      prevScrollLeft.current = currentScrollLeft;
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial

    return () => container.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const news = document.querySelector('#' + newsId);
    if (!title || !news) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const newsObserver = createObserver({
      target: news,
      onEnter: () => setNewsInView(true),
    });

    return () => {
      titleObserver.disconnect();
      newsObserver.disconnect();
    };
  });

  return (
    <section
      className={cn(styles.news, {
        [styles.news__short]: news.length === 1,
        [styles.news__left]: scrollClass === 'left',
        [styles.news__right]: scrollClass === 'right',
        [styles.news__left_scrolling]: scrollClass === 'left_scrolling',
        [styles.news__right_scrolling]: scrollClass === 'right_scrolling',
      })}
      id={sectionId}
    >
      <h2
        id={titleId}
        className={cn(styles.news__title, { [styles.news__title_active]: titleInView })}
      >
        {t('title')}
      </h2>
      <div
        id={newsId}
        className={cn(styles.news__blocks, { [styles.news__blocks_active]: newsInView })}
        ref={containerRef}
        onMouseDown={handleMouseDown}
      >
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
              <img
                className={styles.block__image}
                src={item.img}
                alt={'news' + i}
                width={505}
                height={200}
              />
            </div>
          ))}
      </div>

      <DragBlock className={cn(styles.drag_block)}>
        {Array.isArray(news) &&
          news.map((item, i) => (
            <div className={styles.block} key={'news-from-news-' + i}>
              <div className={styles.block__info}>
                <span className={styles.block__date}>{item.date}</span>
                {Array.isArray(item.text) ? (
                  <ul className={styles.block__list}>
                    {item.text.map((el, j) => (
                      <li className={styles.block__list_item} key={'news-list-item-' + j}>
                        {el.item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.block__paragraph}>{item.text}</p>
                )}
              </div>
              <img
                className={styles.block__image}
                src={item.img}
                alt={'news' + i}
                width={505}
                height={200}
              />
            </div>
          ))}
      </DragBlock>
    </section>
  );
};

News.displayName = 'News section';

export default News;
