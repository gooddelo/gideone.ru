// Import your CSS module
import cn from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import { Children, type FC, type ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './DragBlock.module.scss';

// Import classnames l

// const blocks = [1, 2, 3, 4, 5];

interface IProps {
  children: ReactNode;
  className?: string;
  classNameSlide?: string;
  id?: string;
}

const DragBlock: FC<IProps> = ({ children, className, classNameSlide, id }) => {
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
    [emblaApi],
  );

  return (
    <div id={id} className={cn(styles.carousel_container, className)}>
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
              className={cn(styles.embla__slide, classNameSlide, {
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

DragBlock.displayName = 'UI drag block';

export default DragBlock;
