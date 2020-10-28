import React from 'react';
import styles from '../Style.module.css';
import { HeartFilled, HeartOutlined, EllipsisOutlined , EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import pic1 from '../Images/womens.jpg';
import pic2 from '../Images/love_in.jpg';
import pic3 from '../Images/komaru.jpg';
import pic4 from '../Images/tngan.jpg';
import CreatePost from './CreatePost';


export function Card({ card, index, toggleFavorite, removePost, toggleEdit }) {

  
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
      <EditOutlined className={styles.editIcon} />,
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
        <div className={styles.editPost}><Button>Edit</Button></div>
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
      image: pic1,
      title: "Women's Problems Illustrated In 22 Cute Comics",
      author: 'By Cassandra Calin',      
      likes: 268,
      isFavorite: true,
      isEditAble: false
    },
    {
      image: pic2,
      title: "Love In The Little Thing Illustrated In Heartwarming Comics",
      author: 'By Cocoa',      
      likes: 9229,
      isFavorite: true,
      isEditAble: false
    },
    {
      image: pic3,
      title: "A Funny Cat Calendar For All The Cat Lovers Out There",
      author: 'By Komaru',      
      likes: 760,
      isFavorite: false,
      isEditAble: false
    },
    {
      image: pic4,
      title: "Fantastic Art That MacBook Owners Created For Their Machines",
      author: 'By Thanh Ngan',      
      likes: 888,
      isFavorite: true,
      isEditAble: false
    }
  ]);
  
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
  };

  const toggleEdit = (card, index) => {
    const newPosts = [...posts];  
    if (newPosts[index].isEditAble === true) {
      newPosts[index].isEditAble = false;     
    } else {
      newPosts[index].isEditAble = true;
    }  
    setPosts(newPosts);
    return card
  };

  const removePost  = index => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts)
  }

  const taoPost = addNewPost => {    
    const newPosts = [...posts, addNewPost];  
    setPosts(newPosts)
  } 
  
  return(
    <div>
      <div>
        {posts.map((card, index) => (<Card 
        key={index} index={index} card={card} toggleFavorite={toggleFavorite} 
        toggleEdit={toggleEdit} addPost={taoPost} removePost={removePost}/>))}
      </div>
      <CreatePost addPost={taoPost} />
       
    </div>
  );
}



export default Posts;