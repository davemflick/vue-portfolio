import Home from "./components/Home.vue";
import Projects from "./components/projects/Projects.vue";
import Contact from "./components/contact/Contact.vue";


export const routes = [
{path: '/', component: Home},
{path: '/projects', component: Projects},
{path: '/contact', component: Contact}
];