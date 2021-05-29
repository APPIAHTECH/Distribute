import { createRouter, createWebHistory } from '@ionic/vue-router';
import Discover from '../pages/Discover.vue'
import Browse from '../pages/Browse.vue'
import Favorites from '../pages/Favorites.vue'
import More from '../pages/More.vue'


const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/more',
    name: 'More',
    component: More
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
