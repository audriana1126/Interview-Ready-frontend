import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Auth({children}) {
    const navigate = useNavigate()

    useEffect(()=>{
        const local = localStorage.getItem('token')
        if (!local) {
            navigate('/login')
        }
    }, [])
    return (
        <React.Fragment>{children}</React.Fragment>
    )
}