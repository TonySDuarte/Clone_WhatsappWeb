import React from 'react';
import './style.css'

export default () => {
    return (
        <div className="chatList">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="chatList-avatar" />
            <div className="chatList-lines">
                <div className="chatlist-line">
                    <div className="chatList-name">
                        Tony Sandro
                    </div>
                    <div className="chatList-date">11:10</div>
                </div>
                <div className="chatlist-line">
                    <div className="chatList-lastMsg">
                        <p>Olá</p>
                    </div>
                </div>
            </div>
        </div>
    )
}