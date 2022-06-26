import './Slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListSquares, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentSongInfo, selectIsMuted } from '../../redux/Selectors';
import { toggleShowPlaylist, toggleMute } from '../../redux/Actions';

type SliderProps = {
  audioRef : React.RefObject<HTMLAudioElement>
}

const Slider: FunctionComponent<SliderProps> = ({audioRef}) => {
  const dispatch = useDispatch();

  const currentSongInfo = useSelector(selectCurrentSongInfo);
  const isMuted = useSelector(selectIsMuted);

  const { currentTime, duration } = currentSongInfo;
  const progress = currentTime / duration;
  const time = calculateTime(currentTime);
  const totalTime = calculateTime(duration);

  const style = {
    width: `${progress * 100}%`,
  }

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const rect = e.currentTarget.getBoundingClientRect();
    const progress = (x - rect.left) / rect.width;
    const currentTime = progress * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }

  const handleClickPlaylistButton = () => {
    dispatch(toggleShowPlaylist());
  }

  const handleClickMuteButton = () => {
    dispatch(toggleMute());
  }

  return (
    <div className='slider'>
      <div className='start-time'>{ time}</div>
      <div className='time-slider' onClick={handleDrag}>
        <div className='time-slider-bar' style={style}></div>
      </div>
      <div className='end-time'>{totalTime}</div>
      <FontAwesomeIcon icon={faListSquares} className='playlist-button icon' onClick={handleClickPlaylistButton} />
      <FontAwesomeIcon icon={isMuted?faVolumeMute : faVolumeUp} className='volume-button icon' onClick={handleClickMuteButton} />
    </div>
  );
}

const calculateTime = (currentTime: number): string => {
  // check if nan
  if (isNaN(currentTime)) {
    return '00:00';
  }

  const timeMinutes = Math.floor(currentTime / 60);
  const timeSeconds = Math.floor(currentTime % 60);
  
  let timeMinutesStr = timeMinutes.toString();
  let timeSecondsStr = timeSeconds.toString();

  if (timeMinutes < 10) {
    timeMinutesStr = `0${timeMinutesStr}`;
  }
  if (timeSeconds < 10) {
    timeSecondsStr = `0${timeSecondsStr}`;
  }

  return `${timeMinutesStr}:${timeSecondsStr}`;
}

export default Slider;