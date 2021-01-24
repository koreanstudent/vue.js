<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"></label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password"></label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',

      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);

      console.log(data.user.username);
      this.logMessage = `${data.user.username} 님 환영합니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
