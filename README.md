# Svelte kit에서 appwrite를 이용하여 login 기능 구현

## 기능
1. 로그인
2. 회원가입
3. 로그아웃
4. 로그인 세션 유지 (새로고침 해도 유지)

## 오류 메세지
1. 로그인 실패 시 오류 메세지 출력
2. 회원가입 실패 시 오류 메세지 출력

## 알림
1. 로그아웃 시
2. 회원가입 성공 시

## 결과 스크린샷

### 로그인 화면
<img width="741" alt="스크린샷 2023-10-28 오전 6 51 50" src="https://github.com/uomaep/login-appwrite/assets/114221785/115ff121-0aab-4aec-bec8-d9b59a424ef7">

### 회원가입 화면
<img width="626" alt="스크린샷 2023-10-28 오전 6 52 12" src="https://github.com/uomaep/login-appwrite/assets/114221785/cb782154-567c-4eb8-8ea6-649a2022843d">

### 로그인 성공 시 메인화면
<img width="673" alt="스크린샷 2023-10-28 오전 6 52 44" src="https://github.com/uomaep/login-appwrite/assets/114221785/74f2cd7a-2df2-4d5b-a620-0dc69617c549">

### 로그아웃 시 알림메시지 출력
<img width="676" alt="스크린샷 2023-10-28 오전 6 53 34" src="https://github.com/uomaep/login-appwrite/assets/114221785/68b3f5d3-9d8f-4da5-a2b1-1b7059df87d2">

### 로그인 실패 시 오류메시지 출력
<img width="627" alt="스크린샷 2023-10-28 오전 6 54 08" src="https://github.com/uomaep/login-appwrite/assets/114221785/af784b90-b869-4946-b289-1e2facad5687">

### 회원가입 실패 시 오류메시지 출력
<img width="581" alt="스크린샷 2023-10-28 오전 6 54 44" src="https://github.com/uomaep/login-appwrite/assets/114221785/556378bf-be56-4cc5-b5a4-a0d6462db374">

## 후기
1. 조건부 렌더링
   ```svelte
   {#if}
   
   {:else}
   
   {/if}
   ```
3. 적은양의 코드, 가독성이 좋다
   ```svelte
   <script><script>

   <div><div>

   <style><style>
   ```
5. 가상 DOM 객체를 만들지 않고 실제 DOM을 바로 반영하기 때문에 속도가 빠르다.
