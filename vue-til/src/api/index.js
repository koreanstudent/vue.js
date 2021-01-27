import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 엑시오스 초기화 함수
function createInstance() {
  // create : 요청을 할때 공통 설정들을 미리 넣을 수 있다.
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   //헤더에 이미 정의 된 속성 중 하나
    //   // Authorization: store.state.token,
    // },
  });
  // axios.post('http://localhost:3000)
  // instance.interceptors.request.use();
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  //   const url = 'http://localhost:3000/signup';
  //   return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}
// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPost };
