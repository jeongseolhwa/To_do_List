import React from 'react';
import '../css/Home.css';
import TodoItem from '../page/component/TodoItem'; // 새로 생성된 TodoItem 컴포넌트 import

function Home() {
  const todos = [
    { date: 'D-10', text: '종강' },
    { date: '3/2 월', text: '종강' },
    { date: 'D-10', text: '종강' },
    { date: 'D-10', text: '종강' }
  ];

  return (
    <div className="home-container">
      <header className="header">
        <h1>To do List</h1>
        <div className="menu-button"></div>
      </header>
      <main className="main-content">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem key={index} date={todo.date} text={todo.text} />
          ))}
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
