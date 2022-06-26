import { ISong } from '../interfaces/Interfaces'
import { CurrentSongInfo } from '../App';
import {AnyAction} from 'redux'
import chillHop from '../SongData';
import { ActionType } from './Types';
const songList = chillHop();

export type RootState = {
  songs: ISong[];
  currentSong: ISong;
  currentSongInfo: CurrentSongInfo;
  isPlaying: boolean;
  isShowPlaylist: boolean;
  isMuted: boolean;
  isLoop: boolean;
  isShuffle: boolean;
}

const initialState: RootState = {
  songs: songList,
  currentSong: songList[0],
  currentSongInfo: {
    currentTime: 0,
    duration: 0,
  },
  isPlaying: false,
  isShowPlaylist: false,
  isMuted: false,
  isLoop: false,
  isShuffle: false,
}

const rootReducer = (state: RootState = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.SET_CURRENT_SONG: {
        const currentSong = state.songs.find(song => song.id === payload);
        return {
          ...state,
          isPlaying: currentSong ? true : state.isPlaying,
          currentSong: currentSong || state.currentSong,
      }
    }
      
    case ActionType.SET_CURRENT_SONG_INFO:
      return {
        ...state,
        currentSongInfo: payload,
      }
    case ActionType.TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    case ActionType.TOGGLE_PLAYLIST:
      return {
        ...state,
        isShowPlaylist: !state.isShowPlaylist,
      }
    case ActionType.TOGGLE_MUTE:
      return {
        ...state,
        isMuted: !state.isMuted,
      }
    case ActionType.TOGGLE_LOOP:
      return {
        ...state,
        isLoop: !state.isLoop,
      }
    case ActionType.TOGGLE_SHUFFLE:
      return {
        ...state,
        isShuffle: !state.isShuffle,
      }
    default:
      return state;
  }
}

export default rootReducer;