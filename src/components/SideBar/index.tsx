import classNames from "classnames";
import Section from "components/Section";
import styles from "./index.module.scss";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { getLanguage } from "language/current";

interface IProps {
  className?: string;
}

export default function SideBar({ className = "" }: IProps) {
  const language = getLanguage();

  return (
    <aside
      className={classNames({
        [styles.SideBar]: true,
        [className]: true,
      })}
    >
      <div className={styles.Container}>
        <Section
          title={language.contacts.title}
          className={classNames({
            [styles.contacts]: true,
          })}
        >
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gian-barzano-1815a549"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} />
                <h3>Linkedin</h3>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5521979343180?text=Gostaria%20de%20agendar%20uma%20conversa"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={20} />
                <h3>{language.contacts.cellphone}</h3>
              </a>
            </li>
            <li>
              <a href="mailto:gianbarzano@gmail.com?subject=Proposta de trabalho&body=Olá, Gian! Gostaria de conversar sobre uma proposta de trabalho, qual o melhor horário para entrar em contato?">
                <FaEnvelope size={20} />
                <h3>E-mail</h3>
              </a>
            </li>
          </ul>
        </Section>
        <Section
          title={language.skills.title}
          className={classNames({
            [styles.skills]: true,
          })}
        >
          <ul>
            {language.skills.list.map((skill, index) => (
              <li key={index}>
                <h3>{skill.description}</h3>
              </li>
            ))}
          </ul>
        </Section>
        <Section
          title={language.languages.title}
          className={classNames({
            [styles.languages]: true,
          })}
        >
          <ul>
            {language.languages.list.map((languageItem, index) => (
              <li key={index}>
                <h3>{languageItem}</h3>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </aside>
  );
}
