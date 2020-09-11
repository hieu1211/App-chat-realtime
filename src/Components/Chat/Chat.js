import React, { useEffect,useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import MessagerBar from '../MessengerBar/MessengerBar'
import UsersListBar from '../UsersListBar/UsersListBar';
import './Chat.scss'

let socket;
export default function Chat({location}) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [listUsers, setListUsers] = useState([])
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {name,room} = queryString.parse(location.search)
        setName(name);
        setRoom(room);
        socket = io('localhost:5000')
        socket = io('192.168.1.5:5000')
        socket.emit('join',{name,room})
        socket.on("listUsers",(data)=>{
            setListUsers(data);
        })
    }, [location.search])

    useEffect(() => {
        socket.on("messenger",(data)=>{
            setMessages([...messages,data])
        })
        },[messages])

    useEffect(() => {
        socket.on("list-users",(data)=>{
            setListUsers(data);
        })
        }, [listUsers])

    const sendMessage = (mes)=>{
        socket.emit("messenger",mes);
        setMessages([...messages,{name,mes}])
    }

    return (
        <div className="chat-container">
            <MessagerBar name={name} room={room} messages={messages} sendMessage={sendMessage}/>
            <UsersListBar listUsers={listUsers}/>
        </div>
    )
}
