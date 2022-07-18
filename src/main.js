import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import MainScreen from "./components/MainScreen.vue";
import TaskbarMenu from "./components/taskbarMenu.vue";
import MoneySummary from "./components/MoneySummary.vue";
import CalculatorApp from "./components/CalculatorApp.vue";
import SelectCategory from "./components/SelectCategory.vue";
import AddRecord from "./components/AddRecord.vue";
import TrackList from "./components/TrackList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/add", component: AddRecord },
    { path: "/", component: MainScreen },
  ],
});

const app = createApp(App);

app.component("main-screen", MainScreen);
app.component("taskbar-menu", TaskbarMenu);
app.component("money-summary", MoneySummary);
app.component("calculator-app", CalculatorApp);
app.component("select-category", SelectCategory);
app.component("add-record", AddRecord);
app.component("track-list", TrackList);

app.use(router);

app.mount("#app");
