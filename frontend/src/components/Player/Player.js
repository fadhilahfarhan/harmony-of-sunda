import './Player.css';
import musicImage from '../../assets/images/main/musicimg.jpg'
const Player = () => {
    return (
        <>
            <div className='player'>
                <div className='imgbox'>
                    <img src={musicImage} alt='poster lagu'></img>
                </div>
                <audio src='' type="audio/mp3" controls></audio>
            </div>
        </>
    )

}

export default Player;