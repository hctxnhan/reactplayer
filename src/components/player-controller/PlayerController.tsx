import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faPauseCircle,
  faBackwardStep,
  faForwardStep,
  faShuffle,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import './PlayerController.scss';
import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoop, togglePlaying, toggleShuffle, setCurrentSong } from '../../redux/Actions';
import { selectIsPlaying, selectCurrentSong, selectIsLoop, selectIsShuffle, selectSongs } from '../../redux/Selectors';

import { getNextSongID, getPrevSongID } from '../../utils/Utils';

export type PlayerControllerProps = {
  
}

const PlayerController: FunctionComponent<PlayerControllerProps> = () => {
  const dispatch = useDispatch();
  
  const songs = useSelector(selectSongs);
  const currentSong = useSelector(selectCurrentSong);
  const isPlaying = useSelector(selectIsPlaying);
  const isShuffle = useSelector(selectIsShuffle);
  const isLoop = useSelector(selectIsLoop);

  const imageStyle = {
    backgroundImage: `url(${currentSong.cover})`,
  };

  const handlePlay = () => {
    dispatch(togglePlaying());
  }

  const handleClickLoop = () => {
    dispatch(toggleLoop());
  }

  const handleClickNextSong = () => {
    const id = getNextSongID(songs, currentSong, isShuffle);
    dispatch(setCurrentSong(id));
  }

  const handleClickPrevSong = () => {
    const id = getPrevSongID(songs, currentSong, isShuffle); 
    dispatch(setCurrentSong(id));
  }

  const handleClickShuffle = () => {
    dispatch(toggleShuffle());
  }

  return (
    <div className='player-controller'>
      <div className='thumb-image' style={imageStyle}></div>
      <div className='tools-container'>
        <FontAwesomeIcon icon={faShuffle} className={`control-icon shuffle-button ${isShuffle?'shuffle-button--active':''}`} onClick={ handleClickShuffle} />
        <FontAwesomeIcon icon={faBackwardStep} className='control-icon' onClick={handleClickPrevSong} />
        <FontAwesomeIcon
          icon={isPlaying ? faPauseCircle : faPlayCircle}
          onClick={handlePlay}
          className='control-icon play-button'
        />
        <FontAwesomeIcon icon={faForwardStep} className='control-icon' onClick={handleClickNextSong} />
        <FontAwesomeIcon icon={faRotateLeft} className={`control-icon loop-button ${isLoop?'loop-button--active':''}`} onClick= {handleClickLoop} />
      </div>
    </div>
  );
}

export default PlayerController;