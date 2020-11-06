import React from 'react';
import styles from '../Style.module.css';
import { HeartFilled, HeartOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import pic1 from '../Images/womens.jpg';
import pic2 from '../Images/love_in.jpg';
import pic3 from '../Images/komaru.jpg';
import pic4 from '../Images/tngan.jpg';
import CreatePost from './CreatePost';

export function Card({ card, index, toggleFavorite, removePost, toggleEdit, getEditValue }) {
  const renderHeart = (isFavorite) => {
    if( !isFavorite ) {
      return <HeartOutlined />
    } else {
      return <HeartFilled />
    }
  };
  const handleEdit = (isEditAble) => {
    if( !isEditAble ) {      
      return ''
    } else { 
    return ([
      <div><Button>Edit</Button></div>,
      <div ><Button>Xóa</Button></div>]);
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.setting}>
        <div className={styles.tools}>
          <Button className={styles.tool} shape='circle' onClick={() => toggleEdit(card, index)} >
            <EllipsisOutlined />
          </Button>
        </div>
        <div className={styles.editPost} onClick={() => getEditValue(card)}>
        {handleEdit(card.isEditAble)[0]}
        </div>
        <div className={styles.delPost} onClick={() => removePost(index)}>
          {handleEdit(card.isEditAble)[1]}
        </div>        
      </div>           
      <div className={styles.image}><img src= {card.image} alt=' '></img></div>
      <div className={styles.post}>
        <div >{card.title}</div>  
        <div >{card.author}</div>                
      </div>
      <div className={styles.likes}>
        <div onClick={() => toggleFavorite(index)} className={styles.iconHeart} >
          {renderHeart(card.isFavorite)} 
        </div>
        <div className={styles.likeNumber}> {card.likes} </div>
      </div>       
    </div>
  );
};

function Posts() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      image: pic1,
      title: "Women's Problems Illustrated In 22 Cute Comics",
      author: 'By Cassandra Calin',      
      likes: 268,
      isFavorite: true,
      isEditAble: false
    },
    {
      id: 2,
      image: pic2,
      title: "Love In The Little Thing Illustrated In Heartwarming Comics",
      author: 'By Cocoa',      
      likes: 9229,
      isFavorite: true,
      isEditAble: false
    },
    {
      id: 3,
      image: pic3,
      title: "A Funny Cat Calendar For All The Cat Lovers Out There",
      author: 'By Komaru',      
      likes: 760,
      isFavorite: false,
      isEditAble: false
    },
    {
      id: 4,
      image: pic4,
      title: "Fantastic Art That MacBook Owners Created For Their Machines",
      author: 'By Thanh Ngan',      
      likes: 888,
      isFavorite: true,
      isEditAble: false
    }
  ])
  const [editValue, setEditValue] = React.useState({})
  
  const toggleFavorite = index => {
    const newPosts = [...posts];    
    if (newPosts[index].isFavorite === true) {
      newPosts[index].isFavorite = false;
      newPosts[index].likes = posts[index].likes - 1
    } else {
      newPosts[index].isFavorite = true;
      newPosts[index].likes = posts[index].likes + 1
    }
    setPosts(newPosts);
  }
  const toggleEdit = (card, index) => {
    const newPosts = [...posts];  
    if (newPosts[index].isEditAble === true) {
      newPosts[index].isEditAble = false;     
    } else {
      newPosts[index].isEditAble = true;
    }  
    setPosts(newPosts);  
    return card
  }  
  const removePost  = index => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts)
  }  
  const taoPost = addNewPost => {    
    if (addNewPost.id === 0) {
      addNewPost.id = posts.length + 1
      const newPosts = [...posts, addNewPost];         
      setPosts(newPosts)  
    } else {
      const i = editValue.id - 1  
      posts[i] = addNewPost;
      const newPosts = [...posts]   
      setPosts(newPosts)  
    }  
  } 
  const getEditValue = (card) => {
    setEditValue(card)
  }
  return(
    <div>
      <div>
        {posts.map((card, index) => (<Card 
        key={index} index={index} card={card} toggleFavorite={toggleFavorite} 
        toggleEdit={toggleEdit} addPost={taoPost} removePost={removePost}
        getEditValue={getEditValue} />))}
      </div>
      <CreatePost addPost={taoPost} initialValue={editValue}/>
       
    </div>
  );
}

export default Posts;