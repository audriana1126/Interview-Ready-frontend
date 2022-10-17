import React, {useState, useEffect} from 'react';
import Auth from '../components/Auth'
import {useNavigate} from 'react-router-dom'
import io from 'socket.io-client'
import endpoint from '../utils/endpoint'

function Chat () {
  
  // client-side
    const socket = io(endpoint.uri)
    const [msg, setMsg] = useState('')
    const [typing, setTyping] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        let user = localStorage.getItem('name')
        user = user ?? "Unknown"
        console.log('User', user)
        setUsername(user)
    }, [])
    
    const logout = () => {
        localStorage.removeItem('token')

        //redirecting user to login
        navigate('login')
    }

    const onChange = text => {
        setMsg(text)
        socket.emit('typing', username)
    }

    socket.on('typing-response', (name)=>{
        let typing = `${name} is typing`
        setTyping(name)
    })
    //console.log('Message', msg)
    return (
        <Auth>
            <div> 
                <h1>This is Chat</h1>
                <div>{typing}</div>
                <input
                  name="name"
                  type="text"
                  value={msg}
                  onChange={(e)=>onChange(e.target.value)}
                />
                <button onClick={logout}>Logout</button>
            </div>
        </Auth>
    )}

  export default Chat
