<template>
    <div class="summary">
        <div>Income</div>
        <div>Overall</div>
        <div>Expenses</div>
        
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
    .summary{
        display: grid;
        grid-template-columns: repeat(3, 120px);
        grid-auto-rows: minmax(50px, auto);
        font-size: 17px;
        position: relative;
        left: 80px;
    }
</style>