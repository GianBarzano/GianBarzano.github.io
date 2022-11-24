import styles from "./index.module.scss";
import classNames from "classnames";
import Section from "components/Section";
import SectionItem from "components/Section/Item";
import { getLanguage } from "language/current";

interface IProps {
  className?: string;
}

export default function Grades({ className = "" }: IProps) {
  const language = getLanguage();

  return (
    <Section
      title={language.grades.title}
      className={classNames({
        [styles.Grades]: true,
        [className]: true,
      })}
    >
      {language.grades.list.map((grade, index) => (
        <SectionItem title={grade.institution} className={styles.experience} key={index}>
          <p>
            {`${grade.type}, ${grade.course}`}
            <span className={styles.grade__duration}>
              {` - ${grade.start} - ${grade.end}`}
            </span>
          </p>
        </SectionItem>
      ))}
    </Section>
  );
}
