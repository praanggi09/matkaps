import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GarageView from '../views/GarageView.vue'
import RoadMapView from '../views/RoadMapView.vue'
import WorkshopView from '../views/WorkshopView.vue'
import PaddockView from '../views/PaddockView.vue'
import PackView from '../views/PackView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/garage', name: 'garage', component: GarageView },
  { path: '/roadmap', name: 'roadmap', component: RoadMapView },
  { path: '/workshop', name: 'workshop', component: WorkshopView },
  { path: '/paddock', name: 'paddock', component: PaddockView },
  { path: '/pack', name: 'pack', component: PackView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
