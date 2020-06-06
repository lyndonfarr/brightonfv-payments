import PrimaryComponent from './components/PrimaryComponent'
// import Single from './components/Single'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: PrimaryComponent,
        name: 'home'
    },
    // {
    //     path: '/single',
    //     component: Single,
    // }
]

const router = new VueRouter({
    routes
})

export default router