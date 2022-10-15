import EditForm from '../components/EditForm'

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";


const Update = (props) => {
    const [editForm, setEditForm] = useState(null)
    const [user, setUser] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `https://interview-ready.herokuapp.com/user/${id}`
// console.log('hello')
    const getUser = async () => {
        console.log(URL)
        // test your endpoint before making a request
        try {

            const response = await fetch(URL)
            const userData = await response.json()
            // console.log(userData)
            setUser(userData)
            setEditForm(userData)
        } catch (err) {
            console.log(err)
        }
    }
    const loaded = () => {
        return (
            <div className="User">
         
                <h1>Update Page</h1>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <h2>{user.email}</h2>
                <h2>{user.password}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner 
    }

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        console.log('submit fired')
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm) // <===editForm is the current state
        }

        try {
            // await fetch (URL, options) => 
            console.log(URL)
            const response = await fetch(URL, options)
            const updatedUser = await response.json()
            // trigger a new fetch (getUser())

            setUser(updatedUser)
            setEditForm(updatedUser)
        } catch (err) {
            console.log(err)
        }
        // we can reference our other handleSubmit (user) 
    }

    const removeUser = async () => {
        try {

            const options = { method: 'DELETE' }
            const URL = `https://interview-ready.herokuapp.com/user/${user._id}`
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedUser = await response.json()
            // our destroy - findByIdAndDelete >> original document
            console.log(deletedUser)
            navigate('/')
        } catch (err) {
            console.log(err)
            navigate(`https://interview-ready.herokuapp.com/user/`)
        }
    }
    /* How to delete a resource from the Update page:
    1. Add a dom button (return) +++
    2. Event Handler (click) > 
        > contact our database with a fetch
        > URL -> http://.../user/objectid 
        > options - method (delete)
        (assuming delete is a success)
        > redirect to homepage (useNavigate)
    3. add onClick to the button 
    */


    useEffect(() => {
        getUser()
    }, [])

    // console.log(`Current User: ${JSON.stringify(User)}`)

    return <section>
        <h1>Update</h1>
        {editForm ?
        <EditForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            userData={editForm}
            val={`Edit ${user.name}`}
        /> : null}

        {user ? loaded() : loading()}

        <div className="button-wrapper">
            <Link to="/">Back Home</Link>
            <button 
            onClick={removeUser}
            >
                Delete User
            </button>
        </div>
    </section>
}

export default Update