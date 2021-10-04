import React from 'react'


import { Form, Input, Icon, Button } from 'antd';

/* eslint-enable no-template-curly-in-string */


const AddUser = ({registerUser,form: { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, validateFieldsAndScroll }}) => {
    const FormItem = Form.Item;

    const handleSubmit = e => {
        e.preventDefault();
        validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                // eslint-disable-next-line
               try {
                   let res = await registerUser({variables:{registerInput:values}})
                   console.log(res)
               }catch (e){
                   console.log(e)
               }

            }
        });
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const formTailLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const emailError = isFieldTouched('email') && getFieldError('email');
    function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
    return (
        <Form onSubmit={handleSubmit} {...formItemLayout}>
            <FormItem validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                {getFieldDecorator("email", {
                    rules: [
                        {
                            type: "email",
                            message: "The input is not valid E-mail!"
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!"
                        }
                    ]
                })(
                    <Input
                        prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                        placeholder="email"
                    />
                )}
            </FormItem>

            <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                {getFieldDecorator("password", {
                    rules: [{ required: true, message: "Please input your Password!" },{
                        min:3,message: "the lenght must larger than 3"
                    },]
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        placeholder="Password"
                    />
                )}
            </FormItem>

            <FormItem validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                {getFieldDecorator("username", {
                    rules: [{ required: true, message: "Please input your Password!" },{
                        min:4,message: "the length must larger than 4"
                    },{
                        max:20,message: "the length must shorter than 20"
                    }]
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="username"
                        placeholder="username"
                    />
                )}
            </FormItem>

            <Form.Item {...formTailLayout}>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Add User
                </Button>
            </Form.Item>
        </Form>
    );
};


export default Form.create({ name: 'AddUser' })(AddUser);