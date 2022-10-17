import React, {useState, useEffect} from 'react';
import Auth from '../components/Auth'
import {useNavigate} from 'react-router-dom'
import io from 'socket.io-client'
import endpoint from '../utils/endpoint'

function Se () {
  
  // client-side
    const socket = io(endpoint.uri)
    const [msg, setMsg] = useState('')
    const [typing, setTyping] = useState('')
    const [username, setUsername] = useState('')
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()

    const styles = {
        sender: {
            display: "flex",
            flexDirection: "row-reverse"
        },
        receiver: {
            display: "flex",
            flexDirection: "row",
        },
        chatR: {
            maxWidth: "50%",
            borderRadius: "10px",
            backgroundColor: "blue",
            color: "white",
            padding: "10px"
        },
        chatS: {
            maxWidth: "50%",
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
            padding: "10px"
        },
        input: {
            width: "100%",
            padding: "10px 15px"
        }
    }

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
        //socket.emit('typing', username)
        socket.emit('typing', {id: socket.id, username})
    }

    const sendMsg = () => {
        socket.emit('se-message', {name: username, msg})
        setMsg('')
        console.log('message sent')
    }

    socket.on('typing-response', (name)=>{
        let typing = `${name} is typing`
        //setTyping(typing)
    })

    socket.on('se-display-message', (msgObj)=>{
        console.log('getting se msgs')
        const msgArr = [...messages, msgObj]
        setMessages(msgArr)
    })

    const messageDisplay = messages.map(({name, msg}, index)=>(
        <React.Fragment key={index}>
            <div style={name===username ? styles.sender : styles.receiver}>
                <div style={name===username ? styles.chatS : styles.chatR}>   
                    <div>{name}</div>
                    <div>{msg}</div>
                </div>
            </div>
        </React.Fragment>
    ))
    //console.log('Message', msg)
    return (
        <Auth navigate={navigate}>
            <div style={{width: '100%'}}> 
                <h1 style={{textAlign: "center"}}>This is Se</h1>
                <div>{messageDisplay}</div>
                {/* <div>
                    <div style={{width: "100%", backgroundColor: "blue"}}>
                        <div style={{display: "flex", }}></div>
                    </div>
                </div> */}
                <br /><br />
                <div>{typing}</div>
                <div style={{width: "100%", padding: "10px"}}>
                    <input
                    name="name"
                    type="text"
                    value={msg}
                    onChange={(e)=>onChange(e.target.value)}
                    style={styles.input}
                    />
                </div>
                {/* <button onClick={logout}>Logout</button> */}
                <button onClick={sendMsg}>Send</button>
                <br /><br />

            
            </div>
        </Auth>
    )}

  export default Se
