<template>

    <div class="navs">
      <div class="ss" @click="back">
        返回
      </div>
    </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'

  export default {
    name: "navs",
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['SET_STATE']),
      back() {
        this.SET_STATE({name:'whichname',val:'tz'});
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .navs {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    background: greenyellow;
  }
  
</style>
