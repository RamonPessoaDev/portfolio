import {
    mobile,
    backend,
    creator,
    web,
    landingpage,
    advice,
    movieflixapi,
    supermario
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "ReactJS Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "NodeJS Developer",
        icon: creator,
    },
];

const projects = [
    {
        name: "Landing Page",
        description:
            "Landing Page using the Grid, as if it were a company page, to promote what it works with",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: landingpage,
        source_code_link: "https://github.com/RamonPessoaDev/Landing-Page-Com-Grid",
        project_link: "https://ramonpessoadev.github.io/Landing-Page-Com-Grid/",
    },
    {
        name: "MovieFlix API",
        description:
            "Movie API, developed using TypeScript. The API is fully documented with swagger, where you can perform a search and obtain all films, query films by genre, update/edit data from a film and remove a film.",
        tags: [
            {
                name: "TypeScript",
                color: "red-text-gradient",
            },
            {
                name: "Prisma",
                color: "gray-text-gradient",
            },
            {
                name: "Swagger",
                color: "yellow-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "violet-text-gradient",
            },
        ],
        image: movieflixapi,
        source_code_link: "https://github.com/RamonPessoaDev/movieflix-api",
        project_link: "https://github.com/RamonPessoaDev/movieflix-api",
    },
    {
        name: "Advice Generator",
        description:
            "This is a simple advice generator app. The application displays random advice with each click",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
            {
                name: "API",
                color: "orange-text-gradient",
            },
        ],
        image: advice,
        source_code_link: "https://github.com/RamonPessoaDev/App-Advice-Generator-/",
        project_link: "https://ramonpessoadev.github.io/App-Advice-Generator-/",
    },
    {
        name: "Page Super Mario",
        description:
            "Mario's Landing Page Trailer, made with the basics of frontend programming: html, css and javascript.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: supermario,
        source_code_link: "https://github.com/RamonPessoaDev/Mario_Project_One",
        project_link: "https://ramonpessoadev.github.io/Mario_Project_One/",
    },
];

export { services, projects };
