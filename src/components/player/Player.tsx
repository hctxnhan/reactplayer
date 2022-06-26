import './Player.scss'
import { FunctionComponent } from 'react';
import PlayerController from '../player-controller/PlayerController';
import SongInfo from '../song-info/SongInfo';
import { selectIsShowPlaylist } from '../../redux/Selectors';
import { useSelector } from 'react-redux';
type PlayerProps = {
}

const Player: FunctionComponent<PlayerProps> = () => {
  const isShowPlaylist = useSelector(selectIsShowPlaylist);
  return (
    <div className={`player ${isShowPlaylist ? 'player--step-aside':' '}`}>
          <PlayerController />
          <SongInfo />
        </div>
  )
}

export default Player;
