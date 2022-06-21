import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import PostsPage from './components/pages/PostsPage.vue'
import CreatePost from './components/pages/CreatePost.vue'
import { createRouter, createWebHistory} from 'vue-router';
  import { initializeApp } from "firebase/app";

const app = createApp(App)
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBTKxEP5a_ewI395YR4AMwEpss3sUPMK3Q",
          authDomain: "testingwithvue.firebaseapp.com",
          projectId: "testingwithvue",
          storageBucket: "testingwithvue.appspot.com",
          messagingSenderId: "525120576003",
          appId: "1:525120576003:web:0a723b2159e8fa3e120c36"
        };

        // Initialize Firebase
        const app1 = initializeApp(firebaseConfig);
        app.use(app1)
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
    linkActiveClass:'active',
    
});
app.use(router)
app.mount('#app')
