import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { transform } from '@babel/core';
import { UserData } from '../../../../utils/fakeData';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../../../utils/localStorage';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      history.push('/home/about');
    }
  }, [history]);

  const onFinish = values => {
    const user = UserData.find(user => {
      if (
        values.username === user.username &&
        values.password === user.password
      ) {
        return user;
      }
    });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      message.success('Login Successfully');
      history.push('/home/about');
    } else {
      message.error('Wrong username or password');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        backgroundColor: '#C4E0E5',
        width: '100%',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          width: '400px',
          padding: '20px',
          top: '50%',
          left: '50%',
          boxShadow: '1px 0px 15px #9E9E9E',
          transform: 'translate(-50%,-50%)',
          borderRadius: '4px'
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
