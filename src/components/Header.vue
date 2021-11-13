<template>
  <div class="w-full sticky top-0">
    <!-- desktop version -->
    <div class="hidden md:block">
      <div class="flex-rsbc px-4 border-b">
        <!-- header logo -->
        <img class="" src="@/assets/breakfast/Logo-desktop.svg" alt="">
        <!-- right: desktop menu -->
        <ul class="flex">
          <li :class="classItemDesktop()" @click="gotoPage()">探索景點</li>
          <li :class="classItemDesktop()" @click="gotoPage()">節慶活動</li>
          <li :class="classItemDesktop()" @click="gotoPage()">品嚐美食</li>
        </ul>
      </div>
    </div>
    <!-- mobile version -->
    <div class="md:hidden">
      <div class="flex-rrc relative border-b">
        <!-- header logo -->
        <img class="absolute-center" src="@/assets/breakfast/Logo-mobile.svg" alt="">
        <!-- right: mobile menu button -->
        <img class="m-2 icon" src="@/assets/breakfast/menu-mobile.svg" alt="" @click.self.stop="openPopMenu()">
        <!-- right: pop menu -->
        <div :class="[(showPopMenu) ? 'block' : 'hidden']"
              class="absolute top-0 right-0">
          <!-- <div class="absolute top-0 right-0 w-screen h-screen backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200"> -->
          <!-- <div class="absolute top-0 right-0 w-screen h-screen bg-green-300"> -->
            <div class="w-auto p-2 flex-ctr bg-white shadow rounded-bl-3xl">
              <!-- pop menu header -->
              <div class="w-full flex-rsbc">
                <img src="@/assets/breakfast/Logo-mobile.svg" alt="" class="p-2">
                <img src="@/assets/breakfast/menu-mobile-close.svg" alt="" @click.self.stop="closePopMenu()">
              </div>
              <!-- pop menu items -->
              <ul class="flex-ccc">
                <li :class="classItemBgText()" @click="gotoPage()">首頁</li>
                <hr>
                <li :class="classItemBgText()" @click="gotoPage()">探索景點</li>
                <hr>
                <li :class="classItemBgText()" @click="gotoPage()">節慶活動</li>
                <hr>
                <li :class="classItemBgText()" @click="gotoPage()">品嚐美食</li>
              </ul>
              <div class="h-4"></div>
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  components: {
  },
  props: {
  },
  data() {
    return {
      showPopMenu: false,
    };
  },
  methods: {
    openPopMenu() {
      this.showPopMenu = true;
      this.showFrostedGlass(true);
    },
    closePopMenu() {
      this.showPopMenu = false;
      this.showFrostedGlass(false);
    },

    /**
     * router
     */
    gotoPage() {},

    /**
     * classes
     */
    classNav() {
      return 'bg-white';
    },
    classItemDesktop() {
      return 'p-6 text-main cursor-pointer';
    },
    // classItemBgText(navbarItemType) {
    classItemBgText() {
      const classStr = 'py-6 px-20 text-main cursor-pointer';

      // hover & selected
      // if (this.curOrgID > 0) {  
      //   classStr += `hover:bg-${this.org}-sec-500 hover:text-${this.org}-sec-inv`;
      //   if (navbarItemType === this.navbarItemType) {
      //     classStr += ` bg-${this.org}-sec-500 text-${this.org}-sec-inv`;
      //   }
      // }
      // else {
      //   classStr = '';
      // }

      return classStr;
    },

    ...mapActions(['showFrostedGlass']),
  },
  computed: {
  },
};
</script>

<style lang='scss' scoped>
.frosted-glass {
  @apply backdrop-filter;
  @apply backdrop-grayscale;
  @apply backdrop-blur-md;
  @apply backdrop-contrast-200;
}
</style>
