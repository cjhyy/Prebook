<template>
<div > 
    <div v-show="click" @click="changeAns()" style="background:grey;width:100%;height:60px;">

    </div>
    <div v-show="!click">
      <slot>
       暂时没有答案
      </slot>
    </div>

</div>
</template>
<script>
export default {
    data(){
        return {
            click:true
        }
       
    },
    methods:{

    changeAns(){
      if (this.click){
         this.click=false
      }
    }

    }

    
}
</script>