// DetailList.jsx
import React from 'react';

function DetailList() {
  return (
    <div className="detail-list-container">
      <div className="detail-header">
        <h2 className="detail-day">D-10</h2>
        <button className="close-button">X</button>
      </div>
      <div className="detail-content">
        <div className="detail-item">
          <p>종강</p>
        </div>
        <div className="detail-item detail-memo">
          <p>메모??</p>
        </div>
        <div className="detail-item">
          <p>장소?</p>
        </div>
      </div>
    </div>
  );
}

export default DetailList;