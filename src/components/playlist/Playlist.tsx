import './Playlist.scss';
import { FunctionComponent } from 'react';
import PlaylistItem from '../playlist-item/PlaylistItem';
import { selectSongs } from '../../redux/Selectors';
import { useSelector } from 'react-redux';
import { selectIsShowPlaylist } from '../../redux/Selectors';
export type PlaylistProps = {
}

const Playlist: FunctionComponent<PlaylistProps> = () => {
  const songs = useSelector(selectSongs);

  const isShowPlaylist = useSelector(selectIsShowPlaylist);

  return (
    <div className={`playlist ${isShowPlaylist? '':'playlist--hide'}`} >
      {songs.map((song, index) => (
        <PlaylistItem order={index} song={song} key={song.id} />
      ))}
    </div>
  );
};

export default Playlist;
