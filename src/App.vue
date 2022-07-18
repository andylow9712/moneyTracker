<template>
  <main>
    <router-view  @money-record="addNewRecord" :theRecord="records"></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return{
      records:[
        {iconImage: 'money', flowType: 'Income', flowName: 'Dividens', flowAmount: '250', dateFlow: '2 May 2020'},
        {iconImage: 'car', flowType: 'Expenses', flowName: 'Car Installment', flowAmount: '-100', dateFlow: '2 May 2020'}
      ],

      iconImage: "",
      flowType: "",
      flowName: "",
      flowAmount: "",
      dateFlow: ""
    }
  },
  // provide(){
  //   return{
  //     recordings: this.records,
  //   }
  // },
  methods:{
    addNewRecord(choice, flow, value, date){
      const newRecord = {
        iconImage: choice,
        flowType: flow,
        flowName: choice,
        flowAmount: value,
        dateFlow: date,
      };
      this.records.push(newRecord);
    }
  }
}
</script>

<style>


</style>
