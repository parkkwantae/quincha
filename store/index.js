import { base_api } from "@/plugins/axios";

export const state = () => {
  return {
    selectedCategory: "", // 선택된 카테고리 정보
    categoryListData: [], // 카테고리에 따른 데이터 리스트
    selectedMovieInfo: "",
  };
};

export const mutations = {
  initialSetting(state, payload) {
    state.selectedCategory = payload.initialCategory;
    state.categoryListData = payload.initialListData;
  },

  categoryClick(state, payload) {
    state.selectedCategory = payload.payload;
    state.categoryListData = payload.data;
  },

  getMovieDetailInfo(state, payload) {
    state.selectedMovieInfo = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    // let initialListData = [];

    // for (let i = 1; i <= 2; i++) {
    //   const response = await base_api.get(`/trending/all/day`, {
    //     params: {
    //       page: i,
    //     },
    //   });
    //   const data = response.data.results;
    //   initialListData = initialListData.concat(data);
    // }

    const response = await base_api.get("/trending/all/day");

    const initialListData = response.data.results;

    const initialCategory = { name: "전체", type: "all" };
    commit("initialSetting", { initialListData, initialCategory });
  },

  async categoryClick({ commit }, payload) {
    let dataArray = [];

    try {
      for (let i = 1; i <= 2; i++) {
        const response = await base_api.get(`/trending/${payload.type}/day`, {
          params: {
            page: i,
          },
        });

        const data = response.data.results;
        dataArray = dataArray.concat(data);
      }

      commit("categoryClick", { payload, data: dataArray });
    } catch (error) {
      console.log(error.message);
    }
  },

  async getMovieDetailInfo({ commit }, payload) {
    try {
      const response = await base_api.get(`/movie/${payload}`);
      const data = response.data;
      commit("getMovieDetailInfo", data);
    } catch (error) {
      console.error(error);
    }
  },
};
