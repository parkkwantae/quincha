<template>
  <div id="main">
    <div class="categoryWrap">
      <category-button :propsdata="{ name: '전체', type: 'all' }">
      </category-button>
      <category-button :propsdata="{ name: '영화', type: 'movie' }">
      </category-button>
      <category-button :propsdata="{ name: 'TV', type: 'tv' }">
      </category-button>
    </div>

    <movie-list></movie-list>
  </div>
</template>

<script>
import categoryButton from "@/components/categoryButton.vue";
import movieList from "@/components/movieList.vue";

export default {
  data() {
    return {
      selected: "전체",
    };
  },

  components: {
    categoryButton,
    movieList,
  },
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 100vh;
}

.categoryWrap {
  width: 100%;
  display: flex;
}
</style>
