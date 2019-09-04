

import { Button,Checkbox, Form, Icon, Input  } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';

interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
}

class Login extends React.Component<UserFormProps,any> {
  
  public handleSubmit =(e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
          if (!err) {
            // console.log('Received values of form: ', values);
          }
        });
      };

    public render() {
     const { getFieldDecorator } = this.props.form;
      return (
        <div className="loginPage">
        <Form onSubmit={this.handleSubmit} className="login-form" style={{padding:"10px"}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
      )
    }
  }
  
  // export default Login;

export default Form.create({ name: 'normal_login' })(Login);