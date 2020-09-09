import React, { useRef } from 'react'
import Message from '../Message/Message'
import './MessengerBar.scss'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function MessengersBar({name, room,messages,sendMessage}) {
    let input = useRef(null)
    const handleSendMessage = (input)=>{
        if(input.current.value){
            sendMessage(input.current.value)
            input.current.value ="";
            input.current.focus();
        }
    }
    return (
        <div className="messenger-bar">
            <div className="header">
                <h4>{room}</h4>
                <div className="green-light"/>
            </div>
            <ScrollToBottom className="scroll">
                <div className="messages">
                    {messages.map((message)=><Message name={name} message={message}/>)}
                </div>
            </ScrollToBottom>
            <div className="input">
                <input
                    type="text"
                    ref={input}
                    onKeyUp={(e)=>e.key === "Enter"?handleSendMessage(input):null}
                />
                <button onClick={()=>handleSendMessage(input)}>
                    Send
                </button>
            </div>
        </div>
    )
}
