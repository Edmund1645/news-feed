import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

import mockNews from "mock-data/news.json";

const defaultState = () => {
  // figured it'll be more efficient to lookup & update news items by id instead of looping through
  return { ...mockNews };
};

const store = createStore({
  state() {
    return {
      news: defaultState(),
    };
  },
  getters: {
    allNews(state) {
      return Object.values(state.news).reverse(); // newest first
    },
    newsItemById(state) {
      return (id) => {
        return state.news[id];
      };
    },
  },
  mutations: {
    updateNewsItem(state, payload) {
      state.news[payload.id] = payload;
    },
    createNewsItem(state, payload) {
      const id = uuidv4();
      state.news[id] = { id, ...payload };
    },
  },
});

export default store;
