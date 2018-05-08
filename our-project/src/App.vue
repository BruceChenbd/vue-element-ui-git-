<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页" @click.native="change({ name: 'Home' })">
       <i class="fa fa-home" slot="icon"></i>
       首页
      </mt-tab-item>
      <mt-tab-item id="订单" @click.native="change({ name: 'Order' })">
       <i class="fa fa-file-text-o txt" slot="icon"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现" @click.native="change({ name: 'Find' })">
        <i class="fa fa-search txt" slot="icon"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="change({ name: 'Mine' })">
        <i class="fa fa-user-circle txt" slot="icon"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>

export default {
  name: "App",
  data(){
    return{
      selected:'首页'
    }
  },
    methods: {
    change(val) {
      this.$router.push(val)
    }
  }
};
</script>

<style>
#app {
 
}
</style>
