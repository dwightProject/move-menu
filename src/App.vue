<template>
  <div id="app">
    <transition :name="whichname">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'App',
    data() {
      return{
        pathsname:''
      }
    },
    computed:{
      ...mapGetters(['whichname'])
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .bounce-enter-active {
    animation: bounce-in 1s ease-in-out;
  }

  .bounce-leave-active {
    animation: bounce-in2 1s ease-in-out;
  }

  @keyframes bounce-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }

  @keyframes bounce-in2 {
    0% {
      transform: translate3d(0%, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .tz-enter-active {
    animation: tz-in 1s ease-in-out;
  }

  .tz-leave-active {
    animation: tz-in2 1s ease-in-out;
  }

  @keyframes tz-in {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }

  @keyframes tz-in2 {
    0% {
      transform: translate3d(0%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }

  .back-enter-active {
    animation: back-in 1s ease-in-out;
  }

  .back-leave-active {
    animation: back-in2 1s ease-in-out;
  }

  @keyframes back-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }

  @keyframes back-in2 {
    0% {
      transform: translate3d(280px, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>
