// src/lib/education.data.ts
// Coloque aqui formações e certificações. Fica fácil de manter.

export interface EducationItem {
  institution: string;
  course: string;
  level: "Graduação" | "Técnico" | "Certificação" | "Ensino Medio Técnico" | "Outro";
  start: string; // "2023"
  end?: string;  // "2029" ou "Atual"
  location?: string; // localização
  details?: string[]; // bullets curtos
  link?: string;      // site da instituição
  logo?: string;   // ← NOVO (ex.: "/icons/utfpr.png")
  certificateUrl?: string; // link direto para o PDF
  certificateImg?: string; // opcional: thumb/scan do certificado
}

export interface CertificationItem {
  provider: string;      // "Alura"
  title: string;         // "Git e GitHub: Controle de Versão"
  year?: string;         // "2024" (opcional; útil pra filtros)
  hours?: number;        // 6
  link?: string;         // URL do certificado
  area: string;          // "Infra/DevOps"
  subareas: string[];    // ["Git","GitHub","Controle de versão"]
  logo?: string;         // "/icons/alura.jpg"
  start?: string;        // "2021-09-01"  (ISO/aaaa-mm-dd)
  end?: string;          // "2021-10-05"
}

 
export const EDUCATION: EducationItem[] = [
  {
    institution: "UTFPR — Universidade Tecnológica Federal do Paraná",
    course: "Engenharia Eletrônica",
    level: "Graduação",
    start: "2023",
    end: "2029 (prev.)",
    location: "Curitiba, PR",
    details: [
      "Algoritmos de Programação (Python): lógica, funções, vetores/matrizes, resolução de problemas.",
      "Programação de Computador (C): raciocínio computacional, boas práticas e organização de código.",
      "Eletricidade/Eletrônica na prática: montagem de circuitos em protoboard, medições e análise básica.",
      "Comunicação e Redes: fundamentos de redes, modelos OSI/TCP-IP e endereçamento.",
      "Química Geral: estrutura da matéria, estequiometria, soluções e propriedades.",
      "Desenho Técnico: leitura e produção de desenhos, vistas, cotagem e normas.",
      "Redação técnica para engenharias: relatórios claros, padronização e comunicação objetiva.",
      "Formação complementar: Primeiros Socorros, Filosofia/História da Ciência e Tecnologia, Psicologia do Trabalho e Ciências do Ambiente.",
    ],
    link: "https://www.utfpr.edu.br",
    logo: "/icons/utfpr.jpg", // coloque a imagem em /public/icons/
  },
  {
    institution: "Colégio Estadual Pedro Macedo",
    course: "Técnico em TI",
    level: "Ensino Medio Técnico",
    start: "2018",
    end: "2021",
    location: "Curitiba, PR",
    details: [
      "Base sólida em sistemas, redes e programação.",
      "Desenvolvimento web: HTML, CSS, JavaScript, PHP.",
      "Bancos de dados: MySQL (CRUD, consultas).",
      "Versionamento: Git e GitHub.",
      "Instalação/manutenção de PCs e redes locais (Windows/Linux).",
    ],
    link: "https://www.consultaescolas.pr.gov.br/consultaescolas/pages/templates/initial2.xhtml;jsessionid=C1YHaXYI0EEwS22HH78Xb0elwFzrVklCUvQQH_oo.sseed75181?windowId=46b&codigoMunicipio=690&codigoEstab=142",
    logo: "/icons/pedro-macedo.jpg",
    certificateUrl: "/certificados/tecnico-ti-pedro-macedo.pdf",  
  },
];

