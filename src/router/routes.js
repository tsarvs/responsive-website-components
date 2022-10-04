import HomePage from "@/views/HomePage";
import ContactPage from "@/views/ContactPage";
import ProjectsPage from "@/views/ProjectsPage";

export default [
    {path: '/', name: 'home-page', component: HomePage,},
    {path: '/contact', name: 'contact-page', component: ContactPage,},
    {path: '/projects', name: 'projects-page', component: ProjectsPage,},
];