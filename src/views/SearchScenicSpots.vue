<template>
  <div class="container mx-auto flex-ctl px-2 md:px-0">
    <div class="mt-16">首頁 / 搜尋景點</div>
    <div class="mt-10 px-2 w-full grid grid-cols-4 gap-2">
      <Dropdown class="col-span-4 md:col-span-1"
                classPadding="px-4 py-2 md:py-4"
                :classBorder="classDDBorder"
                :classBgTextColor="classDDBgTextColor"
                v-model.number='selectedCountyID' :types='searchTypesText'/>
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
      <!-- [TODO] -->
      <div>{{ scenicSpotList }}</div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Dropdown from '@/components/Dropdown.vue';
import { SearchTypesText } from '@/utils/enums';
import { log } from '@/utils/message';

export default {
  name: 'SearchScenicSpots',
  components: {
    Dropdown,
  },
  data() {
    return {
      searchTypesText: SearchTypesText,
      selectedCountyID: 1,
      search: '',
      perPage: 3,
    };
  },
  methods: {
    // pagination
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
        page,
        perPage: this.perPage,
        search: this.search,
      }).then(() => {}).catch((msg) => {
        log(msg, true, false, false, true);
      });
    },

    ...mapActions('scenicspot', ['getScenicSpotList']),
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

    ...mapGetters('scenicspot', ['scenicSpotList', 'scenicSpotListCurrentPage']),
  },
};
</script>

<style>

</style>
