<template>

    <div class="test">
      <div @click="tz">跳转</div>
      <div @click="ho">回首页</div>
    </div>

</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: "test",
    methods:{
      ...mapMutations(['SET_STATE']),

      tz(){
        this.SET_STATE({name:'whichname',val:'bounce'});
        this.$router.push({
          path:'/navs'
        })
      },
      ho(){
        this.SET_STATE({name:'whichname',val:'tz'});
        this.$router.push({
          path:'/'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .test {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    background: aqua;
  }

  
</style>
