<template>
  <div class="container mx-auto flex-ccc">
    <!-- search area -->
    <div class="w-full flex-rsbc">
      <div class="flex-ccl pl-24 py-20">
        <div class="text-5xl text-gray-500 leading-normal">探索<span class="underline">台灣之美</span></div>
        <div class="text-5xl text-gray-500 leading-normal">讓我們更親近這片土地</div>
        <div class="pt-4 flex-rlc">
          <img src="@/assets/breakfast/spot24_Y.svg" alt="">
          <div class="ml-1 font-bold text-xl text-gray-400">台灣旅遊景點導覽 Taiwan Travel Guide</div>
        </div>
      </div>
      <div class="flex-ccc">
        <Dropdown class="w-96"
                  classPadding="px-4 py-2 md:py-4"
                  :classBorder="classDDBorder"
                  :classBgTextColor="classDDBgTextColor"
                  v-model.number='selectedSearchTypeID' :types='searchTypesText'/>
        <div class="w-96 mt-2">
          <input type="text" class="w-full px-4 py-2 md:py-4 border-main rounded focus:outline-none focus:border-main-500" placeholder="您想去哪裡？請輸入關鍵字" v-model="search">
          <button type="button" class="w-full mt-2 py-2 md:py-4 border-main rounded btn btn-main flex-rcc">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <span class="ml-2" style="letter-spacing: 1rem">搜尋</span>
          </button>
        </div>
      </div>
    </div>
    <!-- hero -->
    <div class="w-full h-96 rounded-lg border-main-500 bg-main-500 bg-opacity-20 flex-ccc">Coming Soon...</div>
    <!-- 近期活動 -->
    <div class="w-full mt-9 flex-ctl">
      <div class="text-4xl text-gray-500 leading-normal">近期活動</div>
      <div class="w-full h-80 rounded-lg border-main-500 bg-main-500 bg-opacity-20 flex-ccc">Coming Soon...</div>
    </div>
    <!-- 熱門打卡景點 -->
    <div class="w-full mt-9 flex-ctl">
      <div class="text-4xl text-gray-500 leading-normal">熱門打卡景點</div>
      <div class="w-full h-80 rounded-lg border-main-500 bg-main-500 bg-opacity-20 flex-ccc">Coming Soon...</div>
    </div>
    <!-- 一再回訪的美食 -->
    <div class="w-full mt-9 flex-ctl">
      <div class="text-4xl text-gray-500 leading-normal">一再回訪的美食</div>
      <div class="w-full h-80 rounded-lg border-main-500 bg-main-500 bg-opacity-20 flex-ccc">Coming Soon...</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dropdown from '@/components/Dropdown.vue';
import { SearchTypesText } from '@/utils/enums';

export default {
  name: 'Home',
  components: {
    Dropdown,
  },
  data() {
    return {
      searchTypesText: SearchTypesText,
      selectedSearchTypeID: 1,

      search: '',
    };
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
     * search input
     */
    classInputBorder() {
      return 'border-main-500';
    },
    classBtnSearch() {
      return 'btn-main-500';
    },
    classBtnSearchBorder() {
      return 'border-main-500';
    },
  },
};
</script>

<style lang="scss">
< /style>
