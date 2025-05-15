import cn from 'classnames';
import { type FC } from 'react';
import styles from './VideoLoader.module.scss';

// ,
//   "loading-video": "/animations/loading-animation.mp4"

interface IProps {
  fadeOut?: boolean;
}
const Loading: FC<IProps> = ({ fadeOut }) => {
  // console.log('Video loaded at: ' + Date.now());
  return (
    <>
      {/* <div className={styles.container}> */}
      <video
        autoPlay={false}
        loop
        muted
        playsInline={false}
        className={cn(styles.video, { [styles.fadeOut]: fadeOut })}
        // src="/animations/loading-animation.mp4"
      >
        <source src="/animations/loading-animation.mp4" type="video/mp4" />
      </video>
      {/* </div> */}
    </>
  );
};

export default Loading;
