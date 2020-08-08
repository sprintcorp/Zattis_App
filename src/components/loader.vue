<template>
    <div class="center">  
        <b-spinner variant="info" label="Spinning"></b-spinner> <br>loading...        
    </div>
</template>

<style scoped>
    .center {
    padding: 15% 0;
    text-align: center;
    }
</style>

<script>
  export default {
    name: 'Circular_Loader',
      data(){
        return{

        }
    }
  }
</script>