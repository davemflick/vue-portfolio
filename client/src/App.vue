<template>
  <div>
    <app-header></app-header>
    <br>
   <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  components:{
    'app-header': Header
  }
}

</script>

<style>
/*Default stylings*/
a{
  outline: none;
  color: #000;
}
</style>
