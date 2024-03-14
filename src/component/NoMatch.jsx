import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{navigate('/')},3000);
    },[])
    return (
        <div className='pnf'>
            <h1>404 Page not found</h1>
        </div>
    );
}

export default NoMatch;
