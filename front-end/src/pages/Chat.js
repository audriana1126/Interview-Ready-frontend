import React from 'react';
import Auth from '../components/Auth'
import {useNavigate} from 'react-router-dom'

function Chat () {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')

        //redirecting user to login
        navigate('login')
    }
    return (
        <Auth>
            <div> 
                <h1>This is Chat</h1>
                <button onClick={logout}>Logout</button>
            </div>
        </Auth>
    )}

  export default Chat
