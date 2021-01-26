import axios from 'axios';
import { setInterceptors } from './common/interceptors';

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

function registerUser(userData) {
  //   const url = 'http://localhost:3000/signup';
  //   return axios.post(url, userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
