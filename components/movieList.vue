<template>
  <div class="listWrap">
    <div class="list" v-for="item in this.categoryListData" :key="item.id">
      <movie-card :moviedata="item"></movie-card>
    </div>
  </div>
</template>

<script>
import movieCard from "@/components/movieCard.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["categoryListData"]),
  },

  components: {
    movieCard,
  },
};
</script>

<style scoped>
.listWrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
}
</style>
