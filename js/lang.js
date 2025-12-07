const texts = {
  es: {
    header_title: "Jose David Segura Carranza",
    header_subtitle:
      "QA Tester • Pruebas Manuales • Pruebas de API • Metodologías Ágiles",

    about_title: "Sobre mí",
    about_text:
      "Estudiante de Aseguramiento de la Calidad de Software motivado y orientado a los detalles, con experiencia en pruebas manuales y de API, metodologías ágiles y soporte técnico. Apasionado por garantizar la calidad y funcionalidad de las aplicaciones.",

    exp_title: "Experiencia",
    exp_job: "4Geeks – Pasantía QA (Ago 2025 – Dic 2025)",
    exp_li1: "Pruebas manuales y de API para aplicaciones web.",
    exp_li2: "Ejecución de casos de prueba y reporte de resultados.",
    exp_li3:
      "Verificación de flujos, manejo de errores y comportamiento de la interfaz.",
    exp_li4:
      "Colaboración con el equipo de desarrollo asegurando estándares de calidad.",
    exp_tools: "Herramientas:",

    proj_title: "Proyectos",
    proj1:
      "<strong>Testing de API con Postman:</strong> Colección con pruebas de autenticación, CRUD y validación de respuestas JSON.",
    proj2:
      "<strong>Casos de prueba:</strong> Diseño de casos de prueba en TestRail para módulos de login, checkout y dashboard.",
    proj3:
      "<strong>Reporte de bugs:</strong> Documentación de defectos incluyendo pasos de reproducción, severidad y evidencia.",

    skills_title: "Habilidades Técnicas",
    skill1: "Testing manual",
    skill2: "Testing de APIs",
    skill3: "DevTools, Postman, Git, Docker",
    skill4: "Metodologías ágiles",
    skill5: "TestRail",
    skill6: "Microsoft Office 365",

    contact_title: "Contacto",
    contact_email: "📧 jose01265@gmail.com",
    contact_phone: "📱 8692-2390",
    contact_location: "📍 Palmares, Alajuela",

    footer_text: "© 2025 Jose David Segura. Hecho con GitHub Pages.",
  },

  en: {
    header_title: "Jose David Segura Carranza",
    header_subtitle:
      "QA Tester • Manual Testing • API Testing • Agile Methodologies",

    about_title: "About Me",
    about_text:
      "Software Quality Assurance student, detail-oriented and motivated, with experience in manual and API testing, agile methodologies, and technical support. Passionate about ensuring application quality and functionality.",

    exp_title: "Experience",
    exp_job: "4Geeks – QA Internship (Aug 2025 – Dec 2025)",
    exp_li1: "Manual and API testing for web applications.",
    exp_li2: "Execution of test cases and reporting of results.",
    exp_li3:
      "Verification of workflows, error handling, and interface behavior.",
    exp_li4:
      "Collaboration with the development team ensuring quality standards.",
    exp_tools: "Tools:",

    proj_title: "Projects",
    proj1:
      "<strong>API Testing with Postman:</strong> Collection with authentication, CRUD tests, and JSON response validation.",
    proj2:
      "<strong>Test Cases:</strong> Design of test cases in TestRail for login, checkout, and dashboard modules.",
    proj3:
      "<strong>Bug Reporting:</strong> Documentation of defects including reproduction steps, severity, and evidence.",

    skills_title: "Technical Skills",
    skill1: "Manual Testing",
    skill2: "API Testing",
    skill3: "DevTools, Postman, Git, Docker",
    skill4: "Agile Methodologies",
    skill5: "TestRail",
    skill6: "Microsoft Office 365",

    contact_title: "Contact",
    contact_email: "📧 jose01265@gmail.com",
    contact_phone: "📱 +506 8692-2390",
    contact_location: "📍 Palmares, Alajuela, Costa Rica",

    footer_text: "© 2025 Jose David Segura. Made with GitHub Pages.",
  },
};


function switchLang(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.innerHTML = texts[lang][key] || "";
  });
}


document.getElementById("es-btn").addEventListener("click", () => {
  switchLang("es");
  setActive("es-btn");
});

document.getElementById("en-btn").addEventListener("click", () => {
  switchLang("en");
  setActive("en-btn");
});


function setActive(id) {
  document.querySelectorAll(".lang-icon").forEach((icon) => {
    icon.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
