<template>
  <div class="container mx-auto flex-ctl px-2 md:px-0">
    <div class="mt-16">首頁 / 搜尋景點</div>
    <div class="mt-10 px-2 w-full grid grid-cols-4 gap-2">
      <Dropdown class="col-span-4 md:col-span-1"
                classPadding="px-4 py-2 md:py-4"
                :classBorder="classDDBorder"
                :classBgTextColor="classDDBgTextColor"
                v-model.number='selectedCountyID' :types='counties'/>
      <input type="text" class="col-span-4 md:col-span-2 px-4 py-2 md:py-4 border-main rounded focus:outline-none focus:border-main-500" placeholder="您想去哪裡？請輸入關鍵字" v-model="search">
      <button type="button" class="col-span-4 md:col-span-1 py-2 md:py-4 border-main rounded btn btn-main focus:outline-none focus:border-main-500 flex-rcc"
              @click="refreshScenicSpotList">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <span class="ml-2" style="letter-spacing: 1rem">搜尋</span>
      </button>
    </div>
    <div class="mt-16">
      <div class="text-2xl md:text-4xl text-gray-500">搜尋結果<span class="ml-2 text-base text-gray-400">共有 {{ nData }} 筆</span></div>
    </div>
    <!-- data list -->
    <template v-if="nData == 0">
      <div class="w-full p-20 flex-ccc">
        <img src="@/assets/breakfast/nofound80.svg" alt="查無資料">
        <div class="font-bold text-xl text-main-500 leading-normal mt-2">目前查無資料</div>
        <div class="font-bold text-xl text-main-500 leading-normal">請重新搜尋</div>
      </div>
    </template>
    <template v-else>
      <div class="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="col-span-1 rounded-b hover:-translate-y-2 hover:shadow-lg transform transition duration-500 ease-in-out cursor-pointer"
             v-for="scenicSpot in scenicSpotList" :key="scenicSpot.ID"
             @click="gotoScenicSpotDetail(scenicSpot.ID)">
          <div class="w-full h-48" v-if="scenicSpot.Picture">
            <!-- <img  :src="scenicSpot.Picture.PictureUrl1" alt=""> -->
            <div class="w-full h-full rounded bg-cover bg-center" :style="`background-image: url(${scenicSpot.Picture.PictureUrl1});`" alt="scenicSpot.Picture.PictureDescription1"/>
          </div>
          <div class="w-full h-48 rounded bg-main-500 bg-opacity-20 flex-ccc" v-else>
            <img src="@/assets/breakfast/icon-no-image.svg" alt="沒有圖片">
            <!-- <div class="w-full h-full rounded bg-main-500 bg-opacity-20" :style="`background-image: url(icon-no-image.svg)`" alt="沒有圖片"/> -->
          </div>
          <div class="mt-1 px-1 text-left text-xl font-bold">{{ scenicSpot.Name }}</div>
          <div class="flex-rlc p-1 pt-0">
            <img src="@/assets/breakfast/spot16.svg" alt="景點城市">
            <div>{{ scenicSpot.City }}</div>
          </div>
        </div>
      </div>
      <Pagination
        class="w-full mt-12 invisible"
        :currentPage='scenicSpotListCurrentPage'
        :totalPage='scenicSpotListTotalPage'
        :hasPrevPage='scenicSpotListHasPrevPage'
        :hasNextPage='scenicSpotListHasNextPage'
        @clickPrev='clickPrev'
        @clickNext='clickNext'
        @clickPage='clickPage'
      />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Dropdown from '@/components/Dropdown.vue';
import Pagination from '@/components/Pagination.vue';
import { Counties } from '@/utils/enums';
import { log } from '@/utils/message';

export default {
  name: 'SearchScenicSpots',
  components: {
    Dropdown,
    Pagination,
  },
  data() {
    return {
      counties: Counties,
      selectedCountyID: Object.keys(Counties)[0],

      search: '',
      perPage: 20,
    };
  },
  methods: {
    /**
     * router
     */
    gotoScenicSpotDetail(id) {
      this.setCurrentScenicSpot(id);
      this.$router.push({ name: 'scenicSpot', params: { id } });   // back to search page
    },

    /**
     * pagination
     */
    clickPrev() {
      this._getScenicSpotList(this.scenicSpotListCurrentPage - 1);
    },
    clickNext() {
      this._getScenicSpotList(this.scenicSpotListCurrentPage + 1);
    },
    clickPage(page) {
      this._getScenicSpotList(page);
    },
    refreshScenicSpotList() {
      this._getScenicSpotList(this.scenicSpotListCurrentPage);
    },
    _getScenicSpotList(page) {
      this.getScenicSpotList({
        county: this.selectedCountyID,
        search: this.search,
        page,
        perPage: this.perPage,
      }).then(() => {}).catch((msg) => {
        log(msg, true, false, false, true);
      });
    },

    ...mapActions('scenicspot', ['getScenicSpotList', 'setCurrentScenicSpot']),
  },
  computed: {
    /**
     * dropdown
     */
    classDDBorder() {
      return 'border border-gray-100';
    },
    classDDBgTextColor() {
      return 'bg-white text-main-500 hover:bg-main-500 focus:bg-main-500';
    },

    /**
     * ui display
     */
    nData() {
      return (this.scenicSpotList) ? this.scenicSpotList.length : 0;
    },

    ...mapGetters('scenicspot', ['scenicSpotList', 'scenicSpotListCurrentPage', 'scenicSpotListTotalPage', 'scenicSpotListHasPrevPage', 'scenicSpotListHasNextPage']),
  },
};
</script>

<style>

</style>
