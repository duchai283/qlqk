import React, { useState } from 'react';
import TableAntd from '../../components/Table';
import { Input, Button } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import AddBenhNhan from './screens/AddBenhNhan';

const { Search } = Input;

const Patient = () => {
  const [addBN, setAddBN] = useState(false);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 40
        }}
      >
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 400 }}
        />
        <div style={{ width: 200 }}>
          <Button type="primary" block onClick={() => setAddBN(!addBN)}>
            {!addBN ? (
              <>
                TẠO BỆNH NHÂN <UsergroupAddOutlined />
              </>
            ) : (
              'Tìm Kiếm Bệnh Nhân'
            )}
          </Button>
        </div>
      </div>
      {!addBN ? <AddBenhNhan /> : <TableAntd />}
    </div>
  );
};

export default Patient;
