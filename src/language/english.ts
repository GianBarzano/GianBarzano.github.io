import { ILanguage } from "./language";

export const english: ILanguage = {
  header: {
    subtitle: "Development of Systems",
		callButton: {
			long: "Contact me",
			short: "Contact me"
		},
  },
  about: {
    title: "About",
    description: [
      "Hi, I'm Gian Barzano and I have worked developing systems within Front-end and Back-end layers since 2015",
      "I love to work with development and I'm always willing to face new challenges to improve myself.",
    ],
  },
  experiences: {
    title: "Experiences",
    list: [
      {
        company: "Grupo Gera - current",
        role: "FullStack Web Developer",
        time: "11 months",
      },
      {
        company: "Nasajon Sistemas",
        role: "FullStack Web Developer with PHP, PostgreSQL and Angular",
        time: "3 years and 3 months",
      },
      {
        company: "Neosyx Desenvolvimento",
        role: "Delphi Developer with SQL Server",
        time: "1 year",
      },
      {
        company: "ASC Solutions",
        role: "Delphi Developer with MySQL and SQL Server",
        time: "2 years and 8 months",
      },
    ],
  },
  grades: {
    title: "Grades",
    list: [
      {
        institution: "Estácio",
        type: "College",
        course: "ANALISYS AND DEVELOPMENT OF SYSTEMS",
        start: "2022",
        end: "2023",
      },
      {
        institution: "UEZO - Centro Universitário Estadual da Zona Oeste",
        type: "College",
        course: "ANALISYS AND DEVELOPMENT OF SYSTEMS",
        start: "2014",
        end: "2022",
      },
      {
        institution: "FAETEC - E.T.E. Santa Cruz",
        type: "Technical High Schoool",
        course: "DATA PROCESSING",
        start: "2011",
        end: "2013",
      },
    ],
  },
  contacts: {
    title: "Contacts",
    cellphone: "Cellphone",
  },
  skills: {
    title: "Main skills",
    list: [
      { description: "Responsive layouts with HTML 5, CSS 3, Sass and Less" },
      {
        description:
          "Dinamic front-end with Javascript/Typescript, Angular and React",
      },
      { description: "Back-end API's with NodeJS and Symfony PHP" },
      { description: "Databases PostgreSQL, MySQL, SQL Server and MongoDB" },
      { description: "Good Team work and proactivity" },
    ],
  },
  languages: {
    title: "Languages",
    list: ["Native Portuguese", "B1 English level"],
  },
};
