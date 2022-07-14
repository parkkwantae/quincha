<template>
  <movie-detail-info
    :movieid="this.$route.params.movieInfo"
  ></movie-detail-info>
</template>

<script>
import movieDetailInfo from "@/components/movieDetailInfo.vue";

export default {
  components: {
    movieDetailInfo,
  },
};
</script>
