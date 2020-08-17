<template>
    <div>
        <b-button variant="info" disabled>
            <b-spinner small type="grow"></b-spinner>
            <slot></slot>
        </b-button>
    </div>
</template>

<script>
  export default {
    name: 'Button_Loader',
      data(){
        return{

        }
    }
  }
</script>