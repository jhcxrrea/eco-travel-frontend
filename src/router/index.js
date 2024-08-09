import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DestinationDetailsPage from '../views/DestinationDetailsPage.vue';
import SearchResultsPage from '../views/SearchResultsPage.vue';
import UserProfilePage from '../views/UserProfilePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import RecoverPasswordPage from '../views/RecoverPasswordPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue'; // Certifique-se de que este caminho está correto

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/destinations/:id',
    name: 'DestinationDetails',
    component: DestinationDetailsPage,
    props: true
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResultsPage
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfilePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/recover',
    name: 'RecoverPassword',
    component: RecoverPasswordPage
  },
  {
    path: '/:pathMatch(.*)*', // Rota para páginas não encontradas
    name: 'NotFound',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Substitua pela lógica de autenticação real
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
