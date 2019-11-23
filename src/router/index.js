import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import JournalEntry from '@/components/JournalEntry'
import JournalEntryById from '@/components/JournalEntryById'

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
    },
    { 
      path: '/entry/:id',
      name: 'JournalEntryById',
      component: JournalEntryById
    } 
  ],
  mode: 'history'
})
