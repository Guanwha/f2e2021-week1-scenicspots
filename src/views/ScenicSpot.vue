<template>
  <div class="container mx-auto flex-ctl px-2 md:px-0">
    <!-- breadcrumbs -->
    <div class="mt-16">{{ displayBreadcrumbs }}</div>
    <!-- picture -->
    <div class="mt-8 w-full h-96" v-if="curScenicSpot.Picture && curScenicSpot.Picture.PictureUrl1">
      <div class="w-full h-full rounded bg-cover bg-center" :style="`background-image: url(${curScenicSpot.Picture.PictureUrl1});`" alt="scenicSpot.Picture.PictureDescription1"/>
    </div>
    <div class="mt-8 w-full h-96 rounded bg-main-500 bg-opacity-20 flex-ccc" v-else>
      <img src="@/assets/breakfast/icon-no-image.svg" alt="沒有圖片">
      <!-- <div class="w-full h-full rounded bg-main-500 bg-opacity-20" :style="`background-image: url(icon-no-image.svg)`" alt="沒有圖片"/> -->
    </div>
    <!-- title -->
    <div class="mt-8 text-4xl" v-if="curScenicSpot.Name">{{ curScenicSpot.Name }}</div>
    <!-- tags -->
    <!-- description -->
    <div class="mt-8 text-left" v-if="curScenicSpot.DescriptionDetail">
      <div class="font-bold">景點介紹：</div>
      <div class="mt-2">{{ curScenicSpot.DescriptionDetail }}</div>
    </div>
    <!-- detail -->
    <div class="mt-8 w-full h-40 md:h-80 rounded-lg border-main-500 bg-main-500 bg-opacity-20 flex-ccc">Coming Soon...</div>
    <!-- others -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ScenicSpot',
  data() {
    return {
      curScenicSpotID: 0,
    };
  },
  created() {
    this.curScenicSpotID = this.$route.params.id;

    if (!this.curScenicSpot) {
      if (this.curScenicSpotID) {
        this.setCurrentScenicSpot(this.curScenicSpotID);
        if (!this.curScenicSpot) {
          this.$router.push({ name: 'searchScenicSpots' });   // back to search page
        }
      }
      else {
        this.$router.push({ name: 'searchScenicSpots' });   // back to search page
      }
    }
  },
  methods: {
    ...mapActions('scenicspot', ['setCurrentScenicSpot']),
  },
  computed: {
    /**
     * ui display
     */
    displayBreadcrumbs() {
      let breakcrumbs = '首頁 / 搜尋景點';
      if (this.curScenicSpot) {
        if (this.curScenicSpot.City) {
          breakcrumbs += ` / ${this.curScenicSpot.City}`;
        }
        if (this.curScenicSpot.Name) {
          breakcrumbs += ` / ${this.curScenicSpot.Name}`;
        }
      }
      return breakcrumbs;
    },

    ...mapGetters('scenicspot', ['curScenicSpot']),
  },
};
</script>

<style>

</style>
