import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import SalonServices from '../views/SalonServices.vue'
import Login from '../views/identity/Login.vue'
import Register from '../views/identity/Register.vue'
import BookingServices from '../views/booking/BookingServices.vue'
import BookingTime from '../views/booking/BookingTime.vue'
import BookingClient from '../views/booking/BookingClient.vue'
import BookingConfirmation from '../views/booking/BookingConfirmation.vue'
import UserBookings from '../views/booking/user/UserBookings.vue'
import UserBookingInfo from '../views/booking/user/UserBookingInfo.vue'
import UserBookingEdit from '../views/booking/user/UserBookingEdit.vue'
import UserBookingDelete from '../views/booking/user/UserBookingDelete.vue'
import ServiceIndex from '../views/service/ServiceIndex.vue'
import ServiceDetails from '../views/service/ServiceDetails.vue'
import ServiceEdit from '../views/service/ServiceEdit.vue'
import ServiceDelete from '../views/service/ServiceDelete.vue'
import ServiceCreate from '../views/service/ServiceCreate.vue'
import CategoryIndex from '../views/servicecategory/CategoryIndex.vue'
import CategoryCreate from '../views/servicecategory/CategoryCreate.vue'
import WorkScheduleIndex from '../views/workschedule/WorkScheduleIndex.vue'
import WorkScheduleCreate from '../views/workschedule/WorkScheduleCreate.vue'
import WorkScheduleEdit from '../views/workschedule/WorkScheduleEdit.vue'
import WorkScheduleDelete from '../views/workschedule/WorkScheduleDelete.vue'
import ClientIndex from '../views/client/ClientIndex.vue'
import SalonInfo from '../views/salon/SalonInfo.vue'
import SalonEdit from '../views/salon/SalonEdit.vue'

console.log("url")
console.log(import.meta.env.BASE_URL);

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meist',
      name: 'about',
      component: AboutView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/teenused',
      name: 'salonservices',
      component: SalonServices
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registreeri',
      name: 'register',
      component: Register
    },
    {
      path: '/broneering/teenused',
      name: 'bookingservices',
      component: BookingServices
    },
    {
      path: '/broneering/aeg/:id',
      name: 'bookingtime',
      component: BookingTime,
      props: true
    },
    {
      path: '/broneering/klient/:id/:workScheduleid/:date/:time',
      name: 'bookingclient',
      component: BookingClient,
      props: true
    },
    {
      path: '/broneering/kinnitus/:id/:date/:time',
      name: 'bookingconfirmation',
      component: BookingConfirmation,
      props: true
    },
    { path: '/minubroneeringud', name: 'userbookings', component: UserBookings },
    { path: '/minubroneeringud/info/:id', name: 'userbookinginfo', component: UserBookingInfo, props: true },
    { path: '/minubroneeringud/muuda/:id', name: 'userbookingedit', component: UserBookingEdit, props: true },
    { path: '/minubroneeringud/kustuta/:id', name: 'userbookingdelete', component: UserBookingDelete, props: true },
    { path: '/minuteenused', name: 'serviceindex', component: ServiceIndex },
    { path: '/minuteenused/info/:id', name: 'servicedetails', component: ServiceDetails, props: true },
    { path: '/minuteenused/muuda/:id', name: 'serviceedit', component: ServiceEdit, props: true },
    { path: '/minuteenused/kustuta/:id', name: 'servicedelete', component: ServiceDelete, props: true },
    { path: '/minuteenused/uus', name: 'servicecreate', component: ServiceCreate },
    { path: '/minuteenused/kategooriad', name: 'categoryindex', component: CategoryIndex },
    { path: '/minuteenused/kategooriad/uus', name: 'categorycreate', component: CategoryCreate },
    { path: '/minutoograafik', name: 'workscheduleindex', component: WorkScheduleIndex },
    { path: '/minutoograafik/uus', name: 'workschedulecreate', component: WorkScheduleCreate },
    { path: '/minutoograafik/muuda/:id', name: 'workscheduleedit', component: WorkScheduleEdit, props: true },
    { path: '/minutoograafik/kustuta/:id', name: 'workscheduledelete', component: WorkScheduleDelete, props: true },
    { path: '/minukliendid', name: 'clientindex', component: ClientIndex },
    { path: '/minusalong', name: 'saloninfo', component: SalonInfo },
    { path: '/minusalong/muuda', name: 'salonedit', component: SalonEdit },
  ]
})

export default router;
