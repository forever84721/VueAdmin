import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

// @ts-ignore
import { Button, Scrollbar } from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.use(Button);
Vue.use(Scrollbar);
Vue.component('ElCollapseTransition', CollapseTransition);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
