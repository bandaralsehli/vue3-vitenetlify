import { createRouter , createWebHistory} from 'vue-router'


import Home from '@/views/Home.vue'

import About from '@/views/About.vue';





const routes = [
    {path: '/' , name: 'Home' ,component : Home },
    {path: '/about' , name: 'about' ,component : About },
    {path: '/:pathMatch(.*)*' , name: 'not found' ,component : ()=> import('@/views/notFound.vue') }
  ]




const router = createRouter ( {
history: createWebHistory(),
routes
});


export default router;