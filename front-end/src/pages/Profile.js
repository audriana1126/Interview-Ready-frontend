import React, {useEffect, useState} from 'react';
import Auth from '../components/Auth'
import {useNavigate} from 'react-router-dom'
import UserProfile from '../components/UserProfile';
import {getUserToken, setUserToken, clearUserToken} from '../utils/authToken'
import { Link } from 'react-router-dom';


function Profile () {
    const [userProfile, setUserProfile] = useState(null)
    const navigate = useNavigate()

    const logout = () => {
        // localStorage.removeItem('token')
        clearUserToken()

        //redirecting user to login
        //navigate('login')
        window.location.reload()
    }

    // const update = () => {
    //     // setUserToken()
    //     // navigate("/user/:id")
        
    // }

    




    useEffect(()=>{
        const tokenData = localStorage.getItem('token')
        if(tokenData){
            const {user} = JSON.parse(tokenData)
            setUserProfile(user)
        }
        // const url = "https://interview-ready.herokuapp.com/user"
        // fetch(url)
        // .then(response=>response.json())
        // .then(response=>{
        //     const user = localStorage.getItem('token')
        //     const {id} = JSON.parse(user)

        //     // Find user of this id
        //     const findUser = response.find(item=>item.id === id)
        //     //console.log('User data from backend',response)
        //     setUserProfile(findUser)
        // })
        // .catch(err=>console.log(err))
    }, [])



    // const allUsers = users.map(({id, username, email, name}, index)=>(
    //     <React.Fragment key={index}>
    //         <div>Username: {username}</div>
    //         <div>Email: {email}</div>
    //         <div>Name: {name}</div><br />
    //     </React.Fragment>
    // ))
    return (
        <Auth>
            <section className='profileSection'> 
                <h1 className='profileH1'>This is Profile</h1>
                <br />
                <div>
                    <UserProfile data={userProfile} />
                </div>
                <Link className='profileButton' to="/update">
                    <a>Update</a>
                </Link>
                <br />
                <button class="profileButton" onClick={logout}>Logout</button>
            </section>
        </Auth>
    )}

  export default Profile