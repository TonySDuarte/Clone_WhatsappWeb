import React from 'react';
import './style.css'

export default ({ onClick, active, data }) => {
    return (
        <div
            className={`chatList ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img src={data.avatar} alt="" className="chatList-avatar" />
            <div className="chatList-lines">
                <div className="chatlist-line">
                    <div className="chatList-name">
                        {data.title}
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