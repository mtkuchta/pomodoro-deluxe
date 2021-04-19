import { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import sound from '../../../assets/sounds/analog-watch-alarm_daniel-simion.mp3';
import PropTypes from 'prop-types';

const Sound = ({ counterValue, isRunning }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (counterValue === 0) setPlay(true);
  }, [counterValue]);

  useEffect(() => {
    if (isRunning) setPlay(false);
  }, [isRunning]);

  return <ReactHowler src={sound} playing={play} preload={true} />;
};

Sound.propTypes = {
  counterValue: PropTypes.number,
  isRunning: PropTypes.bool,
};

export default Sound;
