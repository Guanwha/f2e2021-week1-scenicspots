<template>
  <div class="flex-ccc">
    <div class="w-full md:hidden">
      <div class="flex-rsbc">
        <a href="#" class="px-4 py-2 btn-pagi btn-pagi-bg btn-pagi-text">
          前一頁
        </a>
        <a href="#" class="ml-3 px-4 py-2 btn-pagi btn-pagi-bg btn-pagi-text">
          下一頁
        </a>
      </div>
    </div>
    <div class="w-full hidden sm:inline-flex">
      <nav class="w-full flex-rcc">
        <button class="px-2 py-2 btn-pagi btn-pagi-bg btn-pagi-text" aria-label="Previous"
                :disabled='!hasPrevPage'
                @click.prevent='clickPrev'>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button type='button'
                class="px-4 py-2 btn-pagi btn-pagi-bg btn-pagi-text"
                :class="{ 'active': (currentPage === page) }"
                v-for='page in pageNumbers' :key='page'
                @click.prevent='clickPage(page)'>
          {{ page }}
        </button>
        <button class="-ml-px px-2 py-2 btn-pagi btn-pagi-bg btn-pagi-text" aria-label="Next"
                :disabled='!hasNextPage'
                @click.prevent='clickNext'>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    totalPage: Number,
    hasPrevPage: Boolean,
    hasNextPage: Boolean,
  },
  methods: {
    clickPrev() {
      this.$emit('clickPrev');
    },
    clickNext() {
      this.$emit('clickNext');
    },
    clickPage(page) {
      this.$emit('clickPage', page);
    },
  },
  computed: {
    pageNumbers() {
      const pageNumbers = [];
      let startPage = 1;
      let endPage = 1;

      // find the start/end page number
      if (this.totalPage <= 5) {
        startPage = 1;
        endPage = this.totalPage;
      }
      else {
        if (this.currentPage - 2 < 1) {
          startPage = 1;
        }
        else if (this.currentPage - 2 > this.totalPage - 4) {
          startPage = this.totalPage - 4;
        }
        else {
          startPage = this.currentPage - 2;
        }

        endPage = (startPage + 4 > this.totalPage) ? this.totalPage : startPage + 4;
      }

      // generate the pageNumbers
      for (let i = 0, page = startPage; page <= endPage; i += 1, page += 1) {
        pageNumbers[i] = page;
      }

      return pageNumbers;
    },
  },
};
</script>

<style lang='scss' scoped>
// pagination button
.btn-pagi {
  @apply px-2;
  @apply py-2;
  @apply mx-2;
  @apply my-2;
  @apply rounded;
}
.btn-pagi-bg {
  @apply bg-white;
  &:hover:enabled, &.active:enabled {
    @apply bg-gray-400;
  }
}
.btn-pagi-text {
  @apply text-sm;
  @apply leading-5;
  @apply font-medium;
  &:hover:enabled, &.active:enabled {
    @apply text-white;
  }
  &:disabled {
    @apply text-gray-300;
  }
}
</style>
