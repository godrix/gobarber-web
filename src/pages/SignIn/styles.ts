import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Backgroung = styled.div`
  flex: 1;
  background: url(${signImage}) no-repeat center;
  background-size: cover;
`;

const appearFromLeft = keyframes`
from {
  opacity:0;
  transform:translateX(-100px);
}
to{
  opacity:1;
  transform:translateX(0px);
}
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;
  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      margin-top: 24px;

      &:hover {
        color: ${shade(0.2, '#F4ede8')};
      }
    }

    a > {
      color: #ff9000;
      display: block;
      text-decoration: none;
      margin-top: 24px;

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;
