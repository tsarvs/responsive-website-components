import HomePage from "@/views/HomePage";
import ContactPage from "@/views/ContactPage";
import AboutPage from "@/views/AboutPage";
import ProjectsPage from "@/views/ProjectsPage";

export default [
    {path: '/', name: 'home-page', component: HomePage,},
    {path: '/contact', name: 'contact-page', component: ContactPage,},
    {path: '/about', name: 'about-page', component: AboutPage,},
    {path: '/projects', name: 'projects-page', component: ProjectsPage,},
];