import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import PostsPage from './components/pages/PostsPage.vue'
import CreatePost from './components/pages/CreatePost.vue'
import { createRouter, createWebHistory} from 'vue-router';

const app = createApp(App)

const routes = [
    { path: '/', component:HomePage
    
    },
    { path: '/posts', component:PostsPage
    
    },
    { path: '/createpost', component:CreatePost
    
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,

})
app.use(router)
app.mount('#app')
