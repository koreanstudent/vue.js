import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state : 여러 컴포넌트간에 공유되는 데이터
// mutations: state를 바꾸는것
export default new Vuex.Store({
  state: {
    username: '',
    token: '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});
