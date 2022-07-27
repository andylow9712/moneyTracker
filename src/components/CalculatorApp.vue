<template>
    <div class="calculator">
        <div class="result"> 
            <input class="toLeft" type="text" :value="choiceMade">
            {{currentValue}}
        </div>
        <div class="content" @click="append('7')">7</div>
        <div class="content" @click="append('8')">8</div>
        <div class="content" @click="append('9')">9</div>
        <div class="content" > <input v-show="calendarShow" class="calendar"  type="date" id="submittedDate" v-model="datePicked"> </div>
        <div class="content" @click="append('4')">4</div>
        <div class="content" @click="append('5')">5</div>
        <div class="content" @click="append('6')">6</div>
        <div class="content" @click="add"> <img src="../assets/icon-plus.svg" alt="plus image"> </div>
        <div class="content" @click="append('1')">1</div>
        <div class="content" @click="append('2')">2</div>
        <div class="content" @click="append('3')">3</div>
        <div class="content" @click="subtract"> <img src="../assets/icon-minus.svg" alt="minus image"> </div>
        <div class="content" @click="onlyOneDot()">.</div>
        <div class="content" @click="append('0')">0</div>
        <div class="content" @click="reset"> <img src="../assets/icon-cancel.svg" alt="cancel image"> </div>
        <router-link to="/" class="content tick" @click="submitData()"> <img src="../assets/icon-tick.svg" alt="tick image"> </router-link>
    </div>
</template>

<script>
export default {
    props: ["choiceMade", "calendarShow", "flowType"],
    data() {
        return{
            theImage: "",
            beforeCal: null,
            currentValue: "",
            numberOperatorClicked: 0,
            operator: null,
            datePicked: ""
        };
    },
    methods:{
        reset(){
            this.currentValue="";
        },
        add(){
            this.operator = (a, b) => a + b;
            this.numberOperatorClicked++;
            if(this.numberOperatorClicked % 2 != 0){
                this.beforeCal = this.currentValue;
                this.currentValue = "";
            } else{
                this.currentValue = this.operator(parseFloat(this.beforeCal), parseFloat(this.currentValue));
            }
        },
        subtract(){
            this.operator = (a, b) => a - b;
            this.numberOperatorClicked++;
            if(this.numberOperatorClicked % 2 != 0){
                this.beforeCal = this.currentValue;
                this.currentValue = "";
            } else{
                this.currentValue = this.operator(parseFloat(this.beforeCal), parseFloat(this.currentValue));
            }
        },
        append(number){
            this.currentValue = this.currentValue + number;
        },
        onlyOneDot(){
            if(this.currentValue.indexOf(".") === -1){
                this.currentValue = this.currentValue + ".";
            }
        },
        submitData(){
            console.log(this.choiceMade, this.flowType, this.currentValue, this.datePicked);
            this.$store.commit({
                type: 'pushData',
                theImageChoice: this.choiceMade,
                theChoiceMade: this.choiceMade, 
                theFlowType: this.flowType, 
                theCurrentValue: this.currentValue, 
                theDatePicked: this.datePicked
            });
            console.log(this.theImageChoice, this.theChoiceMade, this.theCurrentValue, this.theDatePicked);
        }
    }
}
</script>

<style>
    .calculator{
        display: grid;
        grid-template-columns: repeat(4, 120px);
        grid-auto-rows: minmax(50px, auto);
        font-size: 17px;
    }
    .tick{
        background-color: orange;
    }
    .content{
        text-align: center;
        padding: 15px;
        
    }
    .result{
        grid-column: 1 / 5;
        font-size: 30px;
        border: 1px solid #EFFFFD;
        text-align: right;
    }
    .toLeft{
        position: absolute;
        left: 10px;
        margin-top: 15px;
        border: 0px;
        width: 150px;
    }
    .calendar{
        position: relative;
        left: -10px;
    }
</style>