<template>
    <div class="itemList">
        <div>
            <p class="moveLeft" >{{date}}</p>
        </div>
        <img class="item icon" :src="require(`../assets/icon-${iconImg}.svg`)" >
        <p class="item">{{type}}</p>
        <p class="item">{{name}}</p>
        <p class="item">{{amount}}</p>
    </div>
</template>

<script>
export default {
    props:['iconImg', 'type', 'name', 'amount', 'date'],
    methods:{
        imageSrc(image){
            return "../assets/icon-" + image + ".svg";
        }
    }
}

</script>

<style>
    .itemList{
        padding: 20px 20px 30px;
        border: solid black 1px;
        
    }
    .moveLeft{
        text-align: left;
    }
    .icon{
        float: left;
    }
    .item{
        display: inline-block;
        position: relative;
    }
    
</style>