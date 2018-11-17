<template>
  <div class="hello" :class="{active:showm}">
    <div class="menu">

      <ul>
        <li  v-for="(item,index) in [1,2,3,4,5,6]":key="index" @click="ss" >{{item}}</li>
      </ul>
    </div>

    <div class="content">
       <button @click="show">菜单</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        showm:false,
        pathsname:''
      }
    },
    methods:{
      ...mapMutations(['SET_STATE']),

      show(){
        this.showm = !this.showm

      },
      ss(){
        this.showm = !this.showm

        this.SET_STATE({name:'whichname',val:'back'});
        this.$router.push({
          path:'/test'
        })
      }
    },
    watch:{
      $route(to,from){
        console.log(123)

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    position: fixed;
    left: 0;
    top: 0;
    right: 0px;
    bottom: 0px;
    margin: auto;
    background: #ccc;
    transition: all 0.5s ease-in-out;
    .menu {
      width: 280px;
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      margin: auto;
      background: antiquewhite;
      transform: translate3d(-100%, 0, 0);
      li{
        height: 50px;
        margin-bottom: 10px;
        background:black;
      }
    }
    .content{
      position: absolute;
      left: 0;
      top: 0;
      right: 0px;
      bottom: 0px;
      margin: auto;
      background: saddlebrown;
      button{
        width: 100px;
        height: 50px;
        background: white;
        position: absolute;
        left: 0px;
        top: 0px;
      }
    }

    &.active{
      transform: translate3d(280px,0,0);
    }
  }

</style>
