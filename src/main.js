import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/118n.bootstrap";
import router from "@/router";
import store from "@/store";

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)

app.mount('#app')
