import styles from "./index.module.scss";
import classNames from "classnames";
import Section from "components/Section";
import SectionItem from "components/Section/Item";
import { getLanguage } from "language/current";

interface IProps {
  className?: string;
}

export default function About({ className = "" }: IProps) {
  const language = getLanguage();

  return (
    <Section
      title={language.about.title}
      className={classNames({
        [styles.About]: true,
        [className]: true,
      })}
    >
      <SectionItem>
        {language.about.description.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </SectionItem>
    </Section>
  );
}
