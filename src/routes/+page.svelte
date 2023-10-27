<script>
  import { account, ID } from '$lib/appwrite';
    import { onMount } from 'svelte';

  export let loggedInUser = null;

  let email = '';
  let password = '';
  let isRight = true;

  onMount(() => {
    if(sessionStorage.getItem('loggedInUser')) {
      loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    }
  });

  async function login(email, password) {
    try {
      await account.createEmailSession(email, password);
      loggedInUser = await account.get();
      isRight = true;
      sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } catch {
      isRight = false;
    }
  }

  async function logout() {
    await account.deleteSession('current');
    loggedInUser = null;
    alert("로그아웃 하였습니다.");
    email = '';
    password = '';
    sessionStorage.removeItem('loggedInUser'); 
  }
</script>

{#if loggedInUser}
  <div class="wrapper">
  <h1>환영합니다 {loggedInUser.name}님!</h1>
  <button
          type="button"
          style="color: red; font-weight: bold; background-color: white"
          on:click={logout}><h2>로그아웃</h2></button></div>
{:else}
<div class="wrapper">
  <dir class="login-wrapper">
    <h2>Login</h2>
    <form id="login-form">
      <input type="email" placeholder="Email" bind:value={email} />
      <input type="password" placeholder="Password" bind:value={password} />
      <input type="submit" value="Login" on:click={() => login(email, password)} />
      {#if !isRight}<p style="color: red;">아이디 또는 비밀번호가 틀렸습니다.</p>{/if}
      <p>아직 회원이 아니신가요? <a href="/register">회원가입</a>
    </form>
  </dir>
</div>
{/if}

<style>
  * {
  padding: 0;
  margin: 0;
  border: none;
}

body {
  font-size: 14px;
  font-family: "Roboto", "sans-serif";
}

.wrapper {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.login-wrapper {
  width: 400px;
  height: 350px;
  padding: 40px;
  box-sizing: border-box;
}

.login-wrapper > h2 {
  font-size: 24px;
  color: #6a24fe;
  margin-bottom: 20px;
}

#login-form > input {
  width: 100%;
  height: 48px;
  background-color: #f8f8f8;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
}

#login-form > input::placeholder {
  color: #d2d2d2;
}

#login-form > input[type="submit"] {
  color: #fff;
  background-color: #6a24fe;
  font-size: 16px;
  margin-top: 20px;
}

#login-form > input[type="checkbox"] {
  display: none;
}

#login-form > label {
  color: #999999;
}

#login-form input[type="checkbox"] + label {
  cursor: pointer;
  padding-left: 26px;
  background-image: url("/public/checkbox.png");
  background-repeat: no-repeat;
  background-size: contain;
}

#login-form input[type="checkbox"]:checked + label {
  background-image: url("/public/checkbox-active.png");
  background-repeat: no-repeat;
  background-size: contain;
}

</style>
