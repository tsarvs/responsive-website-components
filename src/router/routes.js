import HomePage from "@/views/HomePage";
import ContactPage from "@/views/ContactPage";
import BlogPage from "@/views/BlogPage";
import ProjectsPage from "@/views/ProjectsPage";

export default [
    {path: '/', name: 'home-page', component: HomePage,},
    {path: '/contact', name: 'contact-page', component: ContactPage,},
    {path: '/blog', name: 'blog-page', component: BlogPage,},
    {path: '/projects', name: 'projects-page', component: ProjectsPage,},
];