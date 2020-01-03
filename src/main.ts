import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

// @ts-ignore
import { Scrollbar } from 'element-ui';
import { Button } from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
// import 'element-ui/lib/theme-chalk/base.css';
import moment from 'moment';
Vue.use(Button);
Vue.use(Scrollbar);
// Vue.use(Menu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
Vue.component('ElCollapseTransition', CollapseTransition);

Vue.filter('formatDateTime', (value: Date) => {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD hh:mm:ss');
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
