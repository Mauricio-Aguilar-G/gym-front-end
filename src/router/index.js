import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginAdminView from '../views/AdminView.vue'
import CreateAdminView from '../views/CreateAdmin.vue'
import ViewAdminView from '../views/ViewAdmin.vue'
import MemberView from '../views/MemberView.vue'
import MembersView from '../views/MembersView.vue'
import CreateMemberView from '../views/CreateMember.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login_admin',
    name: 'login_admin',
    component: LoginAdminView
  },
  {
    path: '/view_admin',
    name: 'view_admin',
    component: ViewAdminView
  },
  {
    path: '/create_admin',
    name: 'create_admin',
    component: CreateAdminView
  },
  {
    path: '/member_login',
    name: 'member_login',
    component: MemberView
  },
  {
    path: '/view_member',
    name: 'view_member',
    component: MembersView
  },
  {
    path: '/create_member',
    name: 'create_member',
    component: CreateMemberView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
