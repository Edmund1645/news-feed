import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

const store = createStore({
  state() {
    return {
      news: {}, // figured it'll be more efficient to lookup news items by id instead of looping through
    };
  },
  getters: {
    allNews(state) {
      return Object.values(state.news);
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
