import React, { lazy } from 'react';
import Button from './Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllUsers, isloggedin } from '../feature/LoginSlice';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let loginData = useSelector(state=> state.loginData.users);
    
    let [form, setForm] = useState({
        name:'',
        password:'111'
    })
    let [message, setMessage] = useState('')
        useEffect(()=>{
            dispatch(getAllUsers())
        },[])
    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value})
    }
    function submitForm(e){
        e.preventDefault()
        let checkUser = loginData.find((item)=>(item.name === form.name && item.password === form.password))
        if(checkUser) {
            setMessage("Login successful");
            dispatch(isloggedin(true))
            {localStorage.setItem('userInfo', form.name)}
            navigate('/posts')
          }else {
            setMessage("Wrong password or username");
          }
    }
    return (
        <div className='login'>
            <form className='box' onSubmit={(e)=>{submitForm(e)}}>
                <input type='text' name='name' placeholder='name' value={form.name} onChange={(e)=>{handleChange(e)}}/>
                <br/>
                <input type='password' name='password' placeholder='password' value={form.password} onChange={(e)=>{handleChange(e)}} />
                <br/>
                <span className='message'>{message}</span>
                <br/>
                <Button>Submit</Button>
            </form>
        </div>
    );
}

export default Login;
