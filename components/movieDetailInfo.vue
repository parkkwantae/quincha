<template>
  <div class="wrap">
    <div class="infoWrap">
      <div class="imgWrap">
        <img :src="imgUrl" alt="poster" class="poster" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.title }}</h1>
        <ul class="etcInfo">
          <li>{{ data.release_date }}</li>
          <li>
            <span v-for="item in data.genres" :key="item.id"
              >{{ item.name }}
            </span>
          </li>
          <li>{{ data.runtime }}분</li>
        </ul>
        <p class="content">{{ data.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { image_url } from "@/plugins/axios";
import { mapActions, mapState } from "vuex";

export default {
  props: ["movieid"],
  data() {
    return {
      data: "",
      imgUrl: "",
    };
  },

  async fetch() {
    await this.getMovieDetailInfo(this.movieid);
    this.data = this.selectedMovieInfo;
    this.imgUrl = `${image_url}${this.data.poster_path}`;
  },

  computed: {
    ...mapState(["selectedMovieInfo"]),
  },

  methods: {
    ...mapActions(["getMovieDetailInfo"]),
  },
};
</script>

<style scoped>
.wrap {
  max-width: 1000px;
  margin: 0 auto;
  color: white;
}
.infoWrap {
  display: flex;
}
.imgWrap {
  flex-basis: 30%;
  background: red;
}
.poster {
  width: 15rem;
  height: 18rem;
}

.info {
  flex-basis: 50%;
  background: blue;
}

.title {
  text-align: center;
}

.etcInfo {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
</style>
