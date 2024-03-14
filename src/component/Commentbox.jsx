import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost, isloggedin } from '../feature/LoginSlice';
import { useNavigate } from 'react-router-dom';

const Commentbox = ({username}) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [form, setForm ] = useState({
        name:username,
        textbox:''
    })
    function handleCHange(e){
        setForm({...form, [e.target.name]:e.target.value})
    }
    function submitPost(){
        if(form.name !== '' && form.textbox !== ''){
            dispatch(addNewPost(form));
            setForm({...form, textbox:''})
        }
    }
    return (
        <div className='commentBox'>
            <input type='text' readOnly value={form.name} name='name' placeholder='name'/>
            <br/>
            <textarea rows={2} cols={40} value={form.textbox} name='textbox' placeholder='post' onChange={(e)=>{handleCHange(e)}}/>
            <button onClick={()=> {submitPost()}} className='btn'>Submit Post</button>{ ' ' }
            <button onClick={()=> {
                    dispatch(isloggedin(false))
                    navigate('/')
                    }
                } className='btn'>Logout</button>
        </div>
    );
}

export default Commentbox;
