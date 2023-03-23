import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Tres from '@tresjs/core'

import 'material-icons/iconfont/material-icons.css';

createApp(App).use(router).use(Tres).mount('#app')
