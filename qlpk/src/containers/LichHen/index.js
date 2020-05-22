import React, { useEffect, useState } from 'react';
import ItemLichHen from './components/ItemLichHen';
import { LichHenInitial } from '../../utils/fakeData';
import { Input, AutoComplete, Button, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 0 },
    sm: { span: 0 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 4
    }
  }
};

const LichHen = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [selected, setSelected] = useState({});
  const handleSelected = item => {
    setSelected(item);
  };
  const onFinish = async values => {
    console.log('selected date', selected);
    console.log('Received values of form: ', values);
    postLichHen(values, selected);
  };

  const postLichHen = async (values, selected) => {
    const obj = {
      id: '',
      time: selected.time,
      id_benh_nhan: values.id,
      status: values.status,
      ghi_chu: null,
      date: Date.now()
    };

    const res = await fetch('http://localhost:8088/lich_hen/addOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
    const data = await res.json();
    console.log('data2', data);
  };

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
            <ItemLichHen
              item={item}
              selected={selected}
              handleSelected={handleSelected}
            />
          ))}
        </div>
        <div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: '84'
            }}
            scrollToFirstError
          >
            <Form.Item
              name="id"
              label="NHẬP ID BỆNH NHÂN"
              rules={[
                {
                  required: true,
                  message: 'Cần nhập id bệnh nhân'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Button
              type="primary"
              size="large"
              loading={loading}
              htmlType="submit"
            >
              ĐẶT LỊCH HẸN
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LichHen;
