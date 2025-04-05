import { FC } from "react";
import styles from "./HowGideoneWorks.module.scss";
import { Locales } from "@/i18n/i18nConfig";
import { getServerTranslation } from "@/i18n";
import howWorksEn from "../../../public/img/bot-message-en.png";
import howWorksRu from "../../../public/img/bot-message-ru.png";
import Image from "next/image";

interface IProps {
  locale: Locales;
}

const HowGideoneWorks: FC<IProps> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ["howGideoneWorks"]);

  return (
    <section id="how-it-works" className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>{t("title")}</h2>

        <div className={styles.content}>
          <div className={styles.content__line}>
            <svg
              width="3"
              height="154"
              viewBox="0 0 3 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.line}
            >
              <line
                x1="1.5"
                y1="-4.37114e-08"
                x2="1.50001"
                y2="154"
                stroke="url(#paint0_linear_9213_53776)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9213_53776"
                  x1="0"
                  y1="2.18557e-08"
                  x2="6.73155e-06"
                  y2="154"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5A44FB" />
                  <stop offset="1" stopColor="#5A44FB" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="3"
              height="377"
              viewBox="0 0 3 377"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.line}
            >
              <path
                d="M1.5 1L1.50002 376"
                stroke="white"
                strokeOpacity="0.05"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          <ul className={styles.list}>
            <li className={styles.item}>
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.circle}
              >
                <circle cx="8.5" cy="13" r="8" fill="#5A44FB" />
              </svg>
              <span className={styles.text}>{t("point1")}</span>
            </li>

            <li className={styles.item}>
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.circle}
              >
                <circle cx="8.5" cy="13" r="8" fill="#5A44FB" />
              </svg>
              <span className={styles.text}>{t("point2")}</span>
            </li>

            <li className={styles.item}>
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.circle}
              >
                <circle cx="8.5" cy="13" r="8" fill="#5A44FB" />
              </svg>
              <span className={styles.text}>{t("point3")}</span>
            </li>
          </ul>
        </div>
      </div>
      <Image
        className={styles.image}
        src={locale === Locales.RU ? howWorksRu : howWorksEn}
        alt={"how-gideone-works"}
        width={902}
        height={838}
      />
    </section>
  );
};

export default HowGideoneWorks;
