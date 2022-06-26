import { CurrentSongInfo } from '../App';
import { ActionType } from './Types';
import { Action, ActionWithPayload } from '../interfaces/Interfaces';

export type SetCurrentSongActionType = ActionWithPayload<ActionType.SET_CURRENT_SONG, string>;
export type SetCurrentSongInfoActionType = ActionWithPayload<ActionType.SET_CURRENT_SONG_INFO, CurrentSongInfo>;
export type TogglePlayingActionType = Action<ActionType.TOGGLE_PLAYING>;
export type TogglePlaylistActionType = Action<ActionType.TOGGLE_PLAYLIST>;
export type ToggleMuteActionType = Action<ActionType.TOGGLE_MUTE>;
export type ToggleLoopActionType = Action<ActionType.TOGGLE_LOOP>;
export type ToggleShuffleActionType = Action<ActionType.TOGGLE_SHUFFLE>;

export const setCurrentSong: (sondId: string) => SetCurrentSongActionType = (songId: string) => ({
  type: ActionType.SET_CURRENT_SONG,
  payload: songId,
});

export const setCurrentSongInfo: (songInfo: CurrentSongInfo) => SetCurrentSongInfoActionType = (songInfo: CurrentSongInfo) => ({
  type: ActionType.SET_CURRENT_SONG_INFO,
  payload: songInfo,
});

export const togglePlaying: () => TogglePlayingActionType = () => ({
  type: ActionType.TOGGLE_PLAYING,
});

export const toggleShowPlaylist: () => TogglePlaylistActionType = () => ({
  type: ActionType.TOGGLE_PLAYLIST,
});

export const toggleMute: () => ToggleMuteActionType = () => ({
  type: ActionType.TOGGLE_MUTE,
});

export const toggleLoop: () => ToggleLoopActionType = () => ({
  type: ActionType.TOGGLE_LOOP,
});

export const toggleShuffle: () => ToggleShuffleActionType = () => ({
  type: ActionType.TOGGLE_SHUFFLE,
});



