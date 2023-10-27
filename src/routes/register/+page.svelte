<script>
  import { account, ID } from '$lib/appwrite';
  import { goto } from '$app/navigation'; 

  let email = "";
  let password1 = "";
  let password2 = "";
  let isRight = true;
  let name = "";

  async function register() {
    if (password1 != password2) {
      isRight = false;
      return;
    } 
    try {
      await account.create(ID.unique(), email, password1, name);
      alert('회원가입이 완료되었습니다.');
      goto('/');
    } catch {
      alert('회원가입 실패!');
    }
  }
</script>
<div class="wrapper">
  <dir class="login-wrapper">
    <h2>회원가입</h2>
    <form id="login-form">
      <input type="email" placeholder="Email" bind:value={email} />
      <input type="text" placeholder="Name" bind:value={name} />
      <input type="password" placeholder="Password" bind:value={password1} />
      <input type="password" placeholder="Password" bind:value={password2} />
      <input
          type="submit"
          value="Register"
          on:click={register} />
      {#if !isRight}<p style="color: red;">비밀번호를 확인해주세요!</p>{/if}
      <p><a href="/">로그인 화면으로 돌아가기</a></p>
    </form>
  </dir>
</div>

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