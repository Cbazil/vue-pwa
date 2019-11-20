import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import JournalEntry from '@/components/JournalEntry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entry',
      name: 'JournalEntry',
      component: JournalEntry
    }
  ],
  mode: 'history'
})
