import React from 'react'

export default function UserProfile({data}) {
    if(!data){
        return <div />
    }
  return (
    <div>
        <div>Username: {data.username}</div>
        <div>Email: {data.email}</div>
        <div>Name: {data.name}</div>
    </div>
  )
}
