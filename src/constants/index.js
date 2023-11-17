import {
    mobile,
    backend,
    creator,
    web,
    landingpage,
    advice,
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
    },
];

export { services, projects };
