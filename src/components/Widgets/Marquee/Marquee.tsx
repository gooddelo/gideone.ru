import type { FC } from 'react';
import MarqueeComponent from 'react-fast-marquee';
import styles from './Marquee.module.scss';

const Marquee: FC = () => {
  return (
    <MarqueeComponent className={styles.marquee} speed={10} gradient={false} loop={0}>
      <img src="/img/logotype-yeti.png" alt="banner" width={72} height={57} />
      <img src="/img/logotype-ladya.png" alt="banner" width={123.972} height={39.895} />
      <img src="/img/logotype-mosaic.png" alt="banner" width={110} height={57} />
      <img src="/img/logotype-expert.png" alt="banner" width={158} height={35} />
      <img src="/img/logotype-yeti.png" alt="banner" width={72} height={57} />
      <img src="/img/logotype-ladya.png" alt="banner" width={123.972} height={39.895} />
      <img src="/img/logotype-mosaic.png" alt="banner" width={110} height={57} />
      <img src="/img/logotype-expert.png" alt="banner" width={158} height={35} />
      <img src="/img/logotype-yeti.png" alt="banner" width={72} height={57} />
      <img src="/img/logotype-ladya.png" alt="banner" width={123.972} height={39.895} />
      <img src="/img/logotype-mosaic.png" alt="banner" width={110} height={57} />
      <img src="/img/logotype-expert.png" alt="banner" width={158} height={35} />
    </MarqueeComponent>
  );
};

Marquee.displayName = 'Marquee section';

export default Marquee;
