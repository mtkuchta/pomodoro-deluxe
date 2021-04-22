import { useContext } from 'react';
import styled from 'styled-components';

import { PomodoroContext } from '../../../providers/PomodoroProvider';

const Wrapper = styled.div`
  display: ${({ isSettingsActive }) => (isSettingsActive ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  animation: backgroundAnimation 1s linear forwards;

  @keyframes backgroundAnimation {
    from {
      backdrop-filter: blur(0px);
    }

    to {
      backdrop-filter: blur(3px);
    }
  }
`;

const BackgroundBlured = () => {
  const {
    settings: { isSettingsActive },
  } = useContext(PomodoroContext);

  return <Wrapper isSettingsActive={isSettingsActive}></Wrapper>;
};

export default BackgroundBlured;
