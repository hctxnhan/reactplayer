import './SongInfo.scss';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux'
import { selectCurrentSong } from '../../redux/Selectors'
export type SongInfoProps = {
}

const SongInfo: FunctionComponent<SongInfoProps> = () => {
  const currentSong = useSelector(selectCurrentSong);
  return (
    <div className='song-info'>
      <h1 className='song-title'>{currentSong.name}</h1>
      <h2 className='song-artist'>{currentSong.artist}</h2>
    </div>
  );
}

export default SongInfo;
