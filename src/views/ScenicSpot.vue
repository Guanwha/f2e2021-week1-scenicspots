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
    <div class="flex-rlc">
      <div v-for="(scenicSpotClass, idx) in scenicSpotClasses" :key="idx"
           class="mr-2 rounded-full border border-tag-500 text-tag-500 leading-tight px-4 py-1 select-none">
        # {{ scenicSpotClass }}
      </div>
    </div>
    <!-- description -->
    <div class="mt-8 text-left" v-if="curScenicSpot.DescriptionDetail">
      <div class="font-bold">景點介紹：</div>
      <div class="mt-2">{{ curScenicSpot.DescriptionDetail }}</div>
    </div>
    <!-- detail -->
    <div class="mt-8 w-full grid grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1 rounded-lg border-main-500 bg-main-500 bg-opacity-10 flex-csbc px-4 py-4 md:py-8">
        <ul class="w-full grid grid-cols-4 gap-2">
          <li class="detail-label">開放時間：</li>
          <li class="detail-content">{{ displayOpenTime }}</li>
          <li class="detail-label">服務電話：</li>
          <li class="detail-content" v-html="displayPhone"></li>
          <li class="detail-label">景點地址：</li>
          <li class="detail-content">{{ displayAddress }}</li>
          <li class="detail-label">官方網站：</li>
          <li class="detail-content" v-html="displayWebsiteUrl"></li>
          <li class="detail-label">票價資訊：</li>
          <li class="detail-content">{{ displayTicketInfo }}</li>
          <li class="detail-label">注意事項：</li>
          <li class="detail-content">{{ displayRemarks }}</li>
        </ul>
      </div>
      <template v-if="hasLatLong">
        <div class="col-span-2 md:col-span-1 flex-ctc">
          <MapLeaflet class="rounded-lg" :lat="curScenicSpot.Position.PositionLat" :long="curScenicSpot.Position.PositionLon"/>
          <div class="mt-4 w-full text-left font-bold">周邊資訊：</div>
          <div class="mt-4 w-full grid grid-cols-3 gap-4">
            <button type="button" class="btn-info md:flex-ccc" @click="comingsoong()">
              <div class="icon scene"></div>
              <div class="text">附近景點</div>
            </button>
            <button type="button" class="btn-info md:flex-ccc" @click="comingsoong()">
              <div class="icon event"></div>
              <div class="text">附近活動</div>
            </button>
            <button type="button" class="btn-info md:flex-ccc" @click="comingsoong()">
              <div class="icon food"></div>
              <div class="text">附近美食</div>
            </button>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="col-span-2 md:col-span-1 h-40 md:h-80 rounded-lg border-main-500 bg-main-500 bg-opacity-10 flex-ccc">Coming Soon...</div>
      </template>
    </div>
    <!-- others -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MapLeaflet from '@/components/MapLeaflet.vue';
import { log } from '@/utils/message';

export default {
  name: 'ScenicSpot',
  components: {
    MapLeaflet,
  },
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
    comingsoong() {
      log('敬請期待...', false, false, true);
    },

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
    displayOpenTime() {
      return (this.curScenicSpot && this.curScenicSpot.OpenTime) ? this.curScenicSpot.OpenTime : '未提供';
    },
    displayPhone() {
      return (this.curScenicSpot && this.curScenicSpot.Phone) ? `<a href="tel:${this.curScenicSpot.Phone}">${this.curScenicSpot.Phone}</a>` : '未提供';
    },
    displayAddress() {
      return (this.curScenicSpot && this.curScenicSpot.Address) ? this.curScenicSpot.Address : '未提供';
    },
    displayWebsiteUrl() {
      return (this.curScenicSpot && this.curScenicSpot.WebsiteUrl) ? `<a class="truncate block" href="${this.curScenicSpot.WebsiteUrl}" target="_blank" title="${this.curScenicSpot.WebsiteUrl}">${this.curScenicSpot.WebsiteUrl}</a>` : '未提供';
    },
    displayTicketInfo() {
      return (this.curScenicSpot && this.curScenicSpot.TicketInfo) ? this.curScenicSpot.TicketInfo : '未提供';
    },
    displayRemarks() {
      return (this.curScenicSpot && this.curScenicSpot.Remarks) ? this.curScenicSpot.Remarks : '未提供';
    },
    hasLatLong() {
      return (this.curScenicSpot && this.curScenicSpot.Position && this.curScenicSpot.Position.PositionLat && this.curScenicSpot.Position.PositionLon);
    },
    scenicSpotClasses() {
      const classes = [];
      if (this.curScenicSpot) {
        if (this.curScenicSpot.Class1) {
          classes.push(this.curScenicSpot.Class1);
        }
        if (this.curScenicSpot.Class2) {
          classes.push(this.curScenicSpot.Class2);
        }
        if (this.curScenicSpot.Class3) {
          classes.push(this.curScenicSpot.Class3);
        }
      }
      return classes;
    },

    ...mapGetters('scenicspot', ['curScenicSpot']),
  },
};
</script>

<style lang='scss' scoped>
.detail-label {
  @apply col-span-1;
  @apply font-bold;
  @apply text-right;
}
.detail-content {
  @apply col-span-3;
  @apply text-left;
}
.btn-info {
  @apply col-span-1;
  @apply p-4;
  @apply border;
  @apply rounded;
  @apply cursor-pointer;
  @apply transform;
  @apply transition-all;
  @apply duration-300;
  .icon {
    @apply w-8;
    @apply h-8;
    @apply transform;
    @apply transition-all;
    @apply duration-300;
  }
  .scene {
    background-image: url(../assets/breakfast/nearby-scene30.svg);
  }
  .event {
    background-image: url(../assets/breakfast/nearby-event30.svg);
  }
  .food {
    background-image: url(../assets/breakfast/nearby-food30.svg);
  }
  .text {
    @apply text-gray-500;
    @apply font-bold;
  }
  &:hover {
    @apply border-main-500;
    .scene {
      background-image: url(../assets/breakfast/nearby-scene30_hover.svg);
    }
    .event {
      background-image: url(../assets/breakfast/nearby-event30_hover.svg);
    }
    .food {
      background-image: url(../assets/breakfast/nearby-food30_hover.svg);
    }
    .text {
      @apply text-main-500;
    }
  }
}
</style>
