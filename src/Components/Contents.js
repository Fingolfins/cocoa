import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { StarOutlined, SearchOutlined } from '@ant-design/icons';
import styles from '../Style.module.css';
import Card from './cardFavorites';
import Login from './Login';


class Contents extends React.Component {

  render() {
    return (
    <div>      
      <div className={styles.flexContainer}>
        <div><StarOutlined /></div>
        <div>FAVORITES - 3</div>
        <div><SearchOutlined /></div>        
      </div>  
      <Card />
      <Login />                      
    </div>    
    );
  }
}

export default Contents;