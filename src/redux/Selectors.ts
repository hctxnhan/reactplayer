import { StoreState } from './store';
import { createSelector } from 'reselect';

export const selectState = (state:StoreState) => state.rootReducer;
export const selectSongs = createSelector([selectState], (root) => root.songs);
export const selectCurrentSong = createSelector([selectState], (root) => root.currentSong);
export const selectCurrentSongInfo = createSelector([selectState], (root) => root.currentSongInfo);
export const selectIsPlaying = createSelector([selectState], (root) => root.isPlaying);
export const selectIsShowPlaylist = createSelector([selectState], (root) => root.isShowPlaylist);
export const selectIsMuted = createSelector([selectState], (root) => root.isMuted);
export const selectSongColor = createSelector([selectCurrentSong], (song) => song.color);
export const selectIsLoop = createSelector([selectState], (root) => root.isLoop);
export const selectIsShuffle = createSelector([selectState], (root) => root.isShuffle);