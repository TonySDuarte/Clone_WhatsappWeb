import React from 'react';
import './style.css'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoodIcon from '@material-ui/icons/Mood';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerInfo">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="chatWindow-avatar" />
                    <div className="chatWindow-name">Tony Sandro</div>
                </div>

                <div className="chatWindow-buttons">

                    <div className="chatWindow-btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>

                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>

                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>

                </div>
            </div>

            <div className="chatWindow-body">

            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">

                    <div className="chatWindow-btn">
                        <MoodIcon style={{ color: '#919191' }} />
                    </div>

                </div>

                <div className="chatWindow-inputarea">
                    <input 
                    className="chatWindow-input"
                    type="text" 
                    placeholder="Digite uma mensagem"
                    />

                </div>

                <div className="chatWindow-pos">

                    <div className="chatWindow-btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>

                </div>

            </div>
        </div>
    )
}