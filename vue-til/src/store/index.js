import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

// state : 여러 컴포넌트간에 공유되는 데이터
// mutations: state를 바꾸는것
export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
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
    clearToken(state, token) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      // 메인 페이지로 이동
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data; // return 안넣어줘도 되지만 명시적으로 작성
    },
  },
});
