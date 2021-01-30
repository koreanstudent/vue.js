import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 엑시오스 초기화 함수
function createInstanceWithAuth(url) {
  // create : 요청을 할때 공통 설정들을 미리 넣을 수 있다.
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   //헤더에 이미 정의 된 속성 중 하나
    //   // Authorization: store.state.token,
    // },
  });
  // axios.post('http://localhost:3000)
  // instance.interceptors.request.use();
  return setInterceptors(instance);
}

export const instance = createInstance();

export const posts = createInstanceWithAuth('posts');

// GET - POSTS
// POST - POSTS
// PUT - POSTS {id}
// DELETE - POSTS {id}
