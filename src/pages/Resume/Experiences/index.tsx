import styles from "./index.module.scss";
import classNames from "classnames";
import Section from "components/Section";
import SectionItem from "components/Section/Item";
import { getLanguage } from "language/current";

interface IProps {
  className?: string;
}

export default function Experiences({ className = "" }: IProps) {
  const language = getLanguage();

  return (
    <Section
      title={language.experiences.title}
      className={classNames({
        [styles.Experiences]: true,
        [className]: true,
      })}
    >
      {language.experiences.list.map((experience, index) => (
        <SectionItem title={experience.company} className={styles.experience} key={index}>
          <p>
            {experience.role}
            <span className={styles.experience__duration}>
              {` - ${experience.time}`}
            </span>
          </p>
        </SectionItem>
      ))}
    </Section>
  );
}
