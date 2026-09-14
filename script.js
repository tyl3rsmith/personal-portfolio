function openResume() {
    document.getElementById("resume-modal").style.display = "flex";
}

function closeResume() {
    document.getElementById("resume-modal").style.display = "none";
}


const projects = [
    {
        name: "Lola's 2.0",
        technologies: "React · FastAPI · Python · AWS · Pandas",
        category: "ml",
        description:
            "Built a full stack health food recommendation application that combines algorithmic recommendations with an AI powered chatbot to help users discover meals based on their preferences.",
        highlight:
            "Improved application latency by up to 20× through backend and data processing optimizations.",
        link: "https://github.com/lolas-2/Lolas-2.0"
    },

    {
        name: "Enterprise Backend API",
        technologies: "TypeScript · Node.js · Express · PostgreSQL · Docker",
        category: "backend",
        description:
            "Built a production style REST API with authentication, role based access control, organization management, database integration, and automated testing.",
        highlight:
            "Implemented JWT authentication, OWNER/ADMIN/MEMBER permissions, rate limiting, and CI testing with GitHub Actions.",
        link: "https://github.com/tyl3rsmith/EnterpriseBackend"
    },

    {
        name: "Terravela",
        technologies: "React Native · TypeScript · Supabase · Expo",
        category: "all",
        description:
            "Contributed to a travel game application that rewards users for exploring locations around the world through location based badges, maps, and leaderboards.",
        highlight:
            "Automated badge creation and deployment across 7+ California cities, replacing 3+ manual configuration steps.",
        link: "https://apps.apple.com/us/app/terravela/id6503618536"
    },

    {
        name: "UNC CSXL",
        technologies: "Python · PostgreSQL · Angular · Docker · Kubernetes",
        category: "all",
        description:
            "Developed a full stack room and seat management feature for the CSXL website, supporting room data, seat allocation, and administrative management for approximately 1,500 users.",
        highlight:
            "Designed RESTful CRUD APIs with Python and PostgreSQL, integrating database schema design, indexing, and migrations for scalable seat and room management.",
        link: "https://youtu.be/90wqq89M7Lk?is=c0K5BGPNrbVJ9uJ7"
    },

    {
        name: "Enhancing Regional Temperature Predictions for Climate Data",
        technologies: "Python · TensorFlow · NumPy · Pandas · Sklearn · Matplotlib",
        category: "ml",
        description:
            "Developed a climate prediction model using Linear, Polynomial, Random Forest, and Neural Network regression to predict average temperature from climate indicators.",
        highlight:
            "Compared single variable and multivariable models to evaluate how effectively different regression techniques captured nonlinear climate trends.",
        link: "https://github.com/unc-ml-climate-project/ML-Climate-Project.git"
    },

    {
        name: "Check-In System",
        technologies: "Python · Angular · FastAPI · Kubernetes · Red Hat OpenShift",
        category: "all",
        description:
            "Collaboratively developed a full stack student check in system for the UNC Computer Science department, streamlining lab check ins for students and staff.",
        highlight:
            "Built a responsive Angular and HTML/CSS interface with FastAPI backend services and deployed the application using Kubernetes and Red Hat OpenShift.",
        link: "https://github.com/tyl3rsmith/csxl-check-in.git"
    },

    {
        name: "Akari",
        technologies: "Java",
        category: "frontend",
        description:
            "Developed a logic puzzle game using Java, featuring an interactive interface designed to provide an engaging and intuitive user experience.",
        highlight:
            "Applied the Model View Controller design pattern and JavaFX/CSS to build and iteratively refine the UI based on user feedback.",
        link: "https://github.com/tyl3rsmith/akari.git"
    },

    {
        name: "Shell Simulator",
        technologies: "C",
        category: "systems",
        description:
            "Developed a Unix style shell in C capable of parsing and executing user commands through system level process management.",
        highlight:
            "Implemented process creation and execution using fork(), exec(), and wait(), demonstrating core systems programming and operating system concepts.",
        link: "https://github.com/tyl3rsmith/c-shell.git"
    },

    {
        name: "Connect 4",
        technologies: "C · MIPS · SystemVerilog",
        category: "systems",
        description:
            "Designed and implemented a custom MIPS processor in SystemVerilog and developed a Connect 4 game in C and MIPS Assembly to run on the processor.",
        highlight:
            "Simulated and validated processor hardware in Verilog, debugging timing and logic to ensure accurate instruction execution.",
        link: "https://github.com/tyl3rsmith/connect-4.git"
    },
];


function displayProjects(category = "all") {
    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    projects.forEach(project => {

        if (category !== "all" && project.category !== category) {
            return;
        }

        const projectHTML = `
            <div class="col-sm-12 col-md-6 project-item">
                <div class="project-content">

                    <h3>${project.name}</h3>

                    <p class="project-tech">
                        ${project.technologies}
                    </p>

                    <p>
                        ${project.description}
                    </p>

                    <p class="project-highlight">
                        ${project.highlight}
                    </p>

                    <a href="${project.link}" class="project-link">
                        View Project →
                    </a>

                </div>
            </div>
        `;

        container.innerHTML += projectHTML;
    });
}


function filterProjects(category, button) {

    displayProjects(category);

    const buttons = document.querySelectorAll(".project-filters button");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    button.classList.add("active");
}


displayProjects();