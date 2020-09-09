import React from 'react'
import './Message.scss'
import emoji from 'react-emoji'
export default function Messenger({message,name}) {
    let classMessage = "message"
    classMessage += message.name !== name?" not-me":" me"

    return (
        <div className={classMessage}>
            <p>{emoji.emojify(message.mes)}</p><span>{message.name}</span>
        </div>
    )
}
