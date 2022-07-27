import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import MainScreen from "./components/MainScreen.vue";
import TaskbarMenu from "./components/taskbarMenu.vue";
import MoneySummary from "./components/MoneySummary.vue";
import CalculatorApp from "./components/CalculatorApp.vue";
import SelectCategory from "./components/SelectCategory.vue";
import AddRecord from "./components/AddRecord.vue";
import TrackList from "./components/TrackList.vue";

const store = createStore({
  state() {
    return {
      records: [
        {
          iconImage: "money",
          flowType: "Income",
          flowName: "Dividens",
          flowAmount: "250",
          dateFlow: "2 May 2020",
        },
        {
          iconImage: "car",
          flowType: "Expenses",
          flowName: "Car Installment",
          flowAmount: "-100",
          dateFlow: "2 May 2020",
        },
      ],

      choiceMade: "",
      flowType: "",
      currentValue: 0,
      datePicked: "",
    };
  },
  mutations: {
    pushData(
      state,
      theImageChoice,
      theChoiceMade,
      theFlowType,
      theCurrentValue,
      theDatePicked
    ) {
      const newRecord = {
        iconImage: theImageChoice,
        flowType: theFlowType,
        flowName: theChoiceMade,
        flowAmount: theCurrentValue,
        dateFlow: theDatePicked,
      };
      state.records.push(newRecord);
      console.log(state.records);
    },
  },
  // actions: {
  //   pushData(context) {
  //     context.commit("pushData");
  //     this.records.push(newRecord);
  //     console.log(state.records);
  //   },
  // },
  getters: {
    getData(state) {
      return state.records;
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/add", component: AddRecord },
    {
      path: "/",
      component: MainScreen,
      props: true,
    },
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

app.use(store);

app.use(router);

app.mount("#app");
