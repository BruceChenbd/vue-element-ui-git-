<template>
  <div class="home">
     <mt-header fixed title="驾考宝典"></mt-header>
      
  </div>
</template>

<script>
import {getTitle} from '../services/sevice';
import { appkey } from '../utils/baogeAppkey';
export default {
  name: 'Home',
  data () {
    return {
       type:'',
       subject:'',
       pagenum:'',
       sort:'',
       chapter:'',
    }
  },
  created(){
     getTitle(appkey).then((res)=>{
       console.log(res)
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
