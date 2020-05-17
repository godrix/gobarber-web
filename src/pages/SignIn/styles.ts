import styled from 'styled-components';
import signImage from '../../assets/sign-in-background.png'
import {shade} from 'polished';

export const Container = styled.div`
height:100vh;
display:flex;
align-items:stretch;
`;

export const Content = styled.div`
display:flex;
flex-direction:column;

place-content:center;

align-items:center;
justify-content:center;

width:100%;
max-width:700px;

form{
  margin:50px 0;
  width:340px;
  text-align:center;

  h1{
    margin-bottom:24px;
  }

  input{
    background:#232129;
    color:#F4ede8;
    border-radius:10px;
    border:2px solid #232129;
    padding:16px;
    width:100%;

    & + input{
      margin-top:8px;
    }
  }

  button{
    background:#ff9000;
    color:#232129;
    height:56px;
    border-radius:10px;
    border:0px solid #232129;
    padding:0 16px;
    width:100%;
    font-weight:600;
    margin-top:16px;
    transition:background-color 0.2s;

    &:hover{
      background:${shade(0.2, '#ff9000')}
    }
  }
  a{
    color:#F4ede8;
    display:block;
    text-decoration:none;
    margin-top:24px;

    &:hover{
      color:${shade(0.2, '#F4ede8')}
    }

  }

  a > {
    color:#ff9000;
    display:block;
    text-decoration:none;
    margin-top:24px;

    display:flex;
    align-items:center;

    svg{
      margin-right:16px;
    }

    &:hover{
      color:${shade(0.2, '#ff9000')}
    }
  }

}
`;

export const Backgroung = styled.div`
  flex:1;
  background: url(${signImage}) no-repeat center;
  background-size:cover;
`;
