'use client';
import { Children, FC, ReactNode, useCallback, useEffect, useState } from 'react';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './DragBlock.module.scss'; // Import your CSS module
import cn from 'classnames'; // Import classnames library for conditional class names
import { NewsItem } from '@/components/News/News';
import { useTranslation } from 'react-i18next';

// const blocks = [1, 2, 3, 4, 5];

interface IProps {
  children: ReactNode;
  className?: string;
}

const DragBlock: FC<IProps> = ({ children, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // <-- infinite loop
    align: 'center', // Center active slide
    skipSnaps: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className={cn(styles.carousel_container, className)}>
      <div className={styles.pagination}>
        {Children.map(children, (_, index) => (
          <button
            className={cn(styles.pagination__btn, {
              [styles.pagination__btn_active]: currentIndex === index,
            })}
            key={'pagination btn' + index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {Children.map(children, (child, index) => (
            <div
              className={cn(styles.embla__slide, {
                [styles.embla__slide_active]: currentIndex === index,
              })}
              key={index}
            >
              <div className={styles.slide_content}>{child}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragBlock;
