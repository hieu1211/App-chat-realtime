import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './Join.scss'

export default function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    
    console.log(name, room)
    return (
        <div className='joinOuterContainer'>
            <div className="joinInnerContainer">
                <h2>Join</h2>
                <input type="text" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Room" name="room" onChange={(e)=>setRoom(e.target.value)}/>
                <Link onClick={(e)=>!name||!room?e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button >Join</button>  
                </Link>
            </div>
        </div>
    )
}
