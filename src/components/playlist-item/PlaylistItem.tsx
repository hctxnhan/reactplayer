import './PlaylistItem.scss';
import { FunctionComponent } from 'react';
import { ISong } from '../../interfaces/Interfaces';
import { setCurrentSong } from '../../redux/Actions';
import { useDispatch } from 'react-redux';
export type PlaylistItemProps = {
  song: ISong;
  order: number;
}

const PlaylistItem: FunctionComponent<PlaylistItemProps> = ({ song, order }) => {
  const dispatch = useDispatch();

  const style = {
    backgroundImage: `url(${song.cover})`,
  };

  const handleSelectSong = () => {
    dispatch(setCurrentSong(song.id));
  }

  return (
    <div className='playlist-item' onClick={handleSelectSong}>
      <div className='playlist-item__order'>{order}</div>
      <div className='playlist-item__image' style={style}></div>
      <div className='playlist-item__info' >
        <h3 className='playlist-item__title'>{song.name}</h3>
        <p className='playlist-item__author'>{song.artist}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;
