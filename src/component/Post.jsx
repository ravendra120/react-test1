import React, { useEffect, useState } from 'react';
import Commentbox from './Commentbox';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getAllPosts } from '../feature/LoginSlice';

const Post = () => {
    let [allposts, setPosts] = useState([]);
    let selector = useSelector(state=> state.loginData);
    let dispatch = useDispatch()
    let userName = localStorage.getItem('userInfo');
    useEffect(()=>{ 
        setPosts(selector.posts)
    },[selector])
    useEffect(()=>{
        dispatch(getAllPosts())
    },[])
    function deletePostId(id){
        dispatch(deletePost(id))
    }
    return (
        <div className='posts flexBox'>
            <Commentbox username={userName}/>
            <div className='allComments'>
                {(allposts.length > 0)? 
                allposts.map(items=>{
                    return (
                        <div key={items.id}> 
                            <b>{items.name}</b> 
                            <br/>{items.textbox}
                            <span onClick={()=>{ deletePostId(items.id) }}>X</span>
                        </div>
                    )
                })
                :'No comments'
                }
            </div>
        </div>
    );
}

export default Post;