// Certificações (resumo do bloco da Alura)
export const CERTIFICATIONS: CertificationItem[] = [
  {
    provider: "Alura",
    title: "Git Github Controle De Versao",
    year: "2021",
    hours: 6,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/git-github-controle-de-versao/formalCertificate",
    area: "Infra/DevOps",
    subareas: ["Controle de versão", "Git", "GitHub"],
    logo: "/icons/alura.jpg",
  },
  {
    provider: "Alura",
    title: "Git Github Branching Conflitos Pull Requests",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/git-github-branching-conflitos-pull-requests/formalCertificate",
    area: "Infra/DevOps",
    subareas: ["Branching/Merge", "Controle de versão", "Git", "GitHub", "Pull Requests", "Resolução de conflitos"],
    logo: "/icons/alura.jpg",
  },
  {
    provider: "Alura",
    title: "Raspberry Pi da Instalação Ao Media Center",
    year: "2021",
    hours: 6,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/raspberrypi-da-instalacao-ao-media-center/formalCertificate",
    area: "Infra/DevOps",
    subareas: ["Linux", "Media Center", "Raspberry Pi"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "JavaScript Introducao",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/javascript-introducao/formalCertificate",
    area: "Web & UI",
    subareas: ["Fundamentos", "JavaScript"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "JavaScript Es6 Orientação a Objetos — Parte 1",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/javascript-es6-orientacao-a-objetos-parte-1/formalCertificate",
    area: "Web & UI",
    subareas: ["ES6", "JavaScript", "OOP"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "JavaScript Es6 Orientação a Objetos — Parte 2",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/javascript-es6-orientacao-a-objetos-parte-2/formalCertificate",
    area: "Web & UI",
    subareas: ["ES6", "JavaScript", "OOP"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "jQuery A Biblioteca Do Mercado",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/jquery-a-biblioteca-do-mercado/formalCertificate",
    area: "Web & UI",
    subareas: ["DOM", "jQuery"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Mobile First Layouts Responsivos",
    year: "2021",
    hours: 7,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/mobile-first-layouts-responsivos/formalCertificate",
    area: "Web & UI",
    subareas: ["HTML/CSS", "Mobile-first", "Responsive Design"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "jQuery A Biblioteca Do Mercado — Parte 2",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/jquery-a-biblioteca-do-mercado-parte-2/formalCertificate",
    area: "Web & UI",
    subareas: ["DOM", "jQuery"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "MySQL Manipule Dados Com Sql",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/mysql-manipule-dados-com-sql/formalCertificate",
    area: "Dados",
    subareas: ["Agregações", "Joins", "SQL (MySQL)"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "MySQL Consultas Sql",
    year: "2021",
    hours: 14,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/mysql-consultas-sql/formalCertificate",
    area: "Dados",
    subareas: ["Agregações", "Consultas", "Joins", "SQL (MySQL)"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "MySQL Dml Manipulacao De Dados",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/mysql-dml-manipulacao-de-dados/formalCertificate",
    area: "Dados",
    subareas: ["Agregações", "DML", "Joins", "SQL (MySQL)"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Node.js REST API",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/node-rest-api/formalCertificate",
    area: "Programação",
    subareas: ["API", "APIs REST", "Node.js"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "TypeScript Avancando Linguagem",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/typescript-avancando-linguagem/formalCertificate",
    area: "Programação",
    subareas: ["Generics", "Interfaces", "Tipos", "TypeScript"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "TypeScript Evoluindo JavaScript",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/typescript-evoluindo-javascript/formalCertificate",
    area: "Programação",
    subareas: ["Interfaces", "JavaScript", "Tipos", "Transpilação", "TypeScript"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Orm Node.jsjs Api Sequelize MySQL",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/orm-nodejs-api-sequelize-mysql/formalCertificate",
    area: "Programação",
    subareas: ["API", "Agregações", "Joins", "Node.js", "ORM", "SQL (MySQL)", "Sequelize"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Html5 Css3 Primeiros Passos",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/html5-css3-primeiros-passos/formalCertificate",
    area: "Programação",
    subareas: ["Html", "css"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Html5 Css3 Posicionamento Listas Navegacao",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/html5-css3-posicionamento-listas-navegacao/formalCertificate",
    area: "Programação",
    subareas: ["Html", "css"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Html5 Css3 Formularios Tabelas",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/html5-css3-formularios-tabelas/formalCertificate",
    area: "Programação",
    subareas: ["Html", "css"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Html5 Css3 Avancando Css",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/html5-css3-avancando-css/formalCertificate",
    area: "Programação",
    subareas: ["Html", "css"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "JavaScript Programando Na Linguagem Web",
    year: "2021",
    hours: 20,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/javascript-programando-na-linguagem-web/formalCertificate",
    area: "Web & UI",
    subareas: ["JavaScript"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Node.js Jwt Autenticacao Tokens",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/node-jwt-autenticacao-tokens/formalCertificate",
    area: "Programação",
    subareas: ["Node.js"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Function Components",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-function-components/formalCertificate",
    area: "Web & UI",
    subareas: ["React"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Hooks E Formularios",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-hooks-e-formularios/formalCertificate",
    area: "Web & UI",
    subareas: ["React"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Styled Components",
    year: "2021",
    hours: 6,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-styled-components/formalCertificate",
    area: "Web & UI",
    subareas: ["React"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "JavaScript Polimorfismo",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/javascript-polimorfismo/formalCertificate",
    area: "Web & UI",
    subareas: ["ES6", "JavaScript", "OOP"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Angular Upload & Build",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/angular-upload-build/formalCertificate",
    area: "Web & UI",
    subareas: ["Angular", "Build", "Upload"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Ciclo De Vida",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-ciclo-de-vida/formalCertificate",
    area: "Web & UI",
    subareas: ["Ciclo de vida", "React"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Angular Lapidando Projeto",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/angular-lapidando-projeto/formalCertificate",
    area: "Web & UI",
    subareas: ["Angular", "Boas práticas"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Router Navegacao SPA",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-router-navegacao-spa/formalCertificate",
    area: "Web & UI",
    subareas: ["React", "React Router"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Automatizando Testes",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-automatizando-testes/formalCertificate",
    area: "Web & UI",
    subareas: ["React", "Testes"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Native Expo Navegacao Menu Suporte Telas",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-native-expo-navegacao-menu-suporte-telas/formalCertificate",
    area: "Web & UI",
    subareas: ["Expo", "Navegação", "React Native"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Native Design System",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-native-design-system/formalCertificate",
    area: "Web & UI",
    subareas: ["Expo", "Navegação", "React Native"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Angular Autenticacao",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/angular-autenticacao/formalCertificate",
    area: "Web & UI",
    subareas: ["Angular", "Autenticação"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Javascritpt Orientacao Objetos",
    year: "2021",
    hours: 10,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/javascritpt-orientacao-objetos/formalCertificate",
    area: "Programação",
    subareas: ["JavaScript", "OOP"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "React Js",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/react-js/formalCertificate",
    area: "Web & UI",
    subareas: ["React"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Angular Fundamentos",
    year: "2021",
    hours: 16,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/angular-fundamentos/formalCertificate",
    area: "Web & UI",
    subareas: ["Angular", "Fundamentos"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Fundamentos JavaScript Tipos Variaveis Funcoes",
    year: "2021",
    hours: 12,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/fundamentos-javascript-tipos-variaveis-funcoes/formalCertificate",
    area: "Web & UI",
    subareas: ["Fundamentos", "JavaScript"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Logica Programacao JavaScript Html",
    year: "2021",
    hours: 16,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/logica-programacao-javascript-html/formalCertificate",
    area: "Programação",
    subareas: ["JavaScript", "Lógica de Programação"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Introducao A Programacao Com C — Parte 1",
    year: "2021",
    hours: 8,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/introducao-a-programacao-com-c-parte-1/formalCertificate",
    area: "Programação",
    subareas: ["C", "Fundamentos"],
    logo: "/icons/alura.jpg",
    
  },
  {
    provider: "Alura",
    title: "Posicione Elementos Com Flexbox",
    year: "2021",
    hours: 9,
    link: "https://cursos.alura.com.br/user/wallacecorreiabrasil/course/posicione-elementos-com-flexbox/formalCertificate",
    area: "Web & UI",
    subareas: ["Flexbox", "HTML/CSS", "Layout"],
    logo: "/icons/alura.jpg",
    
  }
];