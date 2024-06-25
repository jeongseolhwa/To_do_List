// Login.jsx
import React from 'react';
import '../css/Login.css'

function Login() {
  return (
    <div className="login-container">
      <h1 className="title">To do List</h1>
      <form className="login-form">
        <input type="text" className="input-field" placeholder="아이디" />
        <input type="password" className="input-field" placeholder="비밀번호" />
        <button type="submit" className="login-button">로그인</button>
      </form>
      <div className="links">
        <span className="signup-link">회원가입</span>
        <span className="forgot-links">/ 아이디 찾기 / 비밀번호 찾기</span>
      </div>
    </div>
  );
}

export default Login;