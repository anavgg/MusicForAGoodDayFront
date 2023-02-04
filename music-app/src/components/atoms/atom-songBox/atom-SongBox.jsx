import React from 'react';
import './atom-songBox.css'
import DeleteButton from '../atom-DeleteButton/Atom-DeleteButton.jsx'
import UpdateButton from '../atom-updateButton/Atom-UpdateButton.jsx'

const SongBox = (props) => {
    return <div className="songContainer">
        <div className="cover">
            <img src={props.image} alt="cover"></img>
        </div>
        <div>
            <p className="songsName">{props.songName}</p>
            <p className="artistsName">{props.artistName}</p>
            <p className="gender">{props.songGender}</p>
        </div>
        <div className="coder">
            <p>Proposed with LOVE by {props.coderName}</p>
        </div>
        <div>
        {/* aquí iría el componente play */}
        </div>
        <div className="optionsContainer">
            <div className="delete"><DeleteButton/></div>
            <div className="update"><UpdateButton/></div>
        </div>
    </div>
}

export default SongBox;

// Para llamar a este componente cumplimentando los props, sería:
// <SongBox
// image="" 
// songName="" 
// artistName="" 
// songGender="" 
// coderName=""
// />