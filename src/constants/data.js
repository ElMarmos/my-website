const data = {
  navbar: {
    items: [
      "About",
      "Education",
      "Experience",
      "Skills",
      "Portfolio",
      "Contact",
    ],
  },
  header: {
    firstRow: ["Hi! My name is ", "Alejandro Marmolejo."],
    secondRow: [
      "I'm a ",
      "Software Engineer ",
      "specializing in ",
      "design and development of web applications.",
    ],
  },
  about: {
    text: [
      "I'm a Software Engineer specializing in design and development of APIs and building an awesome user experience through front end development. I am now building backend services at ",
      "Twilio",
      ".",
    ],
    twilioUrl: "https://www.twilio.com/",
  },
  education: {
    items: [
      {
        title: "Software Engineer",
        location: "Icesi University",
        locationUrl: "https://www.icesi.edu.co/en/",
        from: "JUL 2010",
        to: "DEC 2016",
        degree: "Bachelors Degree ",
        name: "in Software Engineering",
      },
    ],
  },
  experience: {
    items: [
      {
        from: "JUL 2021",
        to: "PRESENT",
        position: "Software Engineer",
        company: "Twilio",
        companyUrl: "https://www.twilio.com/",
        summary: [
          "Developed different web services that get metrics and alerts from a communication device called SBC and exposed those metrics in user interfaces and dashboards to help network engineers troubleshoot and measure its performance.",
        ],
      },
      {
        from: "OCT 2020",
        to: "JUL 2021",
        position: "Full Stack Web Developer",
        company: "Devbase",
        companyUrl: "https://devbase.us/",
        summary: [
          "Designed the architecture in NestJS and developed the backend of Perchance, an app used to cross users using their GPS locations and interests so they can talk and maybe date.",
          "Designed the architecture in NestJS and developed the backend of Formworks, an app used to connect people that work on construction with other workers and apply or show interest in positions posted by companies in the field.",
          "Worked with multidisciplinary teams making tradeoffs between functionality and user-friendly design.",
          "Helped with other project's frontend.",
        ],
      },
      {
        from: "FEB 2020",
        to: "OCT 2020",
        position: "Semi Senior Advance Backend Developer",
        company: "Robinfood",
        companyUrl: "https://www.robinfood.com/",
        summary: [
          "Designed architecture and developed a system in NodeJS to automatically deploy the local server to all the physical points of sale.",
          "Planned part of the migration of the entire system from GMT-5 to UTC to handle points of sales located in other time zones.",
          "Worked with multidisciplinary teams making tradeoffs between functionality and user-friendly design.",
          "Participated in the complete Software Development Cycle of the multiple Laravel systems.",
          "As SSL I was in charge of helping my team solve their technical issues and give my feedback on how to solve problems.",
        ],
      },
      {
        from: "FEB 2018",
        to: "MAY 2019",
        position: "Software Developer",
        company: "Lulosoft",
        companyUrl: "http://www.lulosoft.com/",
        summary: [
          "Worked on project EzChow as a full stack developer.",
          "Designed and developed both backend architecture and frontend UI/UX for the Administration web app of EzChow.",
          "Developed multiple web services for EzChow web app.",
          "Managed, modified and updated Michelle Lewin's Magento Ecommerce (One0One)",
          "Managed, modified, and updated Enzo Colt's Jewelry Magento Ecommerce.",
        ],
      },
      {
        from: "JUN 2015",
        to: "FEB 2020",
        position: "Software Engineer",
        company: "Drillapp",
        companyUrl: "https://www.drillapp.co/",
        summary: [
          "Designed architecture, planned execution, developed, and maintained new versions of the Pitia suite (On premise application for reporting, backend applications for administration, web client and mobile app and all frontend clients)",
          "Designed architecture, planned execution, developed, and maintained Flavium Arena.",
          "Worked with multidisciplinary teams making tradeoffs between functionality and user-friendly design.",
          "Participated in the complete Software Development Cycle of the multiple Pitia applications and Flavium Arena.",
        ],
      },
    ],
  },
  skills: {
    items: [
      {
        title: "Web Development",
        body: "Javascript, Typescript, JAVA, Node.js, MongoDB, PostgresSQL, MySQL.",
      },
      {
        title: "Front End Development",
        body: "HTML, CSS, SASS, React.",
      },
      {
        title: "Other Technologies",
        body: "Spring Boot, NestJS, Kafka, Kibana, Electron.",
      },
      {
        title: "Design",
        body: "Photoshop, Illustrator, XD, Wireframing.",
      },
    ],
  },
  portfolio: {
    items: [
      {
        title: "CEPS Engineering",
        summary: "Developed new website of the company",
        url: "http://www.ceps.com.co/en/home/",
      },
      {
        title: "Restaurant Mar Peruano",
        summary: "Developed website of the restaurant",
      },
    ],
  },
  contact: {
    text: "Now that you know me, let's build something awesome together!",
    contactBtnTxt: "Say Hello!",
  },
  general: {
    links: {
      github: "https://github.com/elmarmos",
      linkedin: "https://www.linkedin.com/in/alejandromarmolejo/",
    },
  },
};

export default data;
