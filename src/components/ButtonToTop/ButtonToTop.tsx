import { Icon } from '@/components/UI';
import { useEffect, useState, type FC } from 'react';
import styles from './ButtonToTop.module.scss';
import cn from 'classnames';

const ButtonToTop: FC = () => {
  const [inView, setInView] = useState<boolean>(false);
  const [inFooter, setInFooter] = useState<boolean>(false);

  useEffect(() => {
    const target = document.querySelector('#banner-button');
    const footer = document.querySelector('#footer');

    if (!target || !footer) return;

    // Observer for banner-button
    const targetObserver = new IntersectionObserver(
      ([entry]) => {
        setInView(!entry.isIntersecting);
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    // Observer for footer
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setInFooter(entry.isIntersecting);
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    targetObserver.observe(target);
    footerObserver.observe(footer);

    return () => {
      targetObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const goTop = () => {
    if (!window) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional for smooth scroll
    });
  };

  return (
    <button
      onClick={goTop}
      className={cn(styles.button, inView && styles.button_shown, inFooter && styles.button_footer)}
    >
      <Icon icon='arrow-up' />
    </button>
  );
};

ButtonToTop.displayName = 'Button to go to the top';

export default ButtonToTop;
