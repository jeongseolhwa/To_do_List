// Home.jsx
import React from 'react';
import '../css/Home.css'

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>To do List</h1>
        <div className="menu-button"></div>
      </header>
      <main className="main-content">
        <ul className="todo-list">
          <li className="todo-item">
            <span className="todo-date">D-10</span>
            <span className="todo-text">종강</span>
          </li>
          <li className="todo-item">
            <span className="todo-date">3/2 월</span>
            <span className="todo-text">종강</span>
          </li>
          <li className="todo-item">
            <span className="todo-date">D-10</span>
            <span className="todo-text">종강</span>
          </li>
          <li className="todo-item">
            <span className="todo-date">D-10</span>
            <span className="todo-text">종강</span>
          </li>
        </ul>
      </main>
      <footer className="footer">
        <button className="add-button">+ 리스트 추가</button>
        <button className="delete-button">- 리스트 삭제</button>
      </footer>
    </div>
  );
}

export default Home;