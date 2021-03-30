import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 3em;
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
  letter-spacing: 1px;
  -webkit-animation: tracking-in-expand 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  animation: tracking-in-expand 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;
