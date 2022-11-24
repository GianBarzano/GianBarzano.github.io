import { ILanguage } from "./language";

export const portuguese: ILanguage = {
  header: {
    subtitle: "Desenvolvimento de sistemas",
    callButton: {
			long: "Entrar em contato",
			short: "Contato"
		},
  },
  about: {
    title: "Sobre",
    description: [
      "Me chamo Gian Barzano e atuo na análise e desenvolvimento de sistemas, nas camadas de Front-end e Back-end desde 2015.",
      "Tenho paixão pela minha área, e aproveito qualquer chance de me especializar e encarar novos desafios.",
			"Trabalho no modelo de prestação de serviços."
    ],
  },
  experiences: {
    title: "Experiência",
    list: [
      {
        company: "Grupo Gera - atual",
        role: "Desenvolvedor Web FullStack",
        time: "11 meses",
      },
      {
        company: "Nasajon Sistemas",
        role: "Desenvolvedor Web FullStack com PHP, PostgreSQL and Angular",
        time: "3 anos e 3 meses",
      },
      {
        company: "Neosyx Desenvolvimento",
        role: "Desenvolvedor Delphi com SQL Server",
        time: "1 ano",
      },
      {
        company: "ASC Solutions",
        role: "Desenvolvedor Delphi com MySQL e SQL Server",
        time: "2 anos e 8 meses",
      },
    ],
  },
  grades: {
    title: "Formação",
    list: [
      {
        institution: "Estácio",
        type: "Curso Superior de Tecnologia",
        course: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        start: "2022",
        end: "2023",
      },
      {
        institution: "UEZO - Centro Universitário Estadual da Zona Oeste",
        type: "Curso Superior de Tecnologia",
        course: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
        start: "2014",
        end: "2022",
      },
      {
        institution: "FAETEC - E.T.E. Santa Cruz",
        type: "Ensino Médio Técnico",
        course: "INFORMÁTICA",
        start: "2011",
        end: "2013",
      },
    ],
  },
  contacts: {
    title: "Contatos",
    cellphone: "Celular",
  },
  skills: {
    title: "Principais Habilidades",
    list: [
      { description: "Layouts responsivos com HTML 5 e CSS 3" },
      {
        description:
          "Front-end dinâmico com Angular, React e Typescript",
      },
      { description: "Back-end APIs com NodeJS e PHP Symfony" },
      { description: "Banco de dados PostgreSQL, MySQL, SQL Server e MongoDB" },
      { description: "Trabalho em equipe e proatividade" },
    ],
  },
  languages: {
    title: "Idiomas",
    list: ["Português", "Inglês intermediário"],
  },
};
