import React from 'react';

const styles = {
  plusList: {
    position: 'relative',
    width: '394px',
    height: '571px',
    background: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
  },
  title: {
    position: 'absolute',
    left: '20px',
    top: '16px',
    fontSize: '35px',
    fontWeight: 400,
  },
  closeButton: {
    position: 'absolute',
    right: '26px',
    top: '9px',
    width: '58px',
    height: '48px',
    background: '#D9D9D9',
    border: 'none',
    borderRadius: '5px',
    fontSize: '30px',
  },
  inputField: {
    position: 'absolute',
    left: '26px',
    width: '342px',
    height: '48px',
    background: '#D9D9D9',
    border: 'none',
    borderRadius: '5px',
    fontSize: '30px',
    padding: '0 10px',
  },
  memoField: {
    position: 'absolute',
    left: '26px',
    top: '192px',
    width: '342px',
    height: '164px',
    background: '#D9D9D9',
    border: 'none',
    borderRadius: '5px',
    fontSize: '30px',
    padding: '10px',
    resize: 'none',
  },
  checkboxContainer: {
    position: 'absolute',
    left: '26px',
    top: '379px',
  },
  dateSelect: {
    position: 'absolute',
    left: '28px',
    top: '433px',
    width: '340px',
    height: '39px',
    background: '#D9D9D9',
    border: 'none',
    borderRadius: '5px',
    fontSize: '25px',
    padding: '0 10px',
  },
  addButton: {
    position: 'absolute',
    left: '27px',
    bottom: '21px',
    width: '342px',
    height: '48px',
    background: '#D9D9D9',
    border: 'none',
    borderRadius: '5px',
    fontSize: '30px',
  },
};

const PlusList = () => {
  return (
    <div style={styles.plusList}>
      <h1 style={styles.title}>추가</h1>
      <button style={styles.closeButton}>X</button>

      <input type="text" style={{ ...styles.inputField, top: '79px' }} placeholder="할 일 작성....." />
      <input type="text" style={{ ...styles.inputField, top: '137px' }} placeholder="장소 추가하기" />

      <textarea style={styles.memoField} placeholder="메모??"></textarea>

      <div style={styles.checkboxContainer}>
        <input type="checkbox" id="notification" />
        <label htmlFor="notification">알림받기</label>
      </div>

      <select style={styles.dateSelect}>
        <option>날짜 형태 선택</option>
        {/* 추가 옵션들 */}
      </select>

      <button style={styles.addButton}>리스트 추가하기</button>
    </div>
  );
}

export default PlusList;
