import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  width: 200px;
  height: 80px;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ecedef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #ecedef;
  cursor: not-allowed;
  text-align: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  & .text {
    color: #818792;
    font-size: 14px;
    margin-bottom: 10px;
  }
  & .block {
    display: block;
    height: 20px;
    line-height: 20px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 11px;
    background-color: #818792;
    color: #fff;
  }
`;

const ItemLichHen = ({ item }) => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  console.log('item', item);
  return (
    <Wrapper>
      <div className="text">
        {moment(item.time, 'HH:mm:ss').format('LT') +
          ' - ' +
          moment(item.time_end, 'HH:mm:ss').format('LT')}
      </div>
      <div className="block">FULL</div>
    </Wrapper>
  );
};

export default ItemLichHen;
