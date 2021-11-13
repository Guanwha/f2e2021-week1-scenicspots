<template>
  <div id="app">
    <Header class="z-10"/>  <!-- must be above frosted-glass -->
    <div class="relative">
      <router-view/>
      <div :class="[ (isShowFrostedGlass) ? 'frosted-glass': '' ]"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['isShowFrostedGlass']),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.frosted-glass {
  @apply w-full;
  @apply h-full;
  @apply absolute;
  @apply top-0;
  @apply left-0;
  backdrop-filter: blur(2px);
}
</style>
