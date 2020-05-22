import React, { useEffect, useState } from 'react';
import ItemLichHen from './components/ItemLichHen';
import { LichHenInitial } from '../../utils/fakeData';
import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const LichHen = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:8088/benh_nhan/getAll', {
          method: 'GET'
        });
        const data = await res.json();
        setUsers(data);
      } catch (err) {}
      fetchUser();
    };
  }, []);
  console.log('Users', Users);
  const renderTitle = title => {
    return <span>{title}</span>;
  };

  const renderItem = (title, count) => {
    return {
      value: title,
      label: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {title}
          <span>
            <UserOutlined /> {count}
          </span>
        </div>
      )
    };
  };

  const options = [];
  if (Users.length !== 0) {
    const options = [
      {
        label: renderTitle('BỆNH NHÂN'),
        options: [
          Users.map(user =>
            renderItem(`${user.lastname + user.firstname}`, user.id)
          )
        ]
      }
    ];
  }

  return (
    <div>
      <h1>Lich Hen</h1>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '60%'
          }}
        >
          {LichHenInitial.map(item => (
            <ItemLichHen item={item} />
          ))}
        </div>
        {Users.length !== 0 ? (
          <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{ width: 250 }}
            options={options}
            onChange={values => {
              console.log('values', values);
            }}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
        ) : null}
      </div>
    </div>
  );
};

export default LichHen;
