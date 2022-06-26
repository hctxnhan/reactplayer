import { ISong } from '../interfaces/Interfaces'
export const getNextSongID: (songs: ISong[], currentSong: ISong, isShuffle: boolean) => string = (songs, currentSong, isShuffle) => {
  const nextSongIndex = (songs.findIndex(song => song.id === currentSong.id) + 1) % songs.length;
  const id = isShuffle ? songs[Math.floor(Math.random() * songs.length)].id : songs[nextSongIndex].id;
  return id;
}

export const getPrevSongID: (songs: ISong[], currentSong: ISong, isShuffle: boolean) => string = (songs, currentSong, isShuffle) => {
  let nextSongIndex = (songs.findIndex(song => song.id === currentSong.id) - 1) % songs.length;
  if (nextSongIndex < 0) {
    nextSongIndex = songs.length - 1;
  }
  
  const id = isShuffle ? songs[Math.floor(Math.random() * songs.length)].id : songs[nextSongIndex].id;
  return id;
}