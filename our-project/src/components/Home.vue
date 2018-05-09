<template>
  <div class="home">
     <mt-header fixed title="驾考宝典"></mt-header>
      <ul id="title1" data-subject="1">
        <li>科目一</li>
        <li data-sort="normal" @click="getData">正常练习</li>
        <li data-sort="rand">随机联系</li>
      </ul>
      <ul id="title2" data-subject="4">
        <li>科目四</li>
        <li data-sort="normal">正常练习</li>
        <li data-sort="rand">随机联系</li>
      </ul>
      <div id="showTitle" v-if="list" v-for="item in list" :key="item.answer">
          <h5><span v-text="pagenum"></span>/<span v-text="total"></span>.{{item.question}}</h5>
          <p><input type="radio" name="choose"><label for="">{{item.option1}}</label></p>
          <p><input type="radio" name="choose"><label for="">{{item.option2}}</label></p>
          <p><input type="radio" name="choose"><label for="">{{item.option3}}</label></p>
          <p><input type="radio" name="choose"><label for="">{{item.option4}}</label></p>
          <p class="nextAndPrev"><span :pagenum="pagenum" class="prev">上一题</span><span :pagenum="pagenum" class="next">下一题</span></p>
      </div>
      <div v-else>

      </div>
  </div>
</template>

<script>
import {getTitle} from '../services/sevice';
import { appkey } from '../utils/baogeAppkey';
export default {
  name: 'Home',
  data () {
    return {
       type:'C1',
       subject:'',
       pagenum:'',
       total:'',
       sort:'',
       chapter:'',
       list:[],
    }
  },
  methods:{
      getData(event){
       var sor = event.target.getAttribute('data-sort');
       var sub = event.target.parentNode.getAttribute('data-subject');
       getTitle(
         'C1',
          sub,
         '10',
          '2',
          sor,
       ).then((res)=>{
         console.log(res)
         this.list = res.data.result.list;
         this.pagenum = res.data.result.pagenum;
         this.total =  res.data.result.total;
       })
      }
  },
  created(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  width: 90%;
  margin: 10px auto;
  padding: 0;
  list-style: none;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 14px;
}
ul >li{
  width: 30%;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
}
ul>li:hover{
  background: lightblue;
}
ul li:nth-child(1),li:nth-child(2){
  border-right: 1px solid lightgray;
}
ul li:nth-child(1){
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: firebrick
}
ul li:nth-child(2){
  color: goldenrod;
}
ul li:nth-child(3){
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: dodgerblue;
}
#title1{
  margin-top: 50px;
}
#showTitle{
  width: 80%;
  margin: 50px auto;
  border-radius:15px;
  padding: 5px 10px;
  border: 1px solid dodgerblue;
}
.nextAndPrev{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.nextAndPrev span{
  display:inline-block;
  padding: 2px 10px;
  border: 1px solid lightgray;
}
.nextAndPrev .prev{
  
}
</style>
