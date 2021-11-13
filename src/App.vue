<template>
  <div id="app">
    <Header class="z-10"/>  <!-- must be above frosted-glass -->
    <div class="absolute top-20 bottom-0 w-full overflow-y-auto">
      <router-view/>
      <div :class="[ (isShowFrostedGlass) ? 'frosted-glass': '' ]"></div>
      <Footer class="mt-16"/>  <!-- must be above frosted-glass -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
