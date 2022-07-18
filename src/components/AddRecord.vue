<template>
  <section> 
      <div class="head">
        <img class="headerImg" src="../assets/header.svg" alt="heading image">
        <h1 class="tofront">Add</h1>
      </div>
      
  <select-category @selection-data="choice" @calendar-visibility="view" @money-flow="flow"></select-category>
  <calculator-app :choiceMade = "type" :calendarShow = "calendarView" :flowType = "theFlow"></calculator-app>
    

  </section>
</template>

<script>
export default {
  data() {
    return{
      selectedCategory: "expenses-category",
      type:"",
      beforeCal: null,
      calendarView: "true",
      theFlow: "Expenses",
    }
  },
  methods:{
    setSelectedCategory(data){
            this.selectedCategory = data;
    },
    choice(receivedSelection){
      this.type = receivedSelection;
    },
    view(receivedData){
      this.calendarView = receivedData;
    },
    flow(receivedFlow){
      this.theFlow = receivedFlow;
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
    * {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

.head{
  position: relative;
  display: flex;
  justify-content: center;
}

.tofront{
 position: absolute;
 top: 50%;
 left: 220px;
 color: white;
 margin-top: -70px;
}

.headerImg{
  position: relative;
  margin-top: -350px;
}
</style>