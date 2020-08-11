<template>
    <div class="center">  
        <b-spinner variant="info" label="Spinning" type="grow"></b-spinner> <br>loading...        
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
    name: 'Grow_Loader',
      data(){
        return{

        }
    }
  }
</script>