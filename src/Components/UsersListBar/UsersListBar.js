import React, { useState } from 'react'
import './UsersListBar.scss'

export default function UsersListBar({listUsers}) {
    const [hideMenu, setHideMenu] = useState('hide');
    const handleMenu =() =>{
        setHideMenu(hideMenu === 'hide'?'':'hide');
    }
    return (
        <div className="listusers-container ">
            <div className="icon">
                <i class={`fa fa-users menu ${hideMenu}`} onClick={handleMenu} aria-hidden="true"></i>
            </div>
            <div className={`listusers ${hideMenu}`}>
                <div className="title">LIST USERS</div>
                {listUsers.map(user=><p><i class="fa fa-user" aria-hidden="true"></i>{user.name}</p>)}
            </div>
        </div>
    )
}
