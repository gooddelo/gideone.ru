import cn from 'classnames';
import type { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { DragBlock } from '@/components/UI';
import styles from './AnalyticsSales.module.scss';

const AnalyticsSales: FC = () => {
  const { t } = useTranslation('analytics_and_sales');

  if (t('analytics.img_1').startsWith('/'))
    return (
      <DragBlock className={cn(styles.drag_block)}>
        <div className={cn(styles.block, styles.first)}>
          <h4 className={cn(styles.block__title)}>
            <Trans
              i18nKey="analytics.name"
              t={t}
              components={{
                span: <span className={styles.highlight} />,
              }}
            />
          </h4>
          <p className={styles.block__description}>{t('analytics.description')}</p>
          <div className={styles.first__images}>
            {/* {t('analytics.img_1').startsWith('/') && ( */}
            <img src={t('analytics.img_1')} width={836} height={976} alt={t('analytics.name')} />
            {/* )} */}
            <img
              src={t('analytics.img_2') || '/img/sales-2.png'}
              width={1008}
              height={976}
              alt={t('analytics.name')}
            />
          </div>
        </div>

        <div className={cn(styles.block, styles.second)}>
          <h4 className={cn(styles.block__title)}>
            <Trans
              i18nKey="education.name"
              t={t}
              components={{
                span: <span className={styles.highlight} />,
              }}
            />
          </h4>
          <p className={styles.block__description}>{t('education.description')}</p>
          <div className={styles.second__images}>
            <img src={t('education.img_1')} width={2116} height={800} alt={t('education.name')} />
          </div>
        </div>

        <div className={cn(styles.block, styles.third)}>
          <h4 className={cn(styles.block__title)}>
            <Trans
              i18nKey="dashboards.name"
              t={t}
              components={{
                span: <span className={styles.highlight} />,
              }}
            />
          </h4>
          <p className={styles.block__description}>{t('dashboards.description')}</p>
          <div className={styles.third__images}>
            <img src={t('dashboards.img_1')} width={1144} height={425} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_2')} width={1616} height={425} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_3')} width={1844} height={425} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_4')} width={1876} height={420} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_5')} width={1140} height={420} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_6')} width={1568} height={420} alt={t('dashboards.name')} />
          </div>
        </div>

        <div className={cn(styles.block, styles.fourth)}>
          <h4 className={cn(styles.block__title)}>
            <Trans
              i18nKey="items.1.name"
              t={t}
              components={{
                span: <span className={styles.highlight} />,
              }}
            />
          </h4>
          <p className={styles.block__description}>{t('items.1.description')}</p>
          <img
            className={cn(styles.fourth__img)}
            src={t('items.1.img-1')}
            width={1600}
            height={928}
            alt=""
          />
          <img
            className={cn(styles.fourth__img)}
            src={t('items.1.img-2')}
            width={1666}
            height={928}
            alt=""
          />
        </div>

        <div className={cn(styles.block, styles.fifth)}>
          <div>
            <h4 className={styles.block__title}>
              <Trans
                i18nKey="items.3.name"
                t={t}
                components={{
                  span: <span className={styles.highlight} />,
                }}
              />
            </h4>
            <p className={styles.block__description}>{t('items.3.description')}</p>
          </div>
          <img
            className={cn(styles.fifth__img)}
            src={t('items.3.img-1')}
            width={452}
            height={928}
            alt=""
          />
        </div>

        <div className={cn(styles.block, styles.sixth)}>
          <div className={styles.sixth__text}>
            <h4 className={styles.block__title}>
              <Trans
                i18nKey="items.2.name"
                t={t}
                components={{
                  span: <span className={styles.highlight} />,
                }}
              />
            </h4>
            <p className={styles.block__description}>{t('items.2.description')}</p>
          </div>
          <img
            className={cn(styles.sixth__img)}
            src={t('items.2.img-1')}
            width={2120}
            height={240}
            alt=""
          />
        </div>

        <div className={cn(styles.block, styles.seventh)}>
          <h4 className={styles.block__title}>
            <Trans
              i18nKey="items.4.name"
              t={t}
              components={{
                span: <span className={styles.highlight} />,
              }}
            />
          </h4>
          <p className={styles.block__description}>{t('items.4.description')}</p>
          <img
            className={cn(styles.seventh__img)}
            src={t('items.4.img-1')}
            width={2120}
            height={1152}
            alt=""
          />
        </div>
      </DragBlock>
    );
};

AnalyticsSales.displayName = 'Analytics and sales section (for tablet)';

export default AnalyticsSales;
