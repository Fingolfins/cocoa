import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button } from 'antd';


const CreatePost = ({ addPost, initialValue }) => {
  const [form] = Form.useForm();   
  const [formLayout] = useState('horizontal');  
  const [id, setId] = React.useState(0)
  const onReset = () => {
    setId(0)
    form.resetFields();
  }; 
  const handlePost = (values) => {    
    if (!id) {
        values.id = 0;
        values.likes = 0;
        values.isFavorite = false;
      } else {
        values.id = id;        
        values.likes = initialValue.likes;
        values.isFavorite = initialValue.isFavorite;
      }    
    addPost(values);
    onReset();       
  };

  useEffect(() => {
    form.setFieldsValue(initialValue)
    setId(initialValue.id)}
    , [form, initialValue]) 
  
  const formItemLayout =
    formLayout === 'horizontal'
      ? {          
          wrapperCol: {            
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {                        
          },
        }
      : null; 
  return (
    <div style={{width: '50%',  margin: '10px auto', padding: '20px' }} >
      
      <h2 style={{textAlign: 'center', color: 'dodgerBlue'}}>Write Your Post</h2>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onFinish={handlePost}                           
      >        
        <Form.Item name='title' rules={[{ required: true, message: "Please Enter Your Post's Title!" }]}>
          <Input placeholder="Please Enter Your Post's Tile" style={{borderRadius : '10px'}} />
        </Form.Item>
        <Form.Item name='author' rules={[{ required: true, message: "Please Enter Your Name!" }]}>
          <Input allowClear placeholder="Please Enter Your Name" style={{borderRadius : '10px'}} />
        </Form.Item>
        <Form.Item name='image'>
          <Input placeholder="Please Enter Your Image's URL" style={{borderRadius : '10px'}} />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" block htmlType='submit' style={{borderRadius : '10px'}}>Save</Button>          
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;