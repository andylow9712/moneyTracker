<template>

    <div class="groupButton">
        <button class="flowButton" @click="selectedMoneyFlow('Expenses')">Expenses</button>
        <button class="flowButton"  @click="selectedMoneyFlow('Income')">Income</button>
    </div>

    <h5> {{moneyFlow}} Categories: </h5>
    <div class = "category">
        <div @click="selection('investment')">
            <img src="../assets/icon-investment.svg" alt="investment icon" >
            <p>Investment</p>
        </div>
        <div @click="selection('business')">
            <img src="../assets/icon-money.svg" alt="money icon" >
            <p>Business</p>
        </div>
        <div class="categoryDropdown" @click="displayDropdown" >
            <img src="../assets/icon.svg" alt="add category icon">
            <p>add category</p>
            <span>
                <div class="dropdownContent" v-show="visibility">
                    <div @click="selection('Car Installment')">
                        <img src="../assets/icon-car.svg" alt="car icon">
                        <p>Car Installment</p>
                    </div>
                    <div @click="selection('Baby Care')">
                        <img src="../assets/icon-child.svg" alt="baby icon">
                        <p>Baby Care</p>
                    </div>
                    <div @click="selection('Food')">
                        <img src="../assets/icon-food.svg" alt="food icon">
                        <p>Food</p>
                    </div>
                    <div @click="selection('Home Installment')">
                        <img src="../assets/icon-home.svg" alt="home icon">
                        <p>Home Installment</p>
                    </div>
                    <div @click="selection('Insurance')">
                        <img src="../assets/icon-umbrella.svg" alt="umbrella icon">
                        <p>Insurance</p>
                    </div>
                </div>
            </span>
        </div>
    </div>
    
</template>

<script>
export default {
    emits:["selection-data", "calendar-visibility", "money-flow"],
    data() {
        return{
            visibility: false,
            calendarVisibility: true,
            moneyFlow: "Expenses",
        }
    },
    methods: {
        selection(choice){
            this.$emit("selection-data", choice);
        },
        displayDropdown(){
            this.visibility = !this.visibility;
            this.calendarVisibility = !this.calendarVisibility;
            this.$emit("calendar-visibility", this.calendarVisibility);
        },
        selectedMoneyFlow(flowChosen){
            this.moneyFlow = flowChosen;
            this.$emit("money-flow", this.moneyFlow);
        }
    }
}
</script>

<style>
.category{
    position: relative;
    left: 20px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 146px);
    grid-auto-rows: minmax(50px, auto);
}

p{
    margin: 0px;
}

.dropdownContent{
    position: relative;
    top: 10px;
    background-color: #f1f1f1;
}

.dropdownContent span {
    position: absolute;
}

h5{
    text-align: left;
}

.groupButton{
    margin: 0px;
    border-radius: 10%;
    max-width: 80%;
    height: 50px;
    padding-left: 100px;
}

.flowButton{
    width: 50%;
    height: 100%;
}

center{
    position: relative;
    top: -25px;
}
</style>