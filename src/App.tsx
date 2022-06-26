import './App.scss';
import Slider from './components/slider/Slider';
import Player from './components/player/Player';
import Playlist from './components/playlist/Playlist';

import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSong, selectIsPlaying, selectIsMuted, selectIsLoop, selectIsShuffle, selectSongs } from './redux/Selectors';
import { setCurrentSong, setCurrentSongInfo } from './redux/Actions';

import { store } from './redux/store';
import { getNextSongID } from './utils/Utils';

export type CurrentSongInfo = {
  currentTime: number;
  duration: number;
}

function App() {
  const dispatch = useDispatch();
  const songs = useSelector(selectSongs);
  const currentSong = useSelector(selectCurrentSong);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlaying = useSelector(selectIsPlaying);
  const isMuted = useSelector(selectIsMuted);
  const isLoop = useSelector(selectIsLoop);
  const isShuffle = useSelector(selectIsShuffle);
  console.log(store.getState());


  const handleOnLoadedData = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      }
      else {
        audioRef.current.pause();
      }
    }
  }

  useEffect(() => {
    handleOnLoadedData();
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 1;
    }
  }, [isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.audio;
    }
  }, [currentSong]);

  const handleOnLoadedMetaData = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      dispatch(setCurrentSongInfo({ currentTime: current, duration }));
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      dispatch(setCurrentSongInfo({ currentTime: current, duration }));
    }
  }

  const handleAudioEnded = () => {
    if (audioRef.current) {

      if (isLoop) {
        audioRef.current.currentTime = 0;
      }
      else {
        let id = getNextSongID(songs, currentSong, isShuffle);
        dispatch(setCurrentSong(id));
      }
      
      audioRef.current.play();
      dispatch(setCurrentSongInfo({ currentTime: 0, duration: audioRef.current.duration }));
    }
  }

  const style = {
      backgroundImage: `url(${currentSong.cover})`,
  }
  return (
    
    <div className='App' style={style}>
      <div className='body'>
        <div className='header'></div>
        <Player />
        <Slider audioRef={ audioRef} />
        <Playlist />
      </div>
      <audio ref={audioRef} src={currentSong.audio} id='audio-source' onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnded} onLoadedMetadata={handleOnLoadedMetaData} onLoadedData={handleOnLoadedData} />
    </div>
  );
}

export default App;
