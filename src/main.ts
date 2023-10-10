import './assets/main.css';

import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import Gleap from 'gleap';

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
    App,
    async ({ isClient }) => {
        if (isClient) {
            const GleapModule = await import('gleap');
            const Gleap: any = GleapModule.default || GleapModule;

            Gleap.initialize("ogWhNhuiZcGWrva5nlDS8l7a78OfaLlV");
        }
    }
)