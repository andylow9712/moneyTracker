<template>
    <div class = "taskbar">
        <img class="hamburger" src="../assets/icon-hamburger.svg" alt="hamburger image">
        <select name="month" id="month" v-model="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
        <img class="profileImg" src="../assets/profile.png" alt="profile image">
    </div>
</template>

<script>
export default {
    data() {
        return{
            month: 'January',
        }
    },
}
</script>

<style>
.taskbar{
    position: relative;
    height: 50px;
    top: -30px;
}

.hamburger{
    position: absolute;
    top: 15px;
    left: 10px;
}

#month{
    border-style: none;
    position: absolute;
    left: 210px;
    top: 10px
}

.profileImg{
    position: absolute;
    top: 8px;
    right: 10px
}
</style>