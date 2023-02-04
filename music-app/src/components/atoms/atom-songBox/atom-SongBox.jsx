import React from 'react';

const SongBox = () => {
    return <div className="songContainer">
        <img></img>
        <div>
            <p className="songsName"></p>
            <p className="artistsName"></p>
            <p className="gender"></p>
        </div>
        <p className="coder">Proposed with LOVE by</p>
        {/* aquí iría el componente play */}
        <div>
            <DeleteButton/>
        </div>
    </div>
    

}

export default SongBox;