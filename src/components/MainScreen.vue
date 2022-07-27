<template>
  <section>
      <div class="head">
        <img class = "headImg" src="../assets/header.svg" alt="header image">
      </div>

    <taskbar-menu></taskbar-menu>
    <money-summary></money-summary>
    <track-list v-for="record in theList"
    :key="record.iconImg"
    :iconImg="record.iconImage"
    :type="record.flowType"
    :name="record.flowName"
    :amount="record.flowAmount"
    :date="record.dateFlow"
    ></track-list>
    <router-link to="/add"> <img  class = "addImg" src="../assets/icon-add.svg" alt="add image"> </router-link>
    
  </section>
</template>

<script>
  export default {
    computed:{
      theList(){
        return this.$store.getters['getData'];
      }
    }
  }
</script>

<style>
.head{
  position: relative;
}

header{
  height: 60px;
}

body{
  position: relative;
  margin: 0;
  padding: 10px;
  text-align: center;
  max-width: 500px;
  width: 90%;
}

.headImg{
  position: relative;
  margin-top: -400px;
  left: 30px;
}

.addImg{
  position: fixed;
  bottom: 0;
  left: 210px;
}

</style>
