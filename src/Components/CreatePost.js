import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button } from 'antd';


const CreatePost = ({ addPost }) => {
  const [form] = Form.useForm();   
  const [formLayout] = useState('horizontal');
  const [editValue, setEditValue] = useState({title: '', author: '', image: ''})
  
  const onReset = () => {
    form.resetFields();
  }; 
  const handlePost = (values) => {
    values.isFavorite = false;
    values.likes = 0;    
    addPost(values);
    onReset();       
  };

  const editMode = () => {
    setEditValue()
  }
  const buttonEdit = () => {
    return <button onClick={editMode}>Edit</button>
  }
  
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
        <Form.Item name='title' initialValue={editValue.title} rules={[{ required: true, message: "Please Enter Your Post's Title!" }]}>
          <Input placeholder="Please Enter Your Post's Tile" style={{borderRadius : '10px'}} />
        </Form.Item>
        <Form.Item name='author' initialValue={editValue.author} rules={[{ required: true, message: "Please Enter Your Name!" }]}>
          <Input allowClear placeholder="Please Enter Your Name" style={{borderRadius : '10px'}} />
        </Form.Item>
        <Form.Item name='image' initialValue={editValue.image}>
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