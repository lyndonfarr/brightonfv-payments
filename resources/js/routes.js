import TableView from './components/TableView'
import Account from './components/Account'
import Single from './components/Single'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: Account,
        name: 'home'
    },
    {
        path: '/:table',
        component: TableView,
        name: 'table'
    },
    {
        path: '/:table/:id',
        component: Single,
        name: 'single'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router