import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './index.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark-mode',

        }
    },
    ripple: true,
})
app.directive('ripple', Ripple);
app.use(ToastService);
app.mount('#app')
