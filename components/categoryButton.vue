<template>
  <div
    class="wrap"
    @click="select"
    :class="{ selected: this.selectedCategory.name === propsdata.name }"
  >
    <span class="category">{{ propsdata.name }}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["propsdata"],
  computed: {
    ...mapState({ selectedCategory: "selectedCategory" }),
  },

  methods: {
    ...mapActions({ categoryClick: "categoryClick" }),
    select() {
      this.categoryClick(this.propsdata);
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 60px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid #fff;
  padding: 0.2rem;
  display: flex;
  margin: 0.5rem 0.5rem;
}

.category {
  display: block;
  font-size: 0.8rem;
  margin: auto;
  color: #fff;
  font-family: Nanum-Pen-Regular;
}

.selected {
  background-color: #fff;
}
.selected .category {
  color: #000;
}
</style>
