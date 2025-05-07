import cn from 'classnames';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { InputCheck } from '@/components/UI';
import styles from './PolicyAgreement.module.scss';

interface IProps {
  checked?: boolean;
  check?: () => void;
  className?: string;
  agreementVia: string;
}

const PolicyAgreement: FC<IProps> = ({ check, className, agreementVia }) => {
  const { t } = useTranslation('common');

  return (
    <div className={cn(styles.agreement, className)}>
      <InputCheck size="small" onClick={check} checked />
      <p>
        {t('agreement', {
          agreementVia: t(`agreementVia.${agreementVia}`),
        })}
        <a href={'/policy'} target="_blank">
          {t('policy')}
        </a>
        {t('agreement_2')}
      </p>
    </div>
  );
};

PolicyAgreement.displayName = 'Policy agreement';

export default PolicyAgreement;
