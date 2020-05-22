import React from 'react';
import { Table, Space } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'TÊN',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>
  },
  {
    title: 'TUỔI',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'ĐỊA CHỈ',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'LỊCH HẸN',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>
          TẠO LỊCH HẸN <CalendarOutlined />
        </a>
      </Space>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const TableAntd = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TableAntd;
