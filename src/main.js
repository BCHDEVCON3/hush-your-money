/* Import core modules. */
import Vue from 'vue'
import App from './App.vue'

/* Import router. */
import router from './router'

/* Import store. */
import store from './store'

/* Import Vuetify. */
import vuetify from '@/plugins/vuetify' // path to vuetify export

/* Set production tip. */
Vue.config.productionTip = false

/* Initialize Vue. */
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
