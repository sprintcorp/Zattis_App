<template>
    <div>
        <b-container>
            <b-card class="text-center" style="background:#f5f5f5;border:0px" title="Zattis Properties">
                <b-card-text>
                    <slot></slot>
                </b-card-text>
                
            </b-card>
        </b-container>
    </div>
</template>


<script>
  export default {
    name: 'NoContent',
      data(){
        return{

        }
    }
  }
</script>