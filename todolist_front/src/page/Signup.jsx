// Login.jsx
import React from 'react';
import '../css/Signup.css';

function Signup() {
  return (
    <div className="Signup-container">
      <div className="close-button">
        <span>X</span>
      </div>
      <h1 className="title">To do List</h1>
      <form className="Signup-form">
        <input type="text" className="input-field" placeholder="아이디" />
        <input type="password" className="input-field" placeholder="비밀번호" />
        <input type="date" className="input-field" placeholder="생년월일" />
        <button type="submit" className="submit-button">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;